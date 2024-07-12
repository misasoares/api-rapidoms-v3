export interface UserToken {
  access_token: string;
  user: { email: string; displayName: string; uid: string };
}
