import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrls: ['./api-page.component.css'],
  imports: [CommonModule] 
})
export class ApiDataComponent implements OnInit {
  quote: { q: string; a: string } | null = null;
  loading = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getRandomQuote().subscribe({
      next: (response) => {
        this.quote = { q: response.content, a: response.author };
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching quote:', err);
        this.loading = false;
      }
    });
  }
  
}
