import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public userList: User[] = [
    {name: "fjoralba", ranking: 1},
    {name: "simone", ranking: 5},
    {name: "matteo", ranking: 4},
    {name: "marco", ranking: 3},
    {name: "lorenzo", ranking: 2},
    {name: "alessandro", ranking: 7},
    {name: "andrea", ranking: 6},
  ]

  constructor() { }



  ngOnInit(): void {
  }

}

export interface User{
  name: string;
  ranking: number;
}
