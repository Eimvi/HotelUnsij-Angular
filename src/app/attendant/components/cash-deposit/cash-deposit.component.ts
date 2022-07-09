import { Component, OnInit } from '@angular/core';
import { CashDepositService } from '../../services/cash-deposit.service';
import { Register } from '../../interfaces/cashDeposit.interface';

@Component({
  selector: 'app-cash-deposit',
  templateUrl: './cash-deposit.component.html',
  styleUrls: ['./cash-deposit.component.scss']
})
export class CashDepositComponent implements OnInit {
  registers!: Array<Register>;

  constructor(private cashDepositService: CashDepositService) { }

  ngOnInit(): void {
    this.getRegisters(); 
  }

  getRegisters(): void {
    this.cashDepositService.getRegisters()
      .subscribe(data => {
        this.registers = data;    
      });
  }
}
