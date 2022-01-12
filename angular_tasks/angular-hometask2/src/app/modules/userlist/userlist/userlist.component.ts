import { JsonpClientBackend } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  user_card_details:Array<any>;
  constructor(private fetchData:FetchDataService) {
    this.loadUsersData();
   }

  @Input
  ('current_page_flag_obj') current_page_flag_value:string;

  ngOnInit(): void { 
  }

  loadUsersData(){
    this.fetchData.getUsers().subscribe(data=>{
      this.user_card_details=data;
      this.fetchData.userArr=data;
    });
  }
}
