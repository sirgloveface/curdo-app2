import { async, TestBed } from '@angular/core/testing';
import { BookComponent } from './book.component';
describe('BookComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BookComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BookComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/tony/Desktop/curdoApi/curdo-app2/src/app/book/book.component.spec.js.map