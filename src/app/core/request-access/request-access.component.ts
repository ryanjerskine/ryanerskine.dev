import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.scss']
})
export class RequestAccessComponent implements OnInit {
  requested = 'Media'; // Currently Media or Kiosk
  alreadyRequested = false;

  constructor() { }

  ngOnInit() {
  }

  requestAccess() {
    // TODO: Send access request to API
  }
}
