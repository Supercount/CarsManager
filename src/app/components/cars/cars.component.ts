import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  carList : Car[] = [];
  type: string = "";
  ordre:string = "";
  
  registerForm!: FormGroup;

  constructor(private carService : CarsService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
    });
    this.carService.getCars().subscribe({
      next: cars => {
        this.carList = cars;
      }, error: err => {
        console.log(err);
      }, complete: () => {
        console.log('fin de chargement');
      }
    }
    );
  }


}
