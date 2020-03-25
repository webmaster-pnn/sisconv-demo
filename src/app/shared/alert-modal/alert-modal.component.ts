import { Component, OnInit, Input } from '@angular/core';

import {  BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {
  @Input() tipo = 'success';
  @Input() mensagem: String;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }
  fechar() {
    this.bsModalRef.hide();
  }
}
