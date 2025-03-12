import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-component',
  imports: [NgFor,RouterLink],
  templateUrl: './about-component.component.html',
  styleUrl: './about-component.component.css'
})
export class AboutComponentComponent {

  boardOfDirectors: any = [
    { name: "Dr. Robert Williams", position: "Chairman & Chief Medical Officer" },
    { name: "Ms. Emily Johnson", position: "Vice Chairperson & Chief Financial Officer" },
    { name: "Dr. Michael Brown", position: "Director of Medical Services" },
    { name: "Mr. Christopher Davis", position: "Managing Director & Hospital Administrator" },
    { name: "Dr. Olivia Martinez", position: "Director of Research & Medical Innovation" },
    { name: "Mr. Benjamin Thompson", position: "Director of Operations & Patient Services" },
    { name: "Ms. Sophia Lewis", position: "Head of Human Resources & Talent Management" },
    { name: "Dr. William Anderson", position: "Chief of Surgery & Surgical Operations Head" },
    { name: "Dr. Elizabeth Carter", position: "Director of Nursing & Patient Care" },
    { name: "Mr. Daniel White", position: "Legal Advisor & Compliance Director" },
    { name: "Dr. Ava Robinson", position: "Director of Public Health & Community Outreach" },
    { name: "Mr. Nathan Scott", position: "Director of Finance & Risk Management" },
    { name: "Ms. Charlotte Evans", position: "Technology & Digital Health Transformation Lead" },
    { name: "Dr. Ethan Hall", position: "Director of Pharmacy & Medical Supply Chain" },
    { name: "Ms. Isabella Turner", position: "Head of Marketing & Public Relations" }
];



}
