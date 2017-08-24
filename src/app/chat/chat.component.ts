import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

    chats: any;
    joinned: boolean = false;
    newUser = {nickname: '', room: ''};
    msgData = {room: '', nickname: '', message: ''};

    constructor() {
        this.chats = [{'id': 1, "description": "prueba"}, {'id': 2, "description": "prueba2"}];
    }

    ngOnInit() {
    }
     // Fetching a uniq random avatar from the robohash.org service.
    avatarUrl () {
        return '//robohash.org/1?set=set2&bgset=bg2&size=70x70';
    }
    
}
