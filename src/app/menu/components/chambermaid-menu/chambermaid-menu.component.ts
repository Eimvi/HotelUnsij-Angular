import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from '../../interfaces/activity.interface';
import { ChambermaidActivitiesService } from '../../services/chambermaid-activities.service';

@Component({
  selector: 'app-chambermaid-menu',
  templateUrl: './chambermaid-menu.component.html',
  styleUrls: ['./chambermaid-menu.component.scss']
})
export class ChambermaidMenuComponent implements OnInit {

  activities!: Array<Activity>;
  pageSize: Array<number> = [];
  actualPage: number = this.route.snapshot.queryParams['page'];

  constructor(private router: Router, private route: ActivatedRoute, private chambermaidActivitiesService: ChambermaidActivitiesService) { }

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
    this.chambermaidActivitiesService.getActivities(this.actualPage).subscribe(data => {
      this.activities = data;
    })
  }

}
