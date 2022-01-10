import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-ac-tive',
  templateUrl: './ac-tive.component.html',
  styleUrls: ['./ac-tive.component.css']
})
export class AcTiveComponent implements OnInit {
  current_page_flag:string;
  constructor(private fetchData:FetchDataService) { 
    this.fetchData.current_page='active';
    this.current_page_flag=this.fetchData.current_page;
  }

  ngOnInit(): void {
  }

}
