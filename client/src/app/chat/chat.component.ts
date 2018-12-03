import { Component } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery'
import {Router} from "@angular/router";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  private serverUrl = 'http://localhost:8080/webchat?code=' + sessionStorage.getItem("AuthToken")
  public title = 'Czat ogrodników';
  private stompClient;

  constructor(private router: Router){
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(){
    if (sessionStorage.getItem("AuthToken")) {
      let ws = new SockJS(this.serverUrl);
      this.stompClient = Stomp.over(ws);
      this.stompClient.debug = null
      let that = this;
      this.stompClient.connect({}, function (frame) {
        that.stompClient.subscribe("/chat", (message) => {
          if (message.body) {
            $(".chat").append("<div class='message'>" + message.body + "</div>")
          }
        });
      });
    }else this.router.navigate(['/login']);
  }

  sendMessage(message){
    this.stompClient.send("/app/send/message" , {},  sessionStorage.getItem("AuthUsername") +":"+message);
    $('#input').val('');
  }

}
