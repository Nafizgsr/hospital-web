import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list-component',
  imports: [NgFor,NgClass],
  templateUrl: './department-list-component.component.html',
  styleUrl: './department-list-component.component.css'
})
export class DepartmentListComponentComponent {
  constructor(private router:Router) {
    
  }
  departments:any = [
    {id:1,icon:'fa-tablets',name:'General Medicine',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:2,icon:'fa-house-medical',name:'Internal Medicine',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:3,icon:'fa-stomach',name:'Gastroenterology',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:4,icon:'fa-baby',name:'Obstetrics & Gynecology',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:5,icon:'fa-brain',name:'Neurology',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:6,icon:'fa-user-injured',name:'Neurosurgery',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:7,icon:'fa-atom',name:'Neonatal & Pediatric Surgery',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:8,icon:'fa-campground',name:'Nephrology & Hemodialysis',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:9,icon:'fa-cheese',name:'Urology',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:10,icon:'fa-star-of-life',name:'Dermatology',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
  ]

  openDepartmentDetails(departmentName:any){
    this.router.navigate([`/department`],{queryParams:{name:departmentName}});
  }
}
