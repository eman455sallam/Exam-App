import { Component, signal } from '@angular/core';

import { AuthLayout } from "./layout/auth-layout/auth-layout";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [AuthLayout, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exam-app');
}
