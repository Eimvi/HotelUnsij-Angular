import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from '../../interfaces/activity.interface';
import { ChambermaidActivitiesService } from '../../services/chambermaid-activities.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chambermaid-menu',
  templateUrl: './chambermaid-menu.component.html',
  styleUrls: ['./chambermaid-menu.component.scss']
})
export class ChambermaidMenuComponent implements OnInit {

  activities!: Array<Activity>;
  pageSize: Array<number> = [];
  actualPage: number = this.route.snapshot.queryParams['page'];
  searchTxt: string = '';

  constructor(private router: Router, private route: ActivatedRoute,
    private toastService: ToastrService,
    private chambermaidActivitiesService: ChambermaidActivitiesService) { }

  ngOnInit(): void {
    this.getActivities();
  }

  pageSelected(page: number): void {
    this.router.navigate([],
      {
        relativeTo: this.route,
        queryParams: { page: page },
        queryParamsHandling: 'merge'
      });
    this.actualPage = page;
    this.getActivities();
  }


  getActivities(): void {
    if (this.actualPage > 0) {
      this.chambermaidActivitiesService.getActivities(this.actualPage, this.searchTxt)
        .subscribe(data => {
          this.activities = data.list;
          this.pageSize.length = data.page_count;
          // Verify query page exists
          if(data.page_count) this.verifyPageExists(data.page_count);
        });
    }else{
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

  alertMessagePage(): void{
    this.toastService.warning('La página solicitada no existe. 😥');
    this.pageSelected(1);
  }

}
