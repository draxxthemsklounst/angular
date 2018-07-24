import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //below is for class types and attributes
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Server not created.';
  serverName = 'Test Server'
  ;
  constructor() {

    setTimeout( () => {
      this.allowNewServer = true;
    },2000);//execute after 2 seconds

   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Server name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
