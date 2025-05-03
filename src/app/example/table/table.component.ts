import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,TableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  products = [
    { id: 1, name: 'Product 1', price: 100, quantity: 10 },
    { id: 2, name: 'Product 2', price: 200, quantity: 20 },
    { id: 3, name: 'Product 3', price: 300, quantity: 30 },
    { id: 4, name: 'Product 4', price: 400, quantity: 40 },
    { id: 5, name: 'Product 5', price: 500, quantity: 50 },
    { id: 6, name: 'Product 6', price: 600, quantity: 60 },
    { id: 7, name: 'Product 7', price: 700, quantity: 70 },
    { id: 8, name: 'Product 8', price: 800, quantity: 80 },
    { id: 9, name: 'Product 9', price: 900, quantity: 90 },
    { id: 10, name: 'Product 10', price: 1000, quantity: 100 },
  ];

  selectedProducts: any[] = [];

  loading: boolean = false;
}
