import { provideRouter, Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ReservarComponent } from './pages/reservar/reservar.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { InformacionComponent } from './pages/informacion/informacion.component';

export const routes: Routes = [
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'reservar/:auto', component: ReservarComponent }, // <--- Aquí el cambio
  { path: 'historial', component: HistorialComponent },
  {
  path: 'reservar',
  loadComponent: () => import('./pages/reservar/reservar.component').then(m => m.ReservarComponent)
  },

  { path: 'informacion', component: InformacionComponent },
  { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
];

