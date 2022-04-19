import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  idCar !: number;
  
  car!: Car;

  constructor(private route: ActivatedRoute,private carService : CarsService, private router: Router) { }

  ngOnInit(): void {
    this.idCar = Number(this.route.snapshot.paramMap.get('id'));
    
    this.carService.getCar(this.idCar).subscribe({
      next: car => {
        this.car = car;
      }, error: err => {
        console.log(err);
      }, complete: () => {
        console.log('fin de chargement');
      }
    }
    );
  }

  delete() {
    this.carService.delete(this.idCar);
    this.router.navigate(['/cars']);
  }

}
