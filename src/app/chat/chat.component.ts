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
    pubnub: PubNubAngular;
    channel: string;
    messages: any;
    public items: Array<string>;

    constructor(pubnub: PubNubAngular) {
        var user = 'web-client_' + new Date();
        this.chats = [{'id': 1, "description": "prueba"}, {'id': 2, "description": "prueba2"}];
        this.messages = [];
        this.messages.push({"id": 1, "text": "Tony Garcixa", "date": new Date()});
        this.channel = 'conect-arduino';
        this.pubnub = pubnub;
        this.pubnub.init({
            publishKey: 'pub-c-24150dba-a538-4de7-af26-643500dd957d',
            subscribeKey: 'sub-c-af6ff0d2-6a8d-11e7-9bf2-0619f8945a4f',
            uuid: user

        });
        this.pubnub.subscribe({
            channels: [this.channel],
            withPresence: true,
            triggerEvents: ['message', 'presence', 'status'],
            uuid: user,
            heartbeatInterval: 30 // the frequency of ping from client to server
        });
        
        this.messages = this.pubnub.getMessage(this.channel, function(msg) {
            console.log(msg.message);
            console.log(msg);
        });    
        /*var mensaje = this.pubnub.getMessage('conect-arduino', function (msg) {
            console.log("mensaje");
            console.log(msg.message);
            return msg.message;
        });
        console.log(mensaje);
        /*this.pubnub.getPresence('conect-arduino', function (pse) {
             console.log("conect");
        });
        this.pubnub.getStatus('conect-arduino', function (st) {
            console.log("presence");
        });*/

        this.pubnub.addListener({
            message: function (m) {
                // handle message
                var actualChannel = m.actualChannel;
                var channelName = m.channel; // The channel for which the message belongs
                var msg = m.message; // The Payload
                var publisher = m.publisher;
                var subscribedChannel = m.subscribedChannel;
                var channelGroup = m.subscription; // The channel group or wildcard subscription match (if exists)
                var pubTT = m.timetoken; // Publish timetoken

            },
            presence: function (p) {
                // handle presence
                var action = p.action; // Can be join, leave, state-change or timeout
                var channelName = p.channel; // The channel for which the message belongs
                var channelGroup = p.subscription; //  The channel group or wildcard subscription match (if exists)
                var presenceEventTime = p.timestamp; // Presence event timetoken
                var status = p.status; // 200
                var message = p.message; // OK
                var service = p.service; // service
                var uuids = p.uuids;  // UUIDs of users who are connected with the channel with their state
                var occupancy = p.occupancy; // No. of users connected with the channel

            },
            status: function (s) {
                // handle status
                var category = s.category; // PNConnectedCategory
                var operation = s.operation; // PNSubscribeOperation
                var affectedChannels = s.affectedChannels; // The channels affected in the operation, of type array.
                var subscribedChannels = s.subscribedChannels; // All the current subscribed channels, of type array.
                var affectedChannelGroups = s.affectedChannelGroups; // The channel groups affected in the operation, of type array.
                var lastTimetoken = s.lastTimetoken; // The last timetoken used in the subscribe request, of type long.
                var currentTimetoken = s.currentTimetoken; // The current timetoken fetched in the subscribe response, which is going to be used in the next request, of type long.

            }
        });

    }
    ngOnInit() {
        /* setInterval(() => {
              let hw = 'Hello World, ' + Date.now();
              this.pubnub.publish({
                  channel: this.channel,
                  message: {
                      "id": 1,
                      "text": hw
                  }
              });
          }, 1000000000000000000);*/



    }
    action(event) {
        console.log("function called");
        this.pubnub.publish({
            channel: this.channel,
            message: {
                "id": 1,
                "text": "texto enviado",
                "date": new Date()
            }
        }/*,
            (status, response) => {
                if (status.error) {
                    console.log(status);
                } else {
                    console.log('message Published w/ timetoken', response.timetoken);
                }
            }*/
        );

        /*  var m = this.pubnub.getMessage(this.channel, function(msg) {
              console.log(msg);
              this.arreglo.unshift(msg.message);
          });
  
         console.log(m);*/
    }



    // Fetching a uniq random avatar from the robohash.org service.
    avatarUrl() {
        return '//robohash.org/1?set=set2&bgset=bg2&size=70x70';
    }

}
