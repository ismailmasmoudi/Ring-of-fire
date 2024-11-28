import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  ngOnInit(): void {
  } 
  @Input() name: string = ''; 
  @Input() playerActive : boolean = false;
}

