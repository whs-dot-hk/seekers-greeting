import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  greeting: string;

  ngOnInit() {
    this.greeting = twemoji.parse('👋<h1>Greetings Seekers Capital!</h1>');
  }
}
