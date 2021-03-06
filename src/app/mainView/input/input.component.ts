import { Component } from '@angular/core';
import { SignalRService } from '../../services/signalr.service';
import { MessageComponent } from '../message/message.component';
import { WhatsappMessages } from '../../services/WhatsappMessages.service'

@Component({
  selector: 'whatsapp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class WhatsAppInputComponent {

  inputText : string

  constructor(public whatsappMessage : WhatsappMessages){
    this.inputText = "";
  }

  onClickSend() : void {
    var msg : MessageComponent = new MessageComponent();
    msg.text = this.inputText;
    msg.clientID = this.whatsappMessage.clientID;
    this.whatsappMessage.broadcastChatData(msg);
  }

  onKey(value : string) { // without type info
    this.inputText = value;
  }

  }
