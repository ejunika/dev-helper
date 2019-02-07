import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ModalDialogControlButton } from 'src/app/shared/modals/modal-dialog';
import { PokerRoom } from 'src/app/shared/modals/poker';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDialogComponent } from 'src/app/shared/components/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  rooms: Array<PokerRoom>;

  roomFormGroup: FormGroup;

  @ViewChild('createRoomModalDialog')
  createRoomModalDialog: ModalDialogComponent;

  createRoomModalControlButtons: Array<ModalDialogControlButton> = [
    {
      id: 'cancel',
      text: 'Cancel',
      classes: 'btn-secondary',
      action: modalDialog => {
        modalDialog.close();
      }
    },
    {
      id: 'save',
      text: 'Save',
      classes: 'btn-primary',
      action: modalDialog => {
        this.createRoom();
        modalDialog.close();
      }
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.rooms = [];
    this.roomFormGroup = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      details: new FormControl('')
    });
  }

  createRoom(): void {
    let room: PokerRoom = this.roomFormGroup.value;
    room.id = new Date().getTime().toString();
    this.rooms.push(room);
    this.roomFormGroup.reset();
  }

  open(room: PokerRoom): void {
    this.router.navigate(['/pocker/board/rooms', room.id]);
  }

  openToEdit(room: PokerRoom): void {
    this.roomFormGroup.setValue(room);
    this.createRoomModalDialog.open();
  }

  delete(room: PokerRoom): void {
    this.rooms.splice(this.rooms.indexOf(room), 1);
  }
}
