import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    debugger
    event.preventDefault();

  }
  ngOnInit() {
     document.onkeydown = function (e) {
      return false;
    }
    console.log("%c🤞🏻", "color:black;font-size:30px");
  }
}
