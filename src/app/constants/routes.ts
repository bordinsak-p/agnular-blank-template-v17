export const program = [
  {
    path: 'example',
    loadComponent: () =>
      import('../example/example.component').then((m) => m.ExampleComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('../program/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: 'employee',
    loadComponent: () =>
      import('../program/employee/employee.component').then(
        (m) => m.EmployeeComponent
      ),
  },
  {
    path: 'department',
    loadComponent: () =>
      import('../program/department/department.component').then(
        (m) => m.DepartmentComponent
      ),
  },
  {
    path: 'leave',
    loadComponent: () =>
      import('../program/leave/leave.component').then((m) => m.LeaveComponent),
  },
  {
    path: 'report',
    loadComponent: () =>
      import('../program/report/report.component').then(
        (m) => m.ReportComponent
      ),
  },
];
