import {Component, OnInit} from '@angular/core';

interface Person {
  key: string;
  name: string;
  email: string;
  company: string;
  role: string;
}

interface Role {
  role: string;
  description: string;
}

interface Project {
  name: string;
  developer: string;
  owner: string;
  users: string[];
}

@Component({
  selector: 'app-first-stage',
  templateUrl: './first-stage.component.html',
  styleUrls: ['./first-stage.component.css']
})
export class FirstStageComponent implements OnInit {

  listOfOption: string[] = ['John Brown', 'Jim Green', 'Joe Black'];
  listOfSelectedValue = ['John Brown'];

  projects: Project[] = [
    {
      name: "Empire state building",
      developer: "Starrett Brothers and Eken",
      owner: "W&H Properties ",
      users: ["John Brown", "Jim Green"],
    },
    {
      name: "Chrysler Building",
      developer: "Walter Chrysler",
      owner: "Signa Holding GmbH",
      users: ["Joe Black"],
    },
  ]

  roles: Role[] = [
    {
      role: "Admin",
      description: "Full access to all system"
    },
    {
      role: "User",
      description: "View only access "
    }
  ]

  users: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      email: "john_brown@mail.com",
      company: 'New York No. 1 Lake Park',
      role: 'Admin'
    },
    {
      key: '2',
      name: 'Jim Green',
      email: "jim_green@mail.com",
      company: 'London No. 1 Lake Park',
      role: 'User'
    },
    {
      key: '3',
      name: 'Joe Black',
      email: "joe_black@mail.com",
      company: 'Sidney No. 1 Lake Park',
      role: 'User'
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }


}
