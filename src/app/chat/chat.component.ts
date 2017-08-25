import {Component, OnInit} from '@angular/core';
import {PubNubAngular} from 'pubnub-angular2';


@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css'],
    providers: [PubNubAngular]
})
export class ChatComponent implements OnInit {

    chats: any;
    joinned: boolean = false;

    newUser = {nickname: '', room: ''};
    msgData = {room: '', nickname: '', message: ''};
    pubnub: PubNubAngular;
    channel: string;
    messages: any;
    public items: Array<string>;

    constructor(pubnub: PubNubAngular) {
        this.chats = [{'id': 1, "description": "prueba"}, {'id': 2, "description": "prueba2"}];
        this.messages = [{"id": 1, "text": "Tony Garcia", "date": new Date()}];
        this.channel = 'conect-arduino';
        this.pubnub = pubnub;
        this.pubnub.init({
            publishKey: 'pub-c-24150dba-a538-4de7-af26-643500dd957d',
            subscribeKey: 'sub-c-af6ff0d2-6a8d-11e7-9bf2-0619f8945a4f'
        });
        this.pubnub.subscribe({
            channels: [this.channel],
            withPresence: true,
            triggerEvents: ['message', 'presence', 'status']
        });

        this.pubnub.getMessage('conect-arduino', function (msg) {
            console.log("mensaje");
            this.messages.push(msg.message);
            console.log(msg);
        });
        this.pubnub.getPresence('conect-arduino', function (pse) {
             console.log("conect");
        });
        this.pubnub.getStatus('conect-arduino', function (st) {
            console.log("presence");
        });
    }
    ngOnInit() {
       setInterval(() => {
            let hw = 'Hello World, ' + Date.now();
            this.pubnub.publish({
                channel: this.channel,
                message: {
                    "id": 1,
                    "text": hw
                }
            });
        }, 1000000000000000000);
    }
    action(event, item) {
        console.log("function called");
        this.pubnub.publish({
            channel: this.channel,
            message: {
                "id": 1,
                "text": "texto enviado",
                "date": new Date()
            }
        });
    }



    // Fetching a uniq random avatar from the robohash.org service.
    avatarUrl() {
        return '//robohash.org/1?set=set2&bgset=bg2&size=70x70';
    }

}
