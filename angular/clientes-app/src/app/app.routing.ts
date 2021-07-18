import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { DirectivaComponent } from './directiva/directiva.component';

const routes: Routes = [
  { path: '', redirectTo:'/clientes' ,pathMatch: 'full' },
  { path: 'clientes', component: ClientesComponent },
  { path: 'directivas', component: DirectivaComponent },
];

export const AppRoutes = RouterModule.forRoot(routes);
