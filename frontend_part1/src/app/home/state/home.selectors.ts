import { createFeatureSelector, createSelector } from "@ngrx/store";
import { employee, employeeState } from "./home.state";

const getEmployeeState = createFeatureSelector<employeeState>('employee');

export const getEmployees = createSelector(getEmployeeState, (state) => {

    if (state.queryString == null) {
        return state.employee;
    }
    return state.employee.filter((data) => {
        return data.employeeName.toLowerCase().startsWith(state.queryString?.toLowerCase())
    });;
})
