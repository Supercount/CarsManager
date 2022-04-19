import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {


  img : boolean = false;
  registerForm!: FormGroup;

  typeList : String[] = [];

  car: Car = {
    id: 0,
    title: '',
    address: '',
    brand: '',
    model: '',
    model_year: 0,
    issuance: Date.now(),
    mileage: 0,
    fuel: '',
    color: '',
    numbers_doors: 0,
    horse_power: 0,
    price: 0,
    pictures: [],
    sold: false
  };

  constructor(private service : CarsService, private formBuilder : FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
    });
  }

  newImage() {
    this.img = true;
  }

  ajouter(): void {
    const data = {
      id: this.car.id,
      title: this.car.title,
      address: this.car.address,
      brand: this.car.brand,
      model: this.car.model,
      model_year: this.car.model_year,
      issuance: this.car.issuance,
      mileage: this.car.mileage,
      fuel: this.car.fuel,
      color: this.car.color,
      numbers_doors: this.car.numbers_doors,
      horse_power: this.car.horse_power,
      price: this.car.price,
      pictures: this.car.pictures,
      sold: this.car.sold
    };
    this.service.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
      this.router.navigate(['/cars']);
  }

  

}
