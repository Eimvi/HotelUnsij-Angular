import { Component, OnInit } from '@angular/core';
import { HousekeeperInventoryService } from '../../services/housekeeper-inventory.service';
import { Body, Amenidade } from '../../interfaces/inventory.interface';

@Component({
  selector: 'app-housekeeper-inventory',
  templateUrl: './housekeeper-inventory.component.html',
  styleUrls: ['./housekeeper-inventory.component.scss']
})
export class HousekeeperInventoryComponent implements OnInit {

  inventories!: Array<Body>;
  amenidades!:  Array<Amenidade>;

  constructor(private housekeeperInventoryService: HousekeeperInventoryService) { }

  ngOnInit(): void {
    this.getInventories();
  }

  getInventories(): void {
    this.housekeeperInventoryService.getInventories()
      .subscribe(data => {
        this.inventories = data;    
      });
  }
}