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
import { BookService } from '../book.service';
export var BookComponent = (function () {
    function BookComponent(bookService) {
        this.bookService = bookService;
    }
    BookComponent.prototype.ngOnInit = function () {
        this.getBookList();
    };
    BookComponent.prototype.getBookList = function () {
        var _this = this;
        this.bookService.getAllBooks().then(function (res) {
            _this.books = res;
            console.log(_this.books);
        }, function (err) {
            console.log(err);
        });
    };
    BookComponent = __decorate([
        Component({
            selector: 'app-book',
            templateUrl: './book.component.html',
            styleUrls: ['./book.component.css']
        }), 
        __metadata('design:paramtypes', [BookService])
    ], BookComponent);
    return BookComponent;
}());
//# sourceMappingURL=/home/tony/Desktop/curdoApi/curdo-app2/src/app/book/book.component.js.map