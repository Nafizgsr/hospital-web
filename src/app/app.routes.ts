import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'home',loadComponent:()=>import('./home-component/home-component.component').then(m=>m.HomeComponentComponent)},
    {path:'about',loadComponent:()=>import('./about-component/about-component.component').then(m=>m.AboutComponentComponent)},
    {path:'services',loadComponent:()=>import('./services-component/services-component.component').then(m=>m.ServicesComponentComponent)},
    {path:'contact',loadComponent:()=>import('./contact-component/contact-component.component').then(m=>m.ContactComponentComponent)},
    {path:'departments',loadComponent:()=>import('./department-list-component/department-list-component.component').then(m=>m.DepartmentListComponentComponent)},
    {path:'department',loadComponent:()=>import('./department-component/department-component.component').then(m=>m.DepartmentComponentComponent),data: { renderMode: 'prerender' }},
    {path:'doctor',loadComponent:()=>import('./doctor-component/doctor-component.component').then(m=>m.DoctorComponentComponent)},
    {path:'doctors',loadComponent:()=>import('./find-doctor-component/find-doctor-component.component').then(m=>m.FindDoctorComponentComponent)},
    {path:'',redirectTo:'home',pathMatch:'full'}
];
