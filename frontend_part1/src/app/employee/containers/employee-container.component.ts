
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { employee, employeeState } from '../reducers/employee.reducers';
import { getEmployees } from '../reducers';
import { getEmployeeDetails, loadPosts } from '../actions/employee.actions';

@Component({
  selector: 'employee-container-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
   
  
  
  <app-employee [Employee]="(employees$ | async)!" (search)="onSearch($event)"  ></app-employee>
   
  `,
  /**
   * Container components are permitted to have just enough styles
   * to bring the view together. If the number of styles grow,
   * consider breaking them out into presentational
   * components.
   */
  styles: [
    `
    `,
  ],
})
export class EmployeeContainerComponent implements OnInit {
  
    employees$: Observable<employee[]> | undefined;
    


    constructor(private store: Store<employeeState>) {
  
    }
  
    ngOnInit(): void {
  
        this.store.dispatch(loadPosts());
  
        this.employees$ = this.store.select(getEmployees);
      
  
    }

    onSearch(value:String) {
        this.store.dispatch(getEmployeeDetails({ queryString: value }))
      }
}
