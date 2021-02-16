import { Component, OnInit } from "@angular/core";
import { WebexService } from "../webex.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})

export class RoomComponent implements OnInit{
  roomName: string;
  roomId: string;
  memberName: string;
  textMessage: string;
  name:string;

  constructor(private webex: WebexService) {}

  ngOnInit(): void {
    this.webex.onInit()
  }

  onCreateRoom() {
    
      this.webex.onCreateRoom(this.roomName).then((roomId) => {
      console.log(roomId)
      })
    
  }
  
  addPeopleToRoom() {
    if(this.roomId,this.memberName) {
      this.webex.addPeopleToRoom(this.roomId,this.memberName)
    }
    
    }
  
  sendmsgToRoom() {
    if(this.roomId,this.textMessage) {
      this.webex.sendmsgToRoom(this.roomId,this.textMessage)
    }
    
  }

  listRooms() {
    this.webex.onListRoom().then((rooms) => {
      console.log(rooms)
    })
  }
  
  onLogout() {
    this.webex.onLogout()
  }
}