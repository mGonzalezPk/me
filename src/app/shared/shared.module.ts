import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { StopPropagationDirective } from './directives';




@NgModule({
  declarations: [NavbarComponent, StopPropagationDirective],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    NavbarComponent,
    AppRoutingModule,
    StopPropagationDirective]
})
export class SharedModule { }
