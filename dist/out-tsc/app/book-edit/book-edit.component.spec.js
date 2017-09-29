import { async, TestBed } from '@angular/core/testing';
import { BookEditComponent } from './book-edit.component';
describe('BookEditComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BookEditComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BookEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/tony/Desktop/curdoApi/curdo-app2/src/app/book-edit/book-edit.component.spec.js.map