import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Northwind';
  user: string = 'Alper Çelik';
  serachEngines=[
    {link:"https://www.google.com",Name:"Google"},
    {link:"https://www.yandex.com",Name:"Yandex"},
    {link:"https://www.bing.com",Name:"Bing"}
  ]
}
