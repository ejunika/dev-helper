import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild
} from '@angular/core';
import { UserContextService } from 'src/app/services/user-context.service';

declare var $: any;

@Component({
  selector: 'devhelper-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchEnabled: boolean;
  showCreateButton: boolean;
  @Output()
  onToggleMenuClick: EventEmitter<boolean>;
  constructor(private userContextService: UserContextService) {
    this.onToggleMenuClick = new EventEmitter<boolean>();
    this.userContextService.getAppConfig().subscribe((appConfig: any) => {
      this.searchEnabled = appConfig.header.searchEnabled;
      this.showCreateButton = appConfig.header.showCreateButton;
    });
  }
  ngOnInit() {}
}
