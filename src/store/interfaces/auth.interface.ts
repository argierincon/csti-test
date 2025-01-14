export interface IAuthPayload {
  correo:   string;
  password: string;
}

export interface IAuth {
  status: string;
  data:   IData;
}

export interface IData {
  token: string;
  user:  IUser;
}

export interface IUser {
  id:            number;
  name:          string;
  email:         string;
  role:          string;
  department:    string;
  office:        string;
  accountStatus: string;
}
