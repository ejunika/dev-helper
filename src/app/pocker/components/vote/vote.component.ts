import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  @Input('vote')
  vote: any;

  @Output('onVoted')
  onVoted = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.vote = this.vote || { isVoted: false, icon: { value: '' } };
  }

  doVote(): void {
    this.vote.isVoted = true;
    this.onVoted.emit(this.vote);
  }
}
