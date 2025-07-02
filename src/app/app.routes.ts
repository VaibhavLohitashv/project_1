import {Routes} from '@angular/router';
import {Home} from './pages/home/home';
import {About} from './pages/about/about';
import {Profile} from './pages/profile/profile';
import {PageNotFound} from './pages/page-not-found/page-not-found';
import {Login} from './pages/login/login';
import {Signup} from './pages/signup/signup';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'profile', component: Profile},
  {path: 'login', component: Login},
  {path: 'signup', component: Signup},
  {path: '**', component: PageNotFound},
];
