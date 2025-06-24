import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})
export class ReservarComponent {
  precioPorDia: number = 0;

  reserva = {
    auto: '',
    fechaInicio: '',
    horaInicio: '',
    duracion: ''
  };

 imagenAuto: string = '';

constructor(private route: ActivatedRoute) {
  this.route.queryParams.subscribe(params => {
    const auto = params['auto'];
    const precio = params['precio'];
    const imagen = params['imagen'];

    if (auto) {
      this.reserva.auto = auto;
    }

    if (precio) {
      this.precioPorDia = +precio;
    }

    if (imagen) {
      this.imagenAuto = imagen;
    }
  });
}

  confirmarReserva() {
    if (!this.reserva.auto || !this.reserva.fechaInicio || !this.reserva.horaInicio || !this.reserva.duracion) {
      alert('Por favor completa todos los campos para reservar.');
      return;
    }

    // Guardar reserva en localStorage
    const historialJSON = localStorage.getItem('historialReservas');
    let historial = historialJSON ? JSON.parse(historialJSON) : [];

    historial.push({
      nombre: this.reserva.auto,
      fecha: this.reserva.fechaInicio,
      hora: this.reserva.horaInicio,
      duracion: this.reserva.duracion,
      estado: 'Activo',
      precio: this.precioPorDia
    });

    localStorage.setItem('historialReservas', JSON.stringify(historial));

    alert(`Reserva realizada para el ${this.reserva.auto}`);

    // Opcional: limpiar formulario después de reservar
    this.reserva.fechaInicio = '';
    this.reserva.horaInicio = '';
    this.reserva.duracion = '';
  }
}
