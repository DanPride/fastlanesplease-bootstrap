import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InvoicesComponent } from './invoices.component';
import { InvoiceService } from './invoices.service';
import { InvoicesRoutingModule } from "./invoices-routing.module";
import { InvoiceComponent } from './invoice.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      InvoicesRoutingModule 
  ],
  declarations: [InvoicesComponent, InvoiceComponent],
  providers: [InvoiceService]
})
export class InvoicesModule { }
