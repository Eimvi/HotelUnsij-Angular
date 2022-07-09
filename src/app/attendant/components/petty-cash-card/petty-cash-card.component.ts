import { Component, Input } from '@angular/core';
import { Register } from '../../interfaces/pettyCash.interface';

@Component({
  selector: 'app-petty-cash-card',
  templateUrl: './petty-cash-card.component.html',
  styleUrls: ['./petty-cash-card.component.scss']
})
export class PettyCashCardComponent {

  @Input() registers!: Array<Register>;

}
