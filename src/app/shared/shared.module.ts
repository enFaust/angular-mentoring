import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, LogoComponent, UserMenuComponent],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
