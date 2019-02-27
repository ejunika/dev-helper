import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { map, mergeMap } from 'rxjs/operators';
import { PokerRoom } from 'src/app/shared/modals/poker';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  room: PokerRoom;
  participants: Array<any>;
  isVotingInAction: boolean;
  isResultOut: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.participants = [];
    this.isVotingInAction = false;
    this.activatedRoute.params
      .pipe(
        mergeMap((params: any) => {
          return this.dataService.getRoom(params.roomId);
        })
      )
      .subscribe((room: PokerRoom) => {
        this.room = room;
      });
    this.getParticipants();
  }

  getParticipants(): void {
    this.dataService.getUsers().subscribe((userResponse: any) => {
      this.participants = userResponse.data;
    });
  }

  startVoting(): void {
    this.isVotingInAction = true;
  }

  showResult(): void {
    this.isVotingInAction = false;
    this.isResultOut = true;
  }

  copyRoomLink(roomLink: any) {
    roomLink.select();
    document.execCommand('copy');
  }
}
