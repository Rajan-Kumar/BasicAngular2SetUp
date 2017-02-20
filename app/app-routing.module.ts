import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home', }, 
  {path: 'home', component: HomeComponent},
  { path: 'department', component: DepartmentComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  HomeComponent,
  DepartmentComponent  
];
