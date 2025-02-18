import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchBook } from 'src/app/model/booking.model';
import { ReservationSearchForm } from 'src/app/model/reservation.model';
import { StatusNotificationEnum } from 'src/app/model/state.model';
import { BookingService } from 'src/app/services/booking-service.service';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'reservation',
  standalone: true,
  imports: [ButtonModule, MenuModule, CommonModule, ReactiveFormsModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent {
  formBuilder = inject(FormBuilder);
  bookService = inject(BookingService);
  router = inject(Router);

  books: Array<SearchBook> = [];
  menuItems: MenuItem[] | undefined;

  constructor() {
    this.listenSearch();
  }

  emailForm = this.formBuilder.nonNullable.group<ReservationSearchForm>({
    email: new FormControl(null, { nonNullable: true, validators: [Validators.required, Validators.email] })
  });

  listenSearch() {
    effect(() => {
      const state = this.bookService.getSearchBookSignal();
      if (state.status === StatusNotificationEnum.OK) {
        this.books = state.value!;
        console.log(this.books);
      }
    });
  }

  search() {
    if (this.emailForm.get('email')!.value && this.emailForm.get('email')!.value!.length > 5) {
      this.bookService.getSearchBook(this.emailForm.get('email')!.value!);
    }
  }

  showMenu(e: Event, book: SearchBook, menu: any) {
    this.menuItems = [
      {
        items: [
          {
            label: 'Annuler',
            command: () => this.cancel(book.id)
          }
        ]
      }
    ];
    menu.toggle(e);
  }

  cancel(id: number) {
    this.bookService.cancel(id).subscribe({
      next: _ => this.books = this.books.filter(b => b.id != id)
    });
  }
}
