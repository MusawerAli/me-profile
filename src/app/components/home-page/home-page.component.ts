import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('EnterLeave2', [
      state('flyUp', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
    ]),

  ]

})
export class HomePageComponent implements OnInit {
  contactMe: boolean = true;
  constructor() { }
  ngOnInit() {
    const target1 = document.querySelector('.tw1')
    const writer1 = new Typewriter(target1, {
      loop: true,
      typeColor: ' #17ca94',

      cursorColor: 'rgba(253, 216, 8, 0)'
    })

    writer1
      .strings(
        800,
        "let result = passion === infinity ? 'Beautiful ' : 'Boring ' ;",
        "alert(`Life is ${result}`);"
      )
      .start()
    const target = document.querySelector('.tw')
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: ' #17ca94',
      cursorColor: 'rgba(253, 216, 8, 0)'
    })

    writer
      .strings(
        800,
        "Entrepreneur",
        "Full-Stack Developer",
        "Freelancer"
      )
      .start()
  }
  contactM() {
    this.contactMe = false;
  }

}
