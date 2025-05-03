import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { TabViewModule } from 'primeng/tabview';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [TabViewModule, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss',
})
export class ExampleComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home' },
      { label: 'Transactions', icon: 'pi pi-chart-line' },
      { label: 'Products', icon: 'pi pi-list' },
      { label: 'Messages', icon: 'pi pi-inbox' },
    ];
  }
}
