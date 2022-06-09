import { Component, Input, OnInit } from '@angular/core';
import { Body, Amenidade } from '../../interfaces/inventory.interface';


@Component({
  selector: 'app-housekeeper-inventory-card',
  templateUrl: './housekeeper-inventory-card.component.html',
  styleUrls: ['./housekeeper-inventory-card.component.scss']
})
export class HousekeeperInventoryCardComponent {

  @Input() inventories!: Array<Body>;
  @Input() amenidades!: Array<Amenidade>;
  
}
