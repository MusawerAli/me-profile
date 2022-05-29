import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('.7s', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('.7s', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('.7s', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('.7s', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  toAbout(){
    document.getElementById("homepage").scrollIntoView({behavior: "smooth"});
  }
  toEducation(){
    document.getElementById("education").scrollIntoView({behavior: "smooth"});
  }
  toTest(){
    document.getElementById("skills").scrollIntoView({behavior: "smooth"});
  }
  
  toExperience(){
    document.getElementById("experience").scrollIntoView({behavior: "smooth"});
  }
  toProjects(){
    document.getElementById("projects").scrollIntoView({behavior: "smooth"});
  }
 

}
