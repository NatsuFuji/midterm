import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayquotesComponent } from './displayquotes/displayquotes.component';
import { FormsComponent } from './forms/forms.component';

@Component({
  selector: 'app-root',
  imports: [ DisplayquotesComponent, FormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ITS320_FRONTEND_DOJILLO';
}