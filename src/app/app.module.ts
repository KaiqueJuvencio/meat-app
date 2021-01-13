import { LoginService } from './security/login/login.service';
import { ProjectsService } from './services/projects.service';
import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsService } from './restaurants/restaurants.service';
import { RestaurantDetailComponent } from './restaurants-detail/restaurants-detail.component';
import { MenuComponent } from './restaurants-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurants-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurants-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurants-detail/reviews/reviews.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './security/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SvgComponent } from './svg/svg.component';
import { TesteDirective } from './directives/teste.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    ProjectsComponent,
    LoginComponent,
    SvgComponent,
    TesteDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService, ProjectsService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
