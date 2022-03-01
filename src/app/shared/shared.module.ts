import { FirebaseService } from './services/firebase.service';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, SearchbarComponent],
  exports: [NavbarComponent, FooterComponent, SearchbarComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [FirebaseService],
})
export class SharedModule {}
