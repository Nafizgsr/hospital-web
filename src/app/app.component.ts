import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponentComponent } from "./footer-component/footer-component.component";
import { NavComponentComponent } from "./nav-component/nav-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponentComponent, NavComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hospital-web';
}
