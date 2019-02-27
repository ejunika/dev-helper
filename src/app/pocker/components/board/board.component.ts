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

  currentRoom: any;

  @ViewChild('createRoomModalDialog')
  createRoomModalDialog: ModalDialogComponent;

  createRoomModalControlButtons: Array<ModalDialogControlButton> = [
    {
      id: 'cancel',
      text: 'Cancel',
      classes: 'btn-secondary',
      isEnabled: true,
      isVisible: true,
      action: modalDialog => {
        this.roomFormGroup.reset();
        modalDialog.close();
      }
    },
    {
      id: 'save',
      text: 'Save',
      classes: 'btn-primary',
      isEnabled: false,
      isVisible: true,
      action: modalDialog => {
        this.performAction();
        modalDialog.close();
      }
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.rooms = [];
    this.roomFormGroup = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      details: new FormControl('')
    });
    this.roomFormGroup.valueChanges.subscribe(() => {
      this.createRoomModalControlButtons[1].isEnabled =
        this.roomFormGroup.status === 'VALID';
    });
  }

  createRoom(): void {
    let room: PokerRoom = this.roomFormGroup.value;
    room.id = new Date().getTime().toString();
    this.rooms.push(room);
    this.roomFormGroup.reset();
  }

  updateRoom(room: PokerRoom): void {
    Object.assign(
      this.rooms[this.rooms.indexOf(this.currentRoom)],
      this.roomFormGroup.value
    );
  }

  performAction(): void {
    if (!this.currentRoom) {
      this.createRoom();
    } else {
      this.updateRoom(this.currentRoom);
    }
  }

  open(room: PokerRoom): void {
    this.router.navigate(['app/poker/board/rooms', room.id]);
  }

  openToEdit(room: PokerRoom): void {
    this.roomFormGroup.setValue(room);
    this.currentRoom = room;
    this.createRoomModalDialog.open();
  }

  delete(room: PokerRoom): void {
    this.rooms.splice(this.rooms.indexOf(room), 1);
  }
}
