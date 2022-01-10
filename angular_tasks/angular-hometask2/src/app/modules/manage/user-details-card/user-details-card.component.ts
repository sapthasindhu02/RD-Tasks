import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-user-details-card',
  templateUrl: './user-details-card.component.html',
  styleUrls: ['./user-details-card.component.css']
})
export class UserDetailsCardComponent implements OnInit {
  ID:number=null;
  user_arr:any;
  userDataObj:any;
  constructor(private fetchData:FetchDataService,activeRoute:ActivatedRoute,private router:Router) {
    this.user_arr=this.fetchData.users;
    activeRoute.params.subscribe(params=>{
      this.ID=params["id"];
      for(let user of this.user_arr){
        if(user.id===this.ID){
          this.userDataObj=user;
          console.log("hiii"+this.ID);
          
          break;
        }
      }
    })
   }

  ngOnInit(): void {
  }

}
