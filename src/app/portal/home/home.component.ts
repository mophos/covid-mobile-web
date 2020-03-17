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

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getSummaryTH();
    this.getPR();
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
        for (const v of rs.rows) {
          if (v.title.length !== undefined) {
            this.pr.push(v);
          }
        }
      }
    } catch (error) {

    }
  }
}
