import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UsersComponent } from "./users.component";
import { UsersRoutingModule }  from "./users-routing.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule 
  ],
  declarations: [UsersComponent, UserComponent],
  providers:[]
})
export class UsersModule { }
