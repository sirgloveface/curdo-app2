import { async, TestBed } from '@angular/core/testing';
import { ChatComponent } from './chat.component';
describe('ChatComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ChatComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ChatComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/tony/Desktop/curdoApi/curdo-app2/src/app/chat/chat.component.spec.js.map