import { Component, Input, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private fetchData:FetchDataService) { }
  user_card_details:Array<any>=this.fetchData.users;
  @Input
  ('current_page_flag_obj') current_page_flag_value:string;
  ngOnInit(): void {
  }

}
