import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buscar', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, { useHash: true });
