import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BreadcrumbModule,
    AvatarModule,
    ButtonModule,
  ],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss',
})
export class MainContainerComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  baseRoute = '/program';

  menuList: MenuItem[] = [
    { label: 'หน้าแรก', icon: 'pi pi-home', routerLink: '/home' },
    { label: 'ข้อมูลพนักงาน', icon: 'pi pi-users', routerLink: '/employee' },
    { label: 'ข้อมูลแผนก', icon: 'pi pi-briefcase', routerLink: '/department' },
    { label: 'ข้อมูลการลา', icon: 'pi pi-calendar', routerLink: '/leave' },
    {
      label: 'รายงานข้อมูลการลา',
      icon: 'pi pi-chart-line',
      routerLink: '/report',
    },
  ];

  firstname = 'บดินทร์ศักดิ์';
  lastname = 'ประสพบุญ';
  position = 'ผู้พัฒนาระบบ';
  isSidebarVisible = true;

  ngOnInit() {
    this.items = [
      { label: 'หน้าแรก', routerLink: '/home' },
      { label: 'ข้อมูลพนักงาน', routerLink: '/employee' },
      { label: 'ข้อมูลแผนก', routerLink: '/department' },
      { label: 'ข้อมูลการลา', routerLink: '/leave' },
      { label: 'รายงานข้อมูลการลา', routerLink: '/report' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/home' };
  }

  toggleSidebar() {
    console.log('Toggle sidebar clicked', this.isSidebarVisible);

    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
