import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'client';
  weatherForecasts: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('http://localhost:5092/weatherforecast').subscribe({
      next: (response) => this.weatherForecasts = response,
      error: (e) => console.error(e),
      complete: () => console.log("complete")
    })
  }
}