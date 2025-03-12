import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-component',
  imports: [NgFor,NgClass],
  templateUrl: './department-component.component.html',
  styleUrl: './department-component.component.css'
})
export class DepartmentComponentComponent {
  constructor(private route:ActivatedRoute,private router:Router) {
    this.route.queryParamMap.subscribe((params: any) => {
      let name = params.get('name');
      if(name){
        this.department = this.departments.find((d: any) => d.name == name);
          this.filteredDoctors = this.department 
          ? this.department.doctors
          .map((doctorId: any) => this.doctors.find((doc: any) => doc.id === doctorId))
          .filter(Boolean) // Removes undefined values
          : [];
      }
    });
    // this.route.queryParams.subscribe((params: any) => {
    //   const id = +params['id'];
    //   if (id) {
    //     this.department = this.departments.find((d: any) => d.id == id);
    //       this.filteredDoctors = this.department 
    //       ? this.department.doctors
    //       .map((doctorId: any) => this.doctors.find((doc: any) => doc.id === doctorId))
    //       .filter(Boolean) // Removes undefined values
    //       : [];
    //       console.log(this.filteredDoctors);
    //   }
    // });
    
  }
  filteredDoctors:any =[];
  department:any 
  departments:any = [
    {id:1,doctors:[1,2,4,8,3,12],icon:'fa-tablets',name:'General Medicine',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:2,doctors:[11,2,143,11,10],icon:'fa-house-medical',name:'Internal Medicine',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:3,doctors:[1,12,15,12,15],icon:'fa-stomach',name:'Gastroenterology',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:4,doctors:[10,3,7,5,9],icon:'fa-baby',name:'Obstetrics & Gynecology',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:5,doctors:[6,8,9,10,11],icon:'fa-brain',name:'Neurology',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:6,doctors:[11,12,14,15],icon:'fa-user-injured',name:'Neurosurgery',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:7,doctors:[10,3,4,5,8],icon:'fa-atom',name:'Neonatal & Pediatric Surgery',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:8,doctors:[3,2,4,6],icon:'fa-campground',name:'Nephrology & Hemodialysis',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:9,doctors:[14,2,12,15],icon:'fa-cheese',name:'Urology',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:10,doctors:[10,2,4,11],icon:'fa-star-of-life',name:'Dermatology',details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
  ]
  
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

  setDescription(value:any){
    return value.replace(/\n/g, '<br>')
  }

  openDoctorDetails(doctorID:any){
    this.router.navigate([`/doctor`],{queryParams:{id:doctorID}});
  }

}
