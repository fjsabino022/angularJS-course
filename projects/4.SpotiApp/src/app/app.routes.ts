import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buscar', component: SearchComponent },
    { path: 'artista/:id', component: ArtistaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, { useHash: true });
