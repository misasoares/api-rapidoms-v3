export class UserFromJwt {
  uid: string;
  email: string;
  name: string;
  roles: { name: string; uid: string }[];
}
