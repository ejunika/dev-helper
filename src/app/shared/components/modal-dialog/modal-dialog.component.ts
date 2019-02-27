import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { ModalDialogControlButton } from '../../modals/modal-dialog';

declare var $: any;

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {
  @ViewChild('modalDialog')
  modalDialog: ElementRef;

  @Input()
  modalTitle: string;

  @Input()
  modalControlButtons: Array<ModalDialogControlButton>;

  self: any;

  constructor() {
    this.self = this;
  }

  ngOnInit() {
    this.modalTitle = this.modalTitle || 'Modal Title';
    this.modalControlButtons = this.modalControlButtons || [
      {
        id: 'cancel',
        text: 'Cancel',
        classes: 'btn-secondary',
        isEnabled: true,
        isVisible: true,
        action: (modalDialog: any) => {
          this.close();
        }
      },
      {
        id: 'create',
        text: 'Create',
        classes: 'btn-primary',
        isEnabled: true,
        isVisible: true,
        action: (modalDialog: any) => {}
      }
    ];
  }

  open(): void {
    $(this.modalDialog.nativeElement)
      .appendTo('body')
      .modal('show');
  }

  close(): void {
    $(this.modalDialog.nativeElement).modal('hide');
  }
}
