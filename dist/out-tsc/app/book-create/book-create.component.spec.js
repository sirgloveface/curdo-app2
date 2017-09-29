import { async, TestBed } from '@angular/core/testing';
import { BookCreateComponent } from './book-create.component';
describe('BookCreateComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BookCreateComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BookCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/tony/Desktop/curdoApi/curdo-app2/src/app/book-create/book-create.component.spec.js.map