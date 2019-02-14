import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import {Airline} from '../airline';
import {AirlineService} from '../airline.service';

@Component({
  selector: 'app-airline-detail',
  templateUrl: './airline-detail.component.html',
  styleUrls: ['./airline-detail.component.scss']
})
export class AirlineDetailComponent implements OnInit {
  airline: Airline;

  constructor(
    private route: ActivatedRoute,
    private airlineService: AirlineService,
    private location: Location
  ) {}

  ngOnInit(): void {
    // this.getAirline();
  }

  /*getAirline(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.airlineService.getAirline(id)
      .subscribe(airline => this.airline = airline);
  }*/

  goBack(): void {
    this.location.back();
  }

}
