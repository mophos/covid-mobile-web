import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  dataTh: any = {};
  country: any = [];
  pr: any = [];
  pics: any = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.addVisit();
    this.getSummaryTH();
    this.getPR();
    this.getPics();
  }

  async addVisit() {
    try {
      await this.apiService.addVisit();
    } catch (error) {

    }
  }

  async getSummaryTH() {
    try {
      const rs: any = await this.apiService.getSummaryTH();
      if (rs.ok) {
        this.dataTh = rs.rows;
      }
    } catch (error) {

    }
  }

  async getPR() {
    try {
      const rs: any = await this.apiService.getPR();
      if (rs.ok) {
        this.pr = rs.rows;
      }
    } catch (error) {

    }
  }

  async getPics() {
    try {
      const rs: any = await this.apiService.getPics();
      if (rs.ok) {
        this.pics = rs.rows;
      }
    } catch (error) {

    }
  }
}
