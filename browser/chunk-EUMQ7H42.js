import{d as w}from"./chunk-T3LLKC5L.js";import{h as x,i as v}from"./chunk-3ZW3IFQA.js";import{Da as l,Ha as y,Na as s,Ra as t,Sa as n,Ta as u,W as d,X as p,Xa as g,Ya as f,Za as h,fb as i,gb as b,hb as k,ua as r,za as c}from"./chunk-SNIXX6TU.js";function _(o,a){if(o&1){let e=g();t(0,"div",15)(1,"h5",16),u(2,"i",17),i(3),n(),t(4,"div",18)(5,"div",2)(6,"div",3)(7,"p",19),i(8),n()()(),t(9,"div",2)(10,"div",20)(11,"button",21),f("click",function(){let L=d(e).$implicit,I=h();return p(I.openDepartmentDetails(L.name))}),i(12,"More Info"),n()()()()()}if(o&2){let e=a.$implicit;r(2),s("ngClass",e.icon),r(),k(" ",e.name,""),r(5),b(e.details)}}var C=class o{constructor(a){this.router=a}departments=[{id:1,icon:"fa-tablets",name:"General Medicine",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{id:2,icon:"fa-house-medical",name:"Internal Medicine",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{id:3,icon:"fa-stomach",name:"Gastroenterology",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{id:4,icon:"fa-baby",name:"Obstetrics & Gynecology",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{id:5,icon:"fa-brain",name:"Neurology",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{id:6,icon:"fa-user-injured",name:"Neurosurgery",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{id:7,icon:"fa-atom",name:"Neonatal & Pediatric Surgery",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{id:8,icon:"fa-campground",name:"Nephrology & Hemodialysis",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{id:9,icon:"fa-cheese",name:"Urology",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{id:10,icon:"fa-star-of-life",name:"Dermatology",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}];openDepartmentDetails(a){this.router.navigate(["/department"],{queryParams:{name:a}})}static \u0275fac=function(e){return new(e||o)(c(w))};static \u0275cmp=l({type:o,selectors:[["app-department-list-component"]],decls:20,vars:1,consts:[[1,"intro-section"],[1,"container-xl","route-container"],[1,"row"],[1,"col"],[1,"h4"],[1,"col","route-row"],[1,"h5","me-2"],["routerLink","home"],[1,"h5"],[1,"h5","ms-2"],["routerLink","departments"],[1,"department-section"],[1,"container-xl"],[1,"department-card-container"],["class","card department-card",4,"ngFor","ngForOf"],[1,"card","department-card"],[1,"card-header"],[1,"fa-solid",3,"ngClass"],[1,"card-body"],[1,"card-text"],[1,"col",2,"display","flex","justify-content","center"],[1,"btn","btn-primary",3,"click"]],template:function(e,m){e&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),i(5,"DEPARTMENTS"),n()()(),t(6,"div",2)(7,"div",5)(8,"p",6)(9,"a",7),i(10,"HOME"),n()(),t(11,"p",8),i(12," > "),n(),t(13,"p",9)(14,"a",10),i(15,"DEPARTMENTS"),n()()()()()(),t(16,"div",11)(17,"div",12)(18,"div",13),y(19,_,13,3,"div",14),n()()()),e&2&&(r(19),s("ngForOf",m.departments))},dependencies:[v,x],styles:['.intro-section[_ngcontent-%COMP%]{height:200px;background-image:url(/images/person.jpg);background-repeat:no-repeat;background-position:center;background-size:cover;background-attachment:fixed;display:flex;align-items:center}.intro-section[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;height:200px;background-color:#2863a35d}a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.route-container[_ngcontent-%COMP%]{color:#fff;z-index:1}.route-row[_ngcontent-%COMP%]{display:flex}.department-card-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr)!important;gap:10px;padding:10px}.department-card[_ngcontent-%COMP%]{background-color:#2863a3;color:#fff}.d-header[_ngcontent-%COMP%]{display:flex;align-items:center}.d-body[_ngcontent-%COMP%]{display:flex;justify-content:center}']})};export{C as DepartmentListComponentComponent};
