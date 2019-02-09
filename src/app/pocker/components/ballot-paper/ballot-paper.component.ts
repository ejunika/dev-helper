import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ballot-paper',
  templateUrl: './ballot-paper.component.html',
  styleUrls: ['./ballot-paper.component.scss']
})
export class BallotPaperComponent implements OnInit {
  availableVotes = [
    { isVoted: false, icon: { value: '0' } },
    { isVoted: false, icon: { value: '1' } },
    { isVoted: false, icon: { value: '3' } },
    { isVoted: false, icon: { value: '5' } },
    { isVoted: false, icon: { value: '8' } },
    { isVoted: false, icon: { value: '13' } },
    { isVoted: false, icon: { value: '?' } },
    {
      isVoted: false,
      icon: { value: '', useClasses: true, classes: 'fa fa-mug-hot' }
    },
    {
      isVoted: false,
      icon: { value: '', useClasses: true, classes: 'fa fa-pizza-slice' }
    }
  ];

  selectedVote: any;

  constructor() {}

  ngOnInit() {}

  onVoted(vote: any): void {
    if (this.selectedVote) {
      this.selectedVote.isVoted = false;
    }
    this.selectedVote = vote;
  }
}
