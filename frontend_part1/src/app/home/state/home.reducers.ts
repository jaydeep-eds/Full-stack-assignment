import { createReducer, on } from "@ngrx/store";
import { getEmployeeDetails, loadPostsSuccess } from "./home.actions";
import { employee, initialState } from "./home.state";

const _employeeReducer = createReducer(
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

export function employeeReducer(state: any, action: any) {
    return _employeeReducer(state, action);
}