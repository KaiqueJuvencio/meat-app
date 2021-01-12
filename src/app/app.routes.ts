import { ProjectsComponent } from './projects/projects.component';
import { MenuComponent } from './restaurants-detail/menu/menu.component';
import { ReviewsComponent } from './restaurants-detail/reviews/reviews.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'
import { RestaurantDetailComponent } from './restaurants-detail/restaurants-detail.component'
import {Routes} from '@angular/router'
import { LoginComponent } from './security/login/login.component';
import { SvgComponent } from './svg/svg.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
  ]},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'svg', component: SvgComponent}
]
