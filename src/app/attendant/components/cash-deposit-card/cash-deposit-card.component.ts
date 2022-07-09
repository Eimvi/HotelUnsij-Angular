import { Component, Input } from '@angular/core';
import { Register } from '../../interfaces/cashDeposit.interface';

@Component({
  selector: 'app-cash-deposit-card',
  templateUrl: './cash-deposit-card.component.html',
  styleUrls: ['./cash-deposit-card.component.scss']
})
export class CashDepositCardComponent {

  @Input() registers!: Array<Register>;

}
