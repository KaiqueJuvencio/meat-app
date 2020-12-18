import { RestaurantsService } from './../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurants/restaurant/restaurant.model'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurants-detail',
  templateUrl: './restaurants-detail.component.html',
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //Usa o snapshot quando nao precisa de iteracao (como se fosse uma foto)
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
