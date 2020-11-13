import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingGuestComponent} from './landing-guest/landing-guest.component';
import {LandingUserComponent} from './landing-user/landing-user.component';


@NgModule({
  declarations: [
    LandingGuestComponent,
    LandingUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
