
export interface employee {
    id: any,
    employeeName: String,
    address: String,
    contact: any
}

export interface employeeState {
    employee: employee[],
    queryString: String
}

export const initialState: employeeState = {

    employee: [],
    queryString: ''
}