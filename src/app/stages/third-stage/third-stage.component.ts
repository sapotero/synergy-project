import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-third-stage',
  templateUrl: './third-stage.component.html',
  styleUrls: ['./third-stage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThirdStageComponent implements OnInit {

  cols = [
    "First Name",
    "Last Name",
    "Full Name",
    "Occupant",
    "Assigned Space",
    "Owner",
    "Owned Space",
    "Security Clearance",
    "Security Clearance Issue Date",
    "System Type",
    "System Classification",
    "Water Flow",
    "Pressure Rating",
    "Pressure Type",
  ]

  rows = [
    "Construction Elements",
    "Systems",
    "Spaces",
    "Documents",
    "People",

  ]

  constructor() { }

  ngOnInit(): void {
  }
}
