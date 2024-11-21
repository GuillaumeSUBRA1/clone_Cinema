import { Component, EventEmitter, Output } from '@angular/core';
import { menuList } from '../model/banniere.model';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports : [NgClass],
  selector: 'banniere',
  templateUrl: './banniere.component.html',
  styleUrl: './banniere.component.scss'
})
export class BanniereComponent {
  menus = menuList;
  currentMenu = 0;

  @Output() routerEmitter = new EventEmitter<number>()

  route(onglet: number) {
    this.currentMenu = onglet;
    this.routerEmitter.emit(onglet);
  }
}
