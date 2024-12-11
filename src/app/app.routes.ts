import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ApiDataComponent } from './pages/api-page/api-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'api-page', component: ApiDataComponent },
  { path: 'form', component: FormPageComponent },
  { path: '**', redirectTo: '' }
];
