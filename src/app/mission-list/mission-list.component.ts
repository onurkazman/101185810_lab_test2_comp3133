import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {

  private REST_API_END_POINT = "https://api.spacexdata.com/v3/launches";
  missions = []
  constructor(private httClient: HttpClient) { }

  ngOnInit(): void {
    this.httClient.get(this.REST_API_END_POINT).subscribe((response: any) => {
      console.log(response)
      this.missions = response
    })

  }

}
