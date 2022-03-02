import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from '../../models/Book.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent {
  @Input() book!: string;
  @Output() onAccept = new EventEmitter<boolean>();

  closeResult = '';

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  declineLoan() {
    this.onAccept.emit(false);
  }
  acceptLoan() {
    this.onAccept.emit(true);
  }
}
