var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
export var ChatComponent = (function () {
    function ChatComponent(pubnub) {
        this.resFlag = false;
        this.newUser = false;
        this.exitedUser = false;
        this.newUserName = null;
        this.exitedUserName = null;
        this.sentMessageUsername = null;
        this.msgCount = 0;
        this.temperature = 0.0;
        var reference = this;
        var temp;
        var user = 'web-client_' + new Date();
        this.chats = [{ 'id': 1, "description": "prueba" }, { 'id': 2, "description": "prueba2" }];
        this.messages = [];
        this.channel = 'conect-arduino';
        this.pubnub = pubnub;
        this.pubnub.init({
            publishKey: 'pub-c-24150dba-a538-4de7-af26-643500dd957d',
            subscribeKey: 'sub-c-af6ff0d2-6a8d-11e7-9bf2-0619f8945a4f',
            uuid: user,
            ssl: true
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
        this.pubnub.subscribe({
            channels: [this.channel],
            withPresence: true,
            triggerEvents: ['message', 'presence', 'status'],
            uuid: user,
            heartbeatInterval: 30 // the frequency of ping from client to server
        });
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
                var uuids = p.uuids; // UUIDs of users who are connected with the channel with their state
                var occupancy = p.occupancy; // No. of users connected with the channel
                console.log("presence");
                console.log(p);
                this.response = "Conectado" + uuids;
                this.resFlag = true;
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
        this.messages = this.pubnub.getMessage(this.channel, function (msg) {
            console.log(msg);
        });
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.action = function (data) {
        console.log(data.value);
        this.resFlag = true;
        var reference = this;
        this.pubnub.publish({
            channel: this.channel,
            message: {
                "id": 2,
                "text": data.value,
                "date": new Date(),
                "tweet": data.value
            }
        }, function (status, response) {
            if (status.error) {
                console.log(status);
            }
            else {
                // console.log('message Published w/ timetoken', response.timetoken);
                $("#message-boxID").val(" ");
            }
        });
    };
    ChatComponent.prototype.actionOnEnter = function ($event, messagebox) {
        if ($event.which === 13) {
            this.action(messagebox);
        }
    };
    ChatComponent.prototype.update = function () {
        this.resFlag = false;
        this.newUser = false;
        this.exitedUser = false;
    };
    // Fetching a uniq random avatar from the robohash.org service.
    ChatComponent.prototype.avatarUrl = function () {
        return '//robohash.org/1?set=set2&bgset=bg2&size=70x70';
    };
    ChatComponent = __decorate([
        Component({
            selector: 'app-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.css'],
            providers: [PubNubAngular]
        }), 
        __metadata('design:paramtypes', [PubNubAngular])
    ], ChatComponent);
    return ChatComponent;
}());
//# sourceMappingURL=/home/tony/Desktop/curdoApi/curdo-app2/src/app/chat/chat.component.js.map