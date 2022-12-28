import { createReducer, on } from "@ngrx/store";
import { getEmployeeDetails, loadPostsSuccess } from "../actions/employee.actions";



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

export const _employeeReducer = createReducer(
    initialState,
    on(getEmployeeDetails, (state, action) => {

        return {
            ...state,


            queryString: action.queryString
        }
    }),
    on(loadPostsSuccess, (state, action) => {
        return {
            ...state,
            employee: action.employee
        }

    })

)
