import { FirebaseService } from './services/firebase.service';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { FirebaseAppModule } from '@angular/fire/app';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, SearchbarComponent],
  exports: [NavbarComponent, FooterComponent, SearchbarComponent],
  imports: [CommonModule, FormsModule, RouterModule, FirebaseAppModule],
  providers: [FirebaseService],
})
export class SharedModule {}
