import { Component, OnInit } from '@angular/core';

import {Airline, Airlines} from '../airline';
import {AirlineService} from '../airline.service';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.scss']
})
export class AirlinesComponent implements OnInit {

  constructor(private airlineService: AirlineService) { }

  airlines: Airline[]

  ngOnInit() {
    this.getAirlines();
  }

  getAirlines() {
    this.airlineService.getAirlines()
      .subscribe(
        response => response ? this.airlines = response.airlines : this.airlines = [],
        err => console.log(err),
        () => console.log('completed')
      );

  }

}
