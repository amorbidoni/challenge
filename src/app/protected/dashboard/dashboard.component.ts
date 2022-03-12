import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

import { RouterAnimation } from '../shared/animations/router.animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [RouterAnimation],
})
export class DashboardComponent implements OnInit {
  constructor(
    private AuthService: AuthService,
    private contexts: ChildrenOutletContexts
  ) {}
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
  ngOnInit(): void {}
}
