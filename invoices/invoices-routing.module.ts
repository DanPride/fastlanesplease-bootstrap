import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesComponent } from "./invoices.component";


const invoiceroutes: Routes = [
     { path:'', component: InvoicesComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(invoiceroutes) ],
  exports: [ RouterModule ]
})

export class InvoicesRoutingModule {}