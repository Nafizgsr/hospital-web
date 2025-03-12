import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services-component',
  imports: [NgFor,NgIf],
  templateUrl: './services-component.component.html',
  styleUrl: './services-component.component.css'
})
export class ServicesComponentComponent {
  HealthandAlliedServices:any = [
    {service:'Family Welfare'},
    {service:'Contraception'},
    {service:'Sterilization'},
    {service:'nutrition'},
    {service:'Immunization (Vaccination)'}
  ];

  AlliedServices:any = [
    {service:'Radiology & Imaging',sub:[
      {service:'Ultrasound'},
      {service:'ECG'},
      {service:'Medical Store'},
      {service:'Chemist Shop'},
    ]},
    {service:'Model Pharmacy'},
    {service:'Central Sterilized Service Department'},
    {service:'Mortuary'},
    {service:'24 hours Blood Bank'},
    {service:'24 hours Laboratory Support'},
    {service:'Dialysis (15 Bedded Negative & 3 Bedded Positive)'},
    {service:'Anesthesiology'},
    {service:'Physiotherapy (10 Bedded)'},
    {service:'Chemotherapy (20 Bedded)'},
    {service:'RESPI REHAB (Respiratory Rehabilitation Center)'},
  ];

  UtilitiesServices:any = [
    {service:'Electricity'},
    {service:'Fire protection'},
    {service:'LPG Supply'},
    {service:'Ambulance'},
    {service:'Medical gases supply'},
    {service:'Air Conditioning'},
    {service:'Refrigeration'},
    {service:'Sewage disposal'},
    {service:'Laundry'},
    {service:'Catering'},
    {service:'Communication‐ PABX , intercom'},
    {service:'nurse call system'},
    {service:'Water treatment'}
  ]
}
