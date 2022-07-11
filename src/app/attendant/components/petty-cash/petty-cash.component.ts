import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from '../../interfaces/pettyCash.interface';
import { PettyCashService } from '../../services/petty-cash.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-petty-cash',
  templateUrl: './petty-cash.component.html',
  styleUrls: ['./petty-cash.component.scss']
})
export class PettyCashComponent implements OnInit {

  registers!: Array<Register>;
  pageSize: Array<number> = [];
  actualPage: number = this.route.snapshot.queryParams['page'];
  searchTxt: string = '';

  constructor(private router: Router, private route: ActivatedRoute,
    private toastService: ToastrService,
    private pettyCashService: PettyCashService) { }

  ngOnInit(): void {
    this.getRegisters();
  }

  pageSelected(page: number): void {
    this.router.navigate([],
      {
        relativeTo: this.route,
        queryParams: { page: page },
        queryParamsHandling: 'merge'
      });
    this.actualPage = page;
    this.getRegisters();
  }

  getRegisters(): void {    
    if (this.actualPage > 0) {
      this.pettyCashService.getRegisters(this.actualPage, this.searchTxt)
        .subscribe(data => {
          this.registers = data.list;
          this.pageSize.length = data.page_count;
          // Verify query page exists
          if (data.page_count) this.verifyPageExists(data.page_count);
        });
    } else {
      this.alertMessagePage();
    }
  }

  filterActivities(searchTxt: string): void {
    this.searchTxt = searchTxt;
    this.pageSelected(1);
  }

  verifyPageExists(page: number): void {
    if (this.actualPage > page) {
      this.alertMessagePage();
    }
  }

  alertMessagePage(): void {
    this.toastService.warning('La página solicitada no existe. 😥');
    this.pageSelected(1);
  }
}
