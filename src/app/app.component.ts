import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/aditiones/navbar/navbar.component';
import { FooterComponent } from './layout/aditiones/footer/footer.component';
import {  NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';







@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {







  title = 'app6';
}
