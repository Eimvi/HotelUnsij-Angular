import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../../interfaces/activity.interface';

@Component({
  selector: 'app-housekeeper-activities',
  templateUrl: './housekeeper-activities.component.html',
  styleUrls: ['./housekeeper-activities.component.scss']
})
export class HousekeeperActivitiesComponent {

  @Input() activities!: Array<Activity>;

}
