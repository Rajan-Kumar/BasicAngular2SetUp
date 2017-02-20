import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'home.component.html' ,
  styleUrls: ['home.component.css']
})
export class HomeComponent {

  // constructor(private router: Router)
  //  {  }

  obj = { id: 100, name: 'This is home page.' };
  // color = 'blue';


}

