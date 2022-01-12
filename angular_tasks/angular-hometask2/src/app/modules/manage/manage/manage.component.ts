import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  
  constructor(private fetchData:FetchDataService,private router:Router) { 
    this.fetchData.current_page='manage';
    this.current_page_flag=this.fetchData.current_page;
  }

  current_page_flag:string;

  ngOnInit(): void {
  }

  modify_toggle_flag(){
    if(!this.fetchData.createTrigger){
      this.fetchData.createTrigger=!this.fetchData.createTrigger;
      this.fetchData.update=false;
     }
  }
 create(){
   this.modify_toggle_flag();
   this.router.navigate(['/manage/create']);
 }
}
