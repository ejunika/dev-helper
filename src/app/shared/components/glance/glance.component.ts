import { Component, OnInit, Input } from '@angular/core';
import { Glance } from '../../modals/ticket';

@Component({
  selector: 'app-glance',
  templateUrl: './glance.component.html',
  styleUrls: ['./glance.component.scss']
})
export class GlanceComponent implements OnInit {
  @Input('glance')
  glance: Glance;
  constructor() {}

  ngOnInit() {}
}
