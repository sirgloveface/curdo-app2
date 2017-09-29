import { async, TestBed } from '@angular/core/testing';
import { BookDetailComponent } from './book-detail.component';
describe('BookDetailComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BookDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BookDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/tony/Desktop/curdoApi/curdo-app2/src/app/book-detail/book-detail.component.spec.js.map