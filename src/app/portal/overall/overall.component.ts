import { Component, OnInit } from '@angular/core';
import { ApiService } from './../service/api.service';

@Component({
  selector: 'app-overall',
  templateUrl: './overall.component.html',
  styles: []
})
export class OverallComponent implements OnInit {

  dataGlobal: any = [];
  dataTh: any = {};

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getSummaryTH();
    this.getSummaryGlobal();
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

  async getSummaryGlobal() {
    try {
      const rs: any = await this.apiService.getSummaryGlobal();
      if (rs.ok) {
        this.dataGlobal = rs.rows;
      }
    } catch (error) {

    }
  }
}
