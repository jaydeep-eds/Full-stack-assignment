import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { employee, employeeState } from './state/home.state';
import { Observable } from 'rxjs'
import { getEmployeeDetails, loadPosts } from './state/home.actions';
import { getEmployees } from './state/home.selectors';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  value: any;



  employees$: Observable<employee[]> | undefined;


  constructor(private store: Store<employeeState>) {

  }

  ngOnInit(): void {

    if (this.employees$ == null) {
      this.store.dispatch(loadPosts());

      this.employees$ = this.store.select(getEmployees);
    }

  }

  onSearch() {
    this.store.dispatch(getEmployeeDetails({ queryString: this.value }))
  }


}
