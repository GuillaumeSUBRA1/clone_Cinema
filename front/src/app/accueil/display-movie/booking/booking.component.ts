import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, input, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { NewBook, NewBookForm } from 'src/app/model/booking.model';
import { Session } from 'src/app/model/session.model';
import { BookingService } from 'src/app/services/booking-service.service';

@Component({
  selector: 'booking',
  standalone: true,
  imports: [ CommonModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  formBuilder = inject(FormBuilder);
  bookingService = inject(BookingService);

  session = input.required<Session>();
  titre = input.required<string>();

  newBook: NewBook = {
    session: 0,
    seats: 1
  };

  bookForm = this.formBuilder.nonNullable.group<NewBookForm>({
    email: new FormControl(null, { nonNullable: true, validators: [Validators.required, Validators.email] }),
    seats: new FormControl(1, { nonNullable: true, validators: [Validators.required] })
  });

  @Output() cancelEvent = new EventEmitter<boolean>();

  cancel() {
    this.cancelEvent.emit(false);
  }

  book() {
    if (this.bookForm.valid) {
      this.newBook.session = this.session().id;
      if (this.bookForm.value.email && this.bookForm.value.email.length > 5) {
        this.newBook.email = this.bookForm.value.email;
      }
      if (this.bookForm.value.seats) {
        this.newBook.seats = this.bookForm.value.seats;
      }
      this.bookingService.create(this.newBook).subscribe({
        next: _ => this.cancelEvent.emit(true)
      });
    }
  }
}
