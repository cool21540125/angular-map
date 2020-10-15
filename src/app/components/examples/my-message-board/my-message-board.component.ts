import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-my-message-board',
  templateUrl: './my-message-board.component.html',
  styleUrls: ['./my-message-board.component.scss']
})
export class MyMessageBoardComponent implements OnInit {
  name = '';
  content = '';
  messages: Message[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addMessage(): void {
    if (!this.name.trim() || !this.content.trim()) {
      return;
    }
    const message = new Message(this.name, this.content);
    this.messages.push(message);
    // this.messages = [message, ...this.messages];
    this.content = '';

  }

}
