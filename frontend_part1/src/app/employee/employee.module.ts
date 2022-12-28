import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { EmployeesRoutingModule } from '../employee/employee-routing.module';
import {
EmployeeComponent,

} from '../employee/components';
import {
EmployeeContainerComponent
} from '../employee/containers';
import { EmployeeEffects } from '../employee/effects';

import * as fromEmployee from '../employee/reducers';


import { FormsModule } from '@angular/forms';



export const COMPONENTS = [
 EmployeeComponent,


];

export const CONTAINERS = [
  EmployeeContainerComponent
];

@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    EmployeesRoutingModule,

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature(fromEmployee.employeesFeatureKey, fromEmployee.employeeReducer),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([EmployeeEffects]),
    
  ],
  declarations: [COMPONENTS, CONTAINERS],
})
export class EmployeesModule {}
