export interface DecodedToken {
  user: User;
  exp: number;
}

export interface User {
  _id: string;
  username: string;
}
