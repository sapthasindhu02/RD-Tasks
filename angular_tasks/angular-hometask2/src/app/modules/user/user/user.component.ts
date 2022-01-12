import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  constructor(private fetchData:FetchDataService,private router:Router) { 
    this.users_arr=this.fetchData.userArr;
  }
  @Input
  ('card') user_card:any;
  @Input
  ('in_user_current_page_flag_obj') in_user_current_page_flag_value:string;
  @Input
  ('user_arr_attr') users_arr:any;
  public current_route: string;
  updatedUserObj: any;

  changeState(userObj: any){
     this.updatedUserObj=Object.assign(userObj,{isDeleted:!userObj.isDeleted,date:new Date()});
  }
  updateObj(id: any){
    this.fetchData.updateUserStatus(this.updatedUserObj,id).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
      })

  }
  toggle_btn(userObj:any,id:any){
    this.changeState(userObj);
    this.updateObj(id);
  }
  ngOnInit(): void {
  }

}
