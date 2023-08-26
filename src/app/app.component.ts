import { Component } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Title = 'First Project';
  Age = 48;
  ph_Name = "Input your name";
  Name_Value = "";
  Counter = 0;

  model = new Employee(1, "Dilip Patra");

  GetAge ()
  {
    return this.Age;
  }

  GetData(val:string)
  {
    alert(val);
  }

  SetDataName(val:string)
  {
    this.Name_Value = val;
  }

  Count(val:string)
  {
    val === "+" ? this.Counter++ : this.Counter--;
  }
}
