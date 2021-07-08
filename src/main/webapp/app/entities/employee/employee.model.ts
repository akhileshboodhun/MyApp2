export interface IEmployee {
  id?: number;
  name?: string | null;
  department?: string | null;
  salary?: number | null;
}

export class Employee implements IEmployee {
  constructor(public id?: number, public name?: string | null, public department?: string | null, public salary?: number | null) {}
}

export function getEmployeeIdentifier(employee: IEmployee): number | undefined {
  return employee.id;
}
