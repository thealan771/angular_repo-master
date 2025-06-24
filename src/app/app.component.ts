import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'renta-autos';

  constructor(public router: Router) {}

  ngOnInit(): void {
    // Notificación simulada para wearables
    setTimeout(() => {
      alert('🔔 Tu renta inicia en 1 hora.');
    }, 3000); // Espera 3 segundos antes de mostrar
  }
}
