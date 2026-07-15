import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { About } from './page/about/about';
import { StatInfo } from './page/stat-info/stat-info';
import { Types } from './page/types/types';

export const routes: Routes = [
    {path : "", redirectTo: 'home', pathMatch: 'full'},
    {path : 'home', loadComponent : () => Home},
    {path : 'about', loadComponent : () => About},
    {path : 'stat', loadComponent : () => StatInfo},
    {path : 'types', loadComponent : () => Types}
];
