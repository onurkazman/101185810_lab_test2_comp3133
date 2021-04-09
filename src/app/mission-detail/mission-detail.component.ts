import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css']
})
export class MissionDetailComponent implements OnInit {

  private REST_API_END_POINT = 'https://api.spacexdata.com/v3/launches/';
  missionDetails: any;
  constructor(
  private activatedRoute: ActivatedRoute,
  private httClient: HttpClient
  ) {}

  ngOnInit(): void {
  let id = this.activatedRoute.snapshot.paramMap.get('id');
  console.log(id);
  //Make HTTP Call to fetch the user with given ID

  this.httClient
  .get(`${this.REST_API_END_POINT}${id}`)
  .subscribe((response: any) => {
  console.log(response);
  this.missionDetails = response;
  });
  }
}
