import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService }         from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayDate = new Date().toLocaleDateString();
  title = 'Data Scaffolding and Detail Screen Roughouts w Lazy Loading modules - Day 8 build- 3';
  pages= [''];
  showbuttons = false;
  constructor(
    private appservice: AppService,
    private route : ActivatedRoute,
    private router : Router
    ) {
}

getAllTables(): void {
    this.appservice
        .getAllTables()
        .then(pages => this.pages =  pages);
  }
  onClickAdmin(admin){
    admin = this.appservice.onAdmin(admin) ;
  }
  onClick2(showbuttons){
    // this.router.navigate(['/events','1']);
     this.router.navigateByUrl('./events/1');
  }
onClick(showbuttons){
return !showbuttons;
}
onChange(page:string){
  const lowercasepage = page.toLowerCase();
 this.router.navigate([lowercasepage]);
}
ngOnInit(): void {
   this.getAllTables();
  }
  }