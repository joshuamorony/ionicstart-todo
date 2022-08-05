import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Todo } from '../../shared/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  template: `
    <form [formGroup]="todoForm" (ngSubmit)="handleSubmit()">
      <ion-input
        type="text"
        formControlName="title"
        placeholder="title..."
      ></ion-input>
      <ion-input
        type="text"
        formControlName="description"
        placeholder="description..."
      ></ion-input>
      <ion-button type="submit">Add Todo</ion-button>
    </form>
  `,
})
export class TodoFormComponent {
  @Output() todoSubmitted = new EventEmitter<Todo>();

  public todoForm = this.fb.group({
    title: ['', Validators.required],
    description: [''],
  });

  constructor(private fb: FormBuilder) {}

  handleSubmit() {
    if (this.todoForm.valid) {
      this.todoSubmitted.emit(this.todoForm.value as Todo);
    }
  }
}

@NgModule({
  declarations: [TodoFormComponent],
  exports: [TodoFormComponent],
  imports: [IonicModule, ReactiveFormsModule],
})
export class TodoFormComponentModule {}
