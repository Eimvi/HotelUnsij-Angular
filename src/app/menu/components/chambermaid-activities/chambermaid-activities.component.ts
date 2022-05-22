import { Component, Input } from '@angular/core';
import { Activity } from '../../interfaces/activity.interface';

@Component({
  selector: 'app-chambermaid-activities',
  templateUrl: './chambermaid-activities.component.html',
  styleUrls: ['./chambermaid-activities.component.scss']
})
export class ChambermaidActivitiesComponent {

  @Input() activities!: Array<Activity>;

}
