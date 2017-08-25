import { Component } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [PubNubAngular]
})
export class AppComponent {
  title = 'Book Catalogue';
    pubnub: PubNubAngular;
    channel: string;
    constructor(pubnub: PubNubAngular) {
        this.channel = 'conect-arduino';
        this.pubnub = pubnub;
        this.pubnub.init({
            publishKey: 'pub-c-24150dba-a538-4de7-af26-643500dd957d',
            subscribeKey: 'sub-c-af6ff0d2-6a8d-11e7-9bf2-0619f8945a4f'
        });
        this.pubnub.subscribe({
            channels: [this.channel],
            triggerEvents: ['message']
        });
    }
    ngOnInit() {
        setInterval(() => {
            let hw = 'Hello World, ' + Date.now();
            this.pubnub.publish({
                channel: this.channel,
                message: {
                    "id": 2,
                    "text": hw
                }
            });
        }, 1000);
    }
}
