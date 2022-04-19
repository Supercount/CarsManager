import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  carList : Car[] = [];

  constructor(private carService : CarsService) { }

  ngOnInit(): void {
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
