import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent {
  historial: any[] = [];

  constructor() {
    this.cargarHistorial();
  }

  cargarHistorial() {
    const historialJSON = localStorage.getItem('historialReservas');
    this.historial = historialJSON ? JSON.parse(historialJSON) : [];
  }

  marcarComoEntregado(index: number) {
    this.historial[index].estado = 'Finalizado';
    localStorage.setItem('historialReservas', JSON.stringify(this.historial));
    this.cargarHistorial(); // Para asegurar que se refleje
  }
}
