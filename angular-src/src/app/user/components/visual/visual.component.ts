import { Component, OnInit, Input } from '@angular/core';
import {CommunicationService} from '../../services/communication.service';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.css']
})
export class VisualComponent implements OnInit {
  public data :any;
  constructor(private comm:CommunicationService) {
    this.data = this.comm.getData();
   }

  ngOnInit() {
    console.log(this.data);
  }

}
