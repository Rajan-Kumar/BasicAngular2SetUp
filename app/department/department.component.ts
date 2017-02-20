import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'department.component.html' ,
  styleUrls: ['department.component.css']
})
export class DepartmentComponent {
  obj = { id: 100, name: 'This is home page' };
  // color = 'blue';
}

