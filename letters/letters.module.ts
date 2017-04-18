import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { LetterComponent } from './letter.component';
import { LettersComponent } from './letters.component';
import { LetterService } from './letters.service';
import { LettersRoutingModule } from "./letters-routing.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LettersRoutingModule,
     NgbModule.forRoot()
  ],
  declarations: [LettersComponent, LetterComponent],
  providers:[LetterService]
})
export class LettersModule { }
