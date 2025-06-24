import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('700ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class InformacionComponent {
  mostrarLeyes = false;

  chartData = {
    labels: ['Clientes Satisfechos', 'Proyectos Completados', 'Crecimiento'],
    datasets: [
      {
        label: 'Progreso de la Empresa',
        data: [90, 80, 70],
        backgroundColor: ['#0d6efd', '#198754', '#ffc107']
      }
    ]
  };

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Clave para que no se estire
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    },
    scales: {
      x: {
        ticks: { color: 'white' },
        grid: { color: '#444' }
      },
      y: {
        ticks: { color: 'white' },
        grid: { color: '#444' }
      }
    }
  };

  chartType: ChartType = 'bar';
}
