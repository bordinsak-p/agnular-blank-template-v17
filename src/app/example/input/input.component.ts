import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [InputTextModule, ButtonModule, ToastModule, ReactiveFormsModule],
  providers: [MessageService],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  form!: FormGroup;

  constructor(
    private readonly messageService: MessageService,
    private readonly fb: FormBuilder
  ) {
    this.form = this.fb.group({
      normal: [null],
      validate: [null, [Validators.required]],
      disabled: [null],
      password: [null],
      textarea: [null],
      email: [null],
      search: [null],
      inputGroup: [null],
    });
  }

  show(msg: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'คัดลอก',
      detail: msg,
    });
  }

  copyText(text: string): void {
    const inpEl = (t: string) => {
      switch (t) {
        case 'Normal':
          return '<input type="text" pInputText />';
        default:
          return '';
      }
    };

    navigator.clipboard
      .writeText(inpEl(text))
      .then(() => {
        this.show('คัดลอกข้อความเรียบร้อยแล้ว');
      })
      .catch((err) => {
        console.error('ไม่สามารถคัดลอกข้อความได้: ', err);
      });
  }

  onTouch() {
    this.form.markAllAsTouched();
  }

  onClear() {
    this.form.reset();
  }
}
