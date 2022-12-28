import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  EmployeeContainerComponent
} from '../employee/containers';


export const routes: Routes = [
  {
    path: '',
    component: EmployeeContainerComponent,
    data: { title: 'Employee' },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
