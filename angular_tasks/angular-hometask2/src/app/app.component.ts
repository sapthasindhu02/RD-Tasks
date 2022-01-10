import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-hometask2';
  current_route: string;
  constructor(private router:Router,private route: ActivatedRoute){
    this.title=this.router.url;
    console.log("hiiiiiii")
  }
  ngOnInit(): void {
    this.current_route=this.route.snapshot.paramMap.get('/');
    
    
  }
  
}
