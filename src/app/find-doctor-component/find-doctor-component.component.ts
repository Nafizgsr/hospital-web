import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-doctor-component',
  imports: [NgFor],
  templateUrl: './find-doctor-component.component.html',
  styleUrl: './find-doctor-component.component.css'
})
export class FindDoctorComponentComponent {
  filterByDepartments:any = [];
  filteredDoctors:any =[];
  constructor(private router:Router){
    this.filterByDepartments = this.doctors;
    this.filteredDoctors = this.filterByDepartments;
  }

  filterByDepertment(value:any){
    if(value.toString() == '-1'){
      this.filterByDepartments = this.doctors;
    }else{
      this.filterByDepartments = this.doctors.filter((item:any)=> item.positionID.toString() === value.toString());
    }
    this.filteredDoctors = this.filterByDepartments;
  };
  filterByDoctor(value:any){
    this.filteredDoctors = this.filterByDepartments.filter((item:any)=> item.name.toLowerCase().includes(value.toLowerCase()));
  }

  doctors: any = [
    {id: 1, name: "Dr. John Smith", positionID: 1, position: "Senior Cardiologist & Heart Disease Specialist" },
    {id: 2, name: "Dr. Sarah Johnson", positionID: 2, position: "Chief Neurologist & Brain Disorder Consultant" },
    {id: 3, name: "Dr. Michael Lee", positionID: 3, position: "Orthopedic Surgeon & Sports Injury Specialist" },
    {id: 4, name: "Dr. Emily Brown", positionID: 4, position: "Pediatrician & Child Development Consultant" },
    {id: 5, name: "Dr. David Wilson", positionID: 5, position: "Dermatologist & Aesthetic Skin Care Specialist" },
    {id: 6, name: "Dr. Olivia Martinez", positionID: 6, position: "Oncologist & Cancer Treatment Expert" },
    {id: 7, name: "Dr. James Anderson", positionID: 7, position: "Endocrinologist & Diabetes Management Specialist" },
    {id: 8, name: "Dr. Sophia Thomas", positionID: 8, position: "General Surgeon & Laparoscopic Surgery Expert" },
    {id: 9, name: "Dr. William Harris", positionID: 9, position: "Urologist & Kidney Health Specialist" },
    {id: 10, name: "Dr. Benjamin White", positionID: 10, position: "Psychiatrist & Mental Health Consultant" },
    {id: 11, name: "Dr. Ava Robinson", positionID: 11, position: "Gynecologist & Women's Reproductive Health Specialist" },
    {id: 12, name: "Dr. Daniel Hall", positionID: 12, position: "Pulmonologist & Respiratory Disease Specialist" },
    {id: 13, name: "Dr. Mia Clark", positionID: 13, position: "Hematologist & Blood Disorder Expert" },
    {id: 14, name: "Dr. Ethan Lewis", positionID: 14, position: "Rheumatologist & Autoimmune Disease Specialist" },
    {id: 15, name: "Dr. Charlotte Young", positionID: 15, position: "Ophthalmologist & Vision Correction Surgeon" }
];

  positionList:any = [
    { id: 1, name: "Senior Cardiologist & Heart Disease Specialist" },
    { id: 2, name: "Chief Neurologist & Brain Disorder Consultant" },
    { id: 3, name: "Orthopedic Surgeon & Sports Injury Specialist" },
    { id: 4, name: "Pediatrician & Child Development Consultant" },
    { id: 5, name: "Dermatologist & Aesthetic Skin Care Specialist" },
    { id: 6, name: "Oncologist & Cancer Treatment Expert" },
    { id: 7, name: "Endocrinologist & Diabetes Management Specialist" },
    { id: 8, name: "General Surgeon & Laparoscopic Surgery Expert" },
    { id: 9, name: "Urologist & Kidney Health Specialist" },
    { id: 10, name: "Psychiatrist & Mental Health Consultant" },
    { id: 11, name: "Gynecologist & Women's Reproductive Health Specialist" },
    { id: 12, name: "Pulmonologist & Respiratory Disease Specialist" },
    { id: 13, name: "Hematologist & Blood Disorder Expert" },
    { id: 14, name: "Rheumatologist & Autoimmune Disease Specialist" },
    { id: 15, name: "Ophthalmologist & Vision Correction Surgeon" }
];
  openDoctorDetails(doctorID:any){
    this.router.navigate([`/doctor`],{queryParams:{id:doctorID}});
  }
}
