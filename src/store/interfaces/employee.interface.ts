export interface IEmployeeList {
  status: string;
  data:   IEmployee[];
  total:  number;
}

export interface IEmployee {
  id:            number;
  name:          string;
  email:         string;
  role:          string;
  department:    string;
  office:        string;
  accountStatus: string;
}
