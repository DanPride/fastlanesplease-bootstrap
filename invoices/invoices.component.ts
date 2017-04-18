import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Invoice }                from './invoice';
import { InvoiceService }         from './invoices.service';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  invoices: Invoice[];
  selectedInvoice: Invoice;

  constructor(
    private invoiceservice: InvoiceService,
    private router: Router) { }

  
  getInvoices(): void {
    this.invoiceservice
        .getInvoices()
        .then(invoices => this.invoices = invoices);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.invoiceservice.create(name)
      .then(invoice => {
        this.invoices.push(invoice);
        this.selectedInvoice = null;
      });
  }

  delete(invoice: Invoice): void {
    this.invoiceservice
        .delete(invoice.Id)
        .then(() => {
          this.invoices = this.invoices.filter(h => h !== invoice);
          if (this.selectedInvoice === invoice) { this.selectedInvoice = null; }
        });
  }

  ngOnInit(): void {
    this.getInvoices();
  }

  onSelect(invoice: Invoice): void {
    this.selectedInvoice = invoice;
  }

  gotoDetail(): void {
    this.router.navigate(['/invoice', this.selectedInvoice.Id]);
  }
}
