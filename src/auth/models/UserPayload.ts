export interface UserPayload {
  sub: string;
  email: string;
  name: string;
  roles: { uid: string; name: string }[];
  iat?: number;
  exp?: number;
}
