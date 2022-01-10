import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-del-ted',
  templateUrl: './del-ted.component.html',
  styleUrls: ['./del-ted.component.css']
})
export class DelTedComponent implements OnInit {
  current_page_flag:string;
  constructor(private fetchData:FetchDataService) {
    this.fetchData.current_page='deleted';
    this.current_page_flag=this.fetchData.current_page;
   }

  ngOnInit(): void {
  }

}
