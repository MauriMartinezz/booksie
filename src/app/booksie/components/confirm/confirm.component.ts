import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent {
  @Input() book!: string;
  @Input() toLoan!: boolean;

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
