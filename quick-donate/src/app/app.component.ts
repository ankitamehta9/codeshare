import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Quick Donate';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    const url = environment.test;
    // this.http.get(url).subscribe(data => console.log(data));
    const overlayEl = document.getElementById('overlay');
    overlayEl.addEventListener('click', () => overlayEl.style.display = 'none');

  }

}
