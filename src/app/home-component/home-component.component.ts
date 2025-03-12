
import { CommonModule } from '@angular/common';
import { Component,ChangeDetectionStrategy, signal } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Carousel } from 'primeng/carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [CommonModule,SlickCarouselModule,Carousel,FontAwesomeModule,RouterLink],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponentComponent{
  readonly panelOpenState = signal(false);
  constructor(private router:Router){}
  myImages:any = [
    {src:'images/hospital1.jpg'},
    {src:'images/hospital2.jpg'},
    {src:'images/hospital3.jpg'}
  ];

  myConfig: any = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    infinite: true, 
    speed: 500,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    cssEase: 'linear'
  };

  responsiveOptions:any = [
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
];

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

openDoctorDetails(doctorID:any){
  this.router.navigate([`/doctor`],{queryParams:{id:doctorID}});
}

doctors:any = [
  {id:1, name: "Dr. John Smith", position: "Senior Cardiologist & Heart Disease Specialist" },
  {id:2, name: "Dr. Sarah Johnson", position: "Chief Neurologist & Brain Disorder Consultant" },
  {id:3, name: "Dr. Michael Lee", position: "Orthopedic Surgeon & Sports Injury Specialist" },
  {id:4, name: "Dr. Emily Brown", position: "Pediatrician & Child Development Consultant" },
  {id:5, name: "Dr. David Wilson", position: "Dermatologist & Aesthetic Skin Care Specialist" },
  {id:6, name: "Dr. Olivia Martinez", position: "Oncologist & Cancer Treatment Expert" },
  {id:7, name: "Dr. James Anderson", position: "Endocrinologist & Diabetes Management Specialist" },
  {id:8, name: "Dr. Sophia Thomas", position: "General Surgeon & Laparoscopic Surgery Expert" },
  {id:9, name: "Dr. William Harris", position: "Urologist & Kidney Health Specialist" },
  {id:10, name: "Dr. Benjamin White", position: "Psychiatrist & Mental Health Consultant" },
  {id:11, name: "Dr. Ava Robinson", position: "Gynecologist & Women's Reproductive Health Specialist" },
  {id:12, name: "Dr. Daniel Hall", position: "Pulmonologist & Respiratory Disease Specialist" },
  {id:13, name: "Dr. Mia Clark", position: "Hematologist & Blood Disorder Expert" },
  {id:14, name: "Dr. Ethan Lewis", position: "Rheumatologist & Autoimmune Disease Specialist" },
  {id:15, name: "Dr. Charlotte Young", position: "Ophthalmologist & Vision Correction Surgeon" }
];

services:any = [
  {icon:'fa-brain', name:'Specialized Services'},
  {icon:'fa-ribbon', name:'Immunization (Vaccination)'},
  {icon:'fa-capsules', name:'Nursing. Paramedical Services'},
  {icon:'fa-heart-pulse', name:'Health and allied Services'},
  {icon:'fa-suitcase-medical', name:'Utilities & Allied Services'},
  {icon:'fa-ribbon', name:'Hospital Facility'}
]
  
  
}
