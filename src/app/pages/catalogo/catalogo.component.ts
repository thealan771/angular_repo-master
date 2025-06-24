import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {
  constructor(private router: Router) {}

  autos = [
    {
      nombre: 'Corolla',
      imagen: 'https://www.toyota.mx/adobe/dynamicmedia/deliver/dm-aid--36c3ce21-2279-4241-9265-bb1697d5aed1/corolla-base-v3.png',
      precio: 3999
    },
    {
      nombre: 'Honda Civic',
      imagen: 'https://www.honda.mx/web/img/cars/models/civic/2025/colors/blanco.png',
      precio: 4999
    },
    {
      nombre: 'Ford Mustang',
      imagen: 'https://www.vdm.ford.com/content/dam/na/ford/en_us/images/mustang/2025/jellybeans/Ford_Mustang_2025_100A_PYZ_88D_89W_13A_COU_64F_99H_44U_EBST_DEFAULT_EXT_1.png',
      precio: 5999
    },
    {
      nombre: 'Chevrolet 4x4',
      imagen: 'https://www.chevroletaguinaco.com.mx/content/dam/chevrolet/na/mx/es/index/pickups-and-trucks/2024-silverado/colorizer/01-images/jellies/blanco.jpg',
      precio: 6999
    },
    {
      nombre: 'Mazda 3 2025',
      imagen: 'https://i0.wp.com/gminmediauto.com/wp-content/uploads/2024/03/Mazda-3-I-Touring-2018-At-Hatchback-2.5-Blanco-1.png',
      precio: 6999
    },
    {
      nombre: 'Mazda CX-30 2050',
      imagen: 'https://www.mazdausa.com/siteassets/vehicles/2025/cx-30/04_btv/001_trims/34-jellies/02_-2.5-s-select-sport/2025-mazda-cx-30-2.5-s-select-sport',
      precio: 8999
    },
    {
      nombre: 'Limosina',
      imagen: 'https://png.pngtree.com/png-clipart/20250119/original/pngtree-close-up-of-a-modern-white-limo-with-tinted-windows-reflecting-png-image_19405947.png',
      precio: 11999
    },
    {
      nombre: 'Suburban 2020',
      imagen: 'https://back.chevrolet.com.do/wp-content/uploads/2019/04/2019-suburban-suv-ltz-gaz-colorizer-2.png',
      precio: 9999
    },
    {
      nombre: 'Silverado',
      imagen: 'https://www.autofondochevrolet.com.pe/content/dam/chevrolet/sa/pe/es/master/home/all-vehicles/silverado/2-colorizer/silverado-z71-blanco-perla.png?imwidth=1920',
      precio: 6999
    },
    {
      nombre: 'Nissan NV350',
      imagen: 'https://www.nissaniguala.com.mx/resourcefiles/newvehicleimages/nissan-2021-nv350-urvan-panel-4-ventanas-amplia-paq-seg-tm-blanco-gris-exterior-v1-d-6.jpg',
      precio: 6999
    }

  ];

  irAReserva(nombreAuto: string, precio: number, imagen: string) {
  this.router.navigate(['/reservar'], {
    queryParams: {
      auto: nombreAuto,
      precio: precio,
      imagen: imagen
    }
  });
}
}
