
import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action,
} from '@ngrx/store';

import { employee, employeeState, _employeeReducer } from "./employee.reducers";

export const employeesFeatureKey = 'employees';


/** Provide reducer in AoT-compilation happy way */


export function employeeReducer(state: any, action: any) {
    return _employeeReducer(state, action);
}
/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 *   constructor(state$: Observable<State>) {
 *     this.booksState$ = state$.pipe(select(getBooksState));
 *   }
 * }
 * ```
 */

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */

  


const getEmployeeState = createFeatureSelector<employeeState>('employee');




export const getEmployees = createSelector(getEmployeeState, (state) => {

    if (state.queryString == null) {
        return state.employee;
    }
    return state.employee.filter((data) => {
        return data.employeeName.toLowerCase().startsWith(state.queryString?.toLowerCase())
    });;
})
