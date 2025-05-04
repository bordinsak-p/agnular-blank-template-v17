import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BreadcrumbModule,
    AvatarModule,
    ButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  firstname = 'บดินทร์ศักดิ์';
  lastname = 'ประสพบุญ';
  position = 'ผู้พัฒนาระบบ';
  isSidebarVisible = true;

  ngOnInit() {
    this.items = [
      { label: 'Electronics' },
      { label: 'Computer' },
      { label: 'Accessories' },
      { label: 'Keyboard' },
      { label: 'Wireless' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  toggleSidebar() {
    console.log('Toggle sidebar clicked', this.isSidebarVisible);
    
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
