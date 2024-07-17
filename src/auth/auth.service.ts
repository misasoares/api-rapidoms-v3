import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from './errors/unauthorized.error';
import { UserService } from '../user/user.service';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(user: any): Promise<UserToken> {
    const payload: UserPayload = {
      sub: user.uid,
      email: user.email,
      name: user.name,
      roles: user.roles,
    };

    return {
      user: {
        email: payload.email,
        displayName: payload.name,
        uid: payload.sub,
        roles: payload.roles.map((role) => role.name),
      },
      access_token: this.jwtService.sign(payload),
    };
  }

  async accessToken(userUid: string) {
    const user = await this.userService.findByUid(userUid);

    if (!user) throw new BadRequestException('Usuário não encontrado');

    return this.generateToken(user);
  }

  async generateToken(userData: any) {
    const token = await this.jwtService.signAsync({
      sub: userData.uid,
      email: userData.email,
      name: userData.name,
      roles: userData.roles,
    });

    const user = {
      uid: userData.uid,
      displayName: userData.name,
      email: userData.email,
      role: userData.roles,
    };

    return { user, access_token: token };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new UnauthorizedError(
      'Email address or password provided is incorrect.',
    );
  }
}
