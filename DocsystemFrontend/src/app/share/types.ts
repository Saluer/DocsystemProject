interface Assignment {
  id: number;
  subject: string;
  author: Employee;
  //   operators;
  deadline: string;
  controlSign: boolean;
  operateSign: boolean;
  content?: string;
}

type Assignments = Assignment[];

interface Employee {
  id?: number;
  firstname: string;
  patronymic: string;
  surname: string;
  position: string;
}

type Employees = Employee[];

interface Department {
  name: string;
  contactInfo: string;
  employees: Employees;
}

type Departments = Department[];

interface Organization {
  name: string;
  physAddress: string;
  jureAddress: string;
  departments: Departments;
}
