import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  current_page_flag:string;
  
  constructor(private fetchData:FetchDataService) { 
    this.fetchData.current_page='manage';
    this.current_page_flag=this.fetchData.current_page;
  }
  
  ngOnInit(): void {
  }

}
