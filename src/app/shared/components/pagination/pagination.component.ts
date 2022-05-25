import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() pages: number[] = [];
  @Output() pageSelected: EventEmitter<number> = new EventEmitter();

  isActive: number = 0;

  active(i: number): void{
    this.isActive = i;
    this.pageSelected.emit(this.isActive + 1);
  }

  nextPage(): void {
    if(this.isActive < this.pages.length - 1){
      this.isActive += 1;
      this.pageSelected.emit(this.isActive + 1);
    }
  }

  previousPage(): void {
    if(this.isActive > 0) {
      this.isActive -= 1;
      this.pageSelected.emit(this.isActive + 1);
    }
  }

}
