import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public current_route: string;
  public users_arr: any;
  constructor(private fetchData:FetchDataService,private router:Router) { 
    this.users_arr=this.fetchData.users;
  }
  color:string;
  @Input
  ('card') user_card:any;
  @Input
  ('in_user_current_page_flag_obj') in_user_current_page_flag_value:string;

  
  toggle_btn(id:number){
    for(let user of this.users_arr){
      if(user.id===id){
        user.isDeleted=!user.isDeleted;
        break;
      }
    }
  }
  ngOnInit(): void {
    this.color=this.user_card.isDeleted?"red":"green";
  }

}
