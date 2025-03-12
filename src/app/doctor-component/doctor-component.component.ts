import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-component',
  imports: [],
  templateUrl: './doctor-component.component.html',
  styleUrl: './doctor-component.component.css'
})
export class DoctorComponentComponent {
  singleDoctor:any;
  constructor(private route:ActivatedRoute) {
    this.route.queryParamMap.subscribe((params: any) => {
      let id = +params.get('id');
      console.log(id);
    
      if (id) {
        this.singleDoctor = this.doctors.find((item: any) => item.id === id);
      }
    });
    
  }

  setDescription(value:any){
    return value.replace(/\n/g, '<br>')
  }
  doctors: any = [
    {
      id: 1,
      name: "Dr. John Smith",
      position: "Senior Cardiologist & Heart Disease Specialist",
      specialty: "Cardiology",
      degree: "MD, FACC",
      about: `Dear Patient,\n\nYou are in safe hands with Dr. John Smith, a Senior Cardiologist who has over 20 years of experience diagnosing and treating heart diseases. Dr. Smith takes pride in providing top-quality heart care using the latest technologies. Whether you are facing coronary artery disease, heart attacks, heart failure, arrhythmias, or valvular heart disease, rest assured that your health is the top priority.\n\nDr. Smith believes in preventive heart care and works closely with you to develop personalized treatment plans, not only to treat existing conditions but also to improve your overall cardiovascular health.\n\nExpect compassionate care with the goal of improving your quality of life and achieving a healthier heart.\n\nSincerely,\nDr. John Smith`
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      position: "Chief Neurologist & Brain Disorder Consultant",
      specialty: "Neurology",
      degree: "MD, PhD, FAAN",
      about: `Dear Patient,\n\nWith Dr. Sarah Johnson, you will receive expert care for a wide range of neurological conditions. As a specialist in brain disorders, Dr. Johnson has helped numerous patients with conditions such as stroke, epilepsy, neurodegenerative diseases, and brain tumors. Using the latest research and technologies, Dr. Johnson will ensure you receive the best possible treatment options.\n\nDr. Johnson is dedicated to providing a comprehensive approach to care, combining medical treatment with the emotional support you need. Your well-being is always the top priority.\n\nTogether, we will work on managing your condition and improving your quality of life.\n\nWarm regards,\nDr. Sarah Johnson`
    },
    {
      id: 3,
      name: "Dr. Michael Lee",
      position: "Orthopedic Surgeon & Sports Injury Specialist",
      specialty: "Orthopedics",
      degree: "MD, FAAOS",
      about: `Dear Patient,\n\nWith Dr. Michael Lee, you will have access to an experienced orthopedic surgeon who specializes in sports injuries. Dr. Lee’s practice revolves around diagnosing and treating musculoskeletal injuries, from fractures to torn ligaments, to help you return to an active lifestyle.\n\nDr. Lee works closely with you to develop a personalized treatment plan, whether it’s surgical intervention or rehabilitation, to help you recover and get back to the activities you love.\n\nYou will receive the highest quality care to ensure you regain mobility and strength as quickly and safely as possible.\n\nSincerely,\nDr. Michael Lee`
    },
    {
      id: 4,
      name: "Dr. Emily Brown",
      position: "Pediatrician & Child Development Consultant",
      specialty: "Pediatrics",
      degree: "MD, FAAP",
      about: `Dear Parent,\n\nWith Dr. Emily Brown, your child will receive top-tier care for every stage of their development. Dr. Brown is committed to ensuring that your child receives the best preventive care, vaccinations, and guidance on nutrition and behavior.\n\nDr. Brown believes in building a trusting relationship with both you and your child, ensuring that every visit is both educational and nurturing. Whether your child needs a routine check-up or help managing a chronic condition, Dr. Brown is here for you every step of the way.\n\nDr. Brown’s goal is to ensure that your child grows up healthy and happy, and she is always ready to offer her expertise to support your child’s development.\n\nYours sincerely,\nDr. Emily Brown`
    },
    {
      id: 5,
      name: "Dr. David Wilson",
      position: "Dermatologist & Aesthetic Skin Care Specialist",
      specialty: "Dermatology",
      degree: "MD, FAAD",
      about: `Dear Patient,\n\nYou can count on Dr. David Wilson for expert care in both medical and cosmetic dermatology. Dr. Wilson’s practice focuses on treating skin conditions such as acne, eczema, and psoriasis while also offering advanced aesthetic procedures to improve your skin’s appearance.\n\nDr. Wilson believes in personalized care to help you achieve the skin health and beauty you deserve. Whether through treatment or cosmetic enhancements, you will receive the best care to boost your confidence and improve your skin.\n\nExpect compassionate care that will not only treat skin conditions but also help you achieve your aesthetic goals.\n\nWarm regards,\nDr. David Wilson`
    },
    {
      id: 6,
      name: "Dr. Olivia Martinez",
      position: "Oncologist & Cancer Treatment Expert",
      specialty: "Oncology",
      degree: "MD, FACP",
      about: `Dear Patient,\n\nWith Dr. Olivia Martinez, you are receiving expert care in the diagnosis and treatment of cancer. Dr. Martinez works closely with you to create a personalized care plan that is comprehensive and integrates the latest in medical technology.\n\nWhether you are at the beginning stages of treatment or in remission, Dr. Martinez is here to provide not only medical treatment but also emotional support to ensure that you remain strong throughout your journey.\n\nDr. Martinez is committed to delivering the highest standard of care to help you fight cancer and improve your quality of life.\n\nSincerely,\nDr. Olivia Martinez`
    },
    {
      id: 7,
      name: "Dr. James Anderson",
      position: "Endocrinologist & Diabetes Management Specialist",
      specialty: "Endocrinology",
      degree: "MD, FACE",
      about: `Dear Patient,\n\nDr. James Anderson is dedicated to helping you manage your diabetes and other hormonal disorders. With extensive experience in both Type 1 and Type 2 diabetes, Dr. Anderson provides customized care plans to ensure that you are well-equipped to manage your condition.\n\nBy educating you about diabetes and empowering you to make informed decisions, Dr. Anderson will support you in maintaining healthy blood sugar levels and reducing the risk of complications.\n\nDr. Anderson’s goal is to provide you with the tools and support necessary for managing your condition and improving your overall health.\n\nSincerely,\nDr. James Anderson`
    },
    {
      id: 8,
      name: "Dr. Sophia Thomas",
      position: "General Surgeon & Laparoscopic Surgery Expert",
      specialty: "Surgery",
      degree: "MD, FACS",
      about: `Dear Patient,\n\nDr. Sophia Thomas specializes in general surgery with a focus on laparoscopic procedures. If you require surgery for any condition affecting your digestive tract, gallbladder, or endocrine system, Dr. Thomas is here to guide you through the process using minimally invasive techniques that allow for quicker recovery and less discomfort.\n\nDr. Thomas works closely with you to ensure you feel informed and confident in your treatment options. Expect personalized care and a detailed plan for your surgery and recovery.\n\nYou will receive the highest quality care to ensure your health is restored as quickly and safely as possible.\n\nWarm regards,\nDr. Sophia Thomas`
    },
    {
      id: 9,
      name: "Dr. William Harris",
      position: "Urologist & Kidney Health Specialist",
      specialty: "Urology",
      degree: "MD, FACS",
      about: `Dear Patient,\n\nWith Dr. William Harris, you will receive expert care for conditions affecting your urinary system and male reproductive health. Whether you need treatment for kidney stones, urinary tract infections, or prostate issues, Dr. Harris is dedicated to providing the best care to manage your condition and improve your quality of life.\n\nDr. Harris understands the importance of personalized care and will work with you to develop a treatment plan that suits your specific needs.\n\nExpect compassionate care that focuses on your health and well-being.\n\nSincerely,\nDr. William Harris`
    },
    {
      id: 10,
      name: "Dr. Benjamin White",
      position: "Psychiatrist & Mental Health Consultant",
      specialty: "Psychiatry",
      degree: "MD, DFAPA",
      about: `Dear Patient,\n\nDr. Benjamin White is here to support your mental health journey. Whether you are struggling with depression, anxiety, PTSD, or any other mental health concern, Dr. White provides compassionate care and treatment that helps you regain control of your life.\n\nDr. White takes a holistic approach to mental health, combining therapy and medication management to ensure that you receive the care that is right for you.\n\nTogether, we will work on achieving mental well-being and improving your overall quality of life.\n\nWarm regards,\nDr. Benjamin White`
    },
    {
      id: 11,
      name: "Dr. Ava Robinson",
      position: "Gynecologist & Women's Reproductive Health Specialist",
      specialty: "Gynecology",
      degree: "MD, FACOG",
      about: `Dear Patient,\n\nWith Dr. Ava Robinson, you will receive expert care for all of your reproductive health needs. From routine gynecological exams and preventive care to family planning and menopause management, Dr. Robinson is here to provide comprehensive care that addresses your specific needs.\n\nDr. Robinson believes in creating a safe, trusting environment where you can feel comfortable discussing any concerns. Whether you're planning a family or managing a gynecological condition, Dr. Robinson is here to provide guidance and care every step of the way.\n\nYou will receive the highest standard of care, tailored to your health and well-being.\n\nWarm regards,\nDr. Ava Robinson`
    },
    {
      id: 12,
      name: "Dr. Daniel Hall",
      position: "Pulmonologist & Respiratory Disease Specialist",
      specialty: "Pulmonology",
      degree: "MD, FCCP",
      about: `Dear Patient,\n\nDr. Daniel Hall specializes in diagnosing and treating diseases of the respiratory system. Whether you are suffering from asthma, chronic obstructive pulmonary disease (COPD), or a severe respiratory infection, Dr. Hall will work with you to provide effective treatment and improve your lung health.\n\nDr. Hall emphasizes personalized care and believes in educating you about your condition, empowering you to make informed decisions about your health.\n\nYou can expect expert care and ongoing support to ensure your respiratory health is managed effectively.\n\nSincerely,\nDr. Daniel Hall`
    },
    {
      id: 13,
      name: "Dr. Mia Clark",
      position: "Hematologist & Blood Disorder Expert",
      specialty: "Hematology",
      degree: "MD, FACP",
      about: `Dear Patient,\n\nDr. Mia Clark specializes in the diagnosis and treatment of blood disorders, including anemia, leukemia, lymphoma, and other hematologic conditions. You can trust Dr. Clark’s expertise to develop a comprehensive treatment plan tailored to your needs.\n\nDr. Clark is dedicated to working closely with you and providing compassionate care throughout your treatment journey, whether through chemotherapy, blood transfusions, or other therapies.\n\nYou can rest assured that your health is in the hands of a skilled professional who is committed to improving your blood health.\n\nSincerely,\nDr. Mia Clark`
    },
    {
      id: 14,
      name: "Dr. Ethan Lewis",
      position: "Rheumatologist & Autoimmune Disease Specialist",
      specialty: "Rheumatology",
      degree: "MD, FACR",
      about: `Dear Patient,\n\nDr. Ethan Lewis specializes in diagnosing and treating autoimmune diseases and conditions such as rheumatoid arthritis, lupus, and other inflammatory disorders. Dr. Lewis works closely with you to create personalized treatment plans aimed at reducing inflammation and improving your overall quality of life.\n\nBy utilizing the latest treatments and therapies, Dr. Lewis strives to improve your mobility and prevent disease progression.\n\nExpect personalized, compassionate care as Dr. Lewis helps you manage your condition and live your best life.\n\nSincerely,\nDr. Ethan Lewis`
    },
    {
      id: 15,
      name: "Dr. Charlotte Young",
      position: "Ophthalmologist & Vision Correction Surgeon",
      specialty: "Ophthalmology",
      degree: "MD, FACS",
      about: `Dear Patient,\n\nDr. Charlotte Young is here to ensure the health of your eyes and vision. Whether you need eye surgery, treatment for cataracts, glaucoma, or other vision-related conditions, Dr. Young’s expertise will guide you through the process.\n\nDr. Young’s personalized approach focuses on providing the best options for vision correction, whether through surgery, glasses, or lifestyle changes.\n\nYou can expect expert care that helps preserve and improve your eye health.\n\nSincerely,\nDr. Charlotte Young`
    }
  ];
  
}
