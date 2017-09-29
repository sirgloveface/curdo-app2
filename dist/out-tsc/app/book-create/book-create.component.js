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
import { Router } from '@angular/router';
import { BookService } from '../book.service';
export var BookCreateComponent = (function () {
    function BookCreateComponent(bookService, router) {
        this.bookService = bookService;
        this.router = router;
        this.book = {};
    }
    BookCreateComponent.prototype.ngOnInit = function () {
    };
    BookCreateComponent.prototype.saveBook = function () {
        var _this = this;
        this.bookService.saveBook(this.book).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/book-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BookCreateComponent = __decorate([
        Component({
            selector: 'app-book-create',
            templateUrl: './book-create.component.html',
            styleUrls: ['./book-create.component.css']
        }), 
        __metadata('design:paramtypes', [BookService, Router])
    ], BookCreateComponent);
    return BookCreateComponent;
}());
//# sourceMappingURL=/home/tony/Desktop/curdoApi/curdo-app2/src/app/book-create/book-create.component.js.map