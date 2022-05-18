import { Component, OnInit } from '@angular/core';
import { Activity } from '../../interfaces/activity.interface';
import { ChambermaidActivitiesService } from '../../services/chambermaid-activities.service';

@Component({
  selector: 'app-chambermaid-activities',
  templateUrl: './chambermaid-activities.component.html',
  styleUrls: ['./chambermaid-activities.component.scss']
})
export class ChambermaidActivitiesComponent implements OnInit {

  activities!: Array<Activity>;

  constructor(private chambermaidActivitiesService: ChambermaidActivitiesService) { }

  ngOnInit(): void {
    this.chambermaidActivitiesService.getActivities().subscribe(data => {
      this.activities = data;
    })
  }

}
