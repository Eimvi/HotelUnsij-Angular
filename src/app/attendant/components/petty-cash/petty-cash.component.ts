import { Component, OnInit } from '@angular/core';
import { PettyCashService } from '../../services/petty-cash.service';
import { Register } from '../../interfaces/pettyCash.interface';

@Component({
  selector: 'app-petty-cash',
  templateUrl: './petty-cash.component.html',
  styleUrls: ['./petty-cash.component.scss']
})
export class PettyCashComponent implements OnInit {
  registers!: Array<Register>;

  constructor(private pettyCashService: PettyCashService) { }

  ngOnInit(): void {
    this.getRegisters(); 
  }

  getRegisters(): void {
    this.pettyCashService.getRegisters()
      .subscribe(data => {
        this.registers = data;    
      });
  }
}
