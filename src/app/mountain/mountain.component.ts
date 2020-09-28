import { Component, OnInit } from '@angular/core';
import { Mountain } from '../mountain';
import { MountainService } from '../mountain.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-mountain',
  templateUrl: './mountain.component.html',
  styleUrls: ['./mountain.component.scss']
})
export class MountainComponent implements OnInit {

  selectedMt: Mountain;
  mountains: Mountain[];

  constructor(private mtService: MountainService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getMountains();
  }

  onSelect(mt: Mountain): void {
    this.selectedMt = mt;
    this.messageService.add(`MountainsComponent: Selected mountain id=${mt.id}`)
  }

  getMountains(): void {
    this.mtService.getMountains()
        .subscribe(mountains => this.mountains = mountains);
  }

}
