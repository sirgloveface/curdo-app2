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
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
export var BookDetailComponent = (function () {
    function BookDetailComponent(route, router, bookService) {
        this.route = route;
        this.router = router;
        this.bookService = bookService;
        this.book = {};
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        this.getBookDetail(this.route.snapshot.params['id']);
    };
    BookDetailComponent.prototype.getBookDetail = function (id) {
        var _this = this;
        this.bookService.showBook(id).then(function (res) {
            _this.book = res;
            console.log(_this.book);
        }, function (err) {
            console.log(err);
        });
    };
    BookDetailComponent.prototype.deleteBook = function (id) {
        var _this = this;
        this.bookService.deleteBook(id).then(function (result) {
            _this.router.navigate(['/books']);
        }, function (err) {
            console.log(err);
        });
    };
    BookDetailComponent = __decorate([
        Component({
            selector: 'app-book-detail',
            templateUrl: './book-detail.component.html',
            styleUrls: ['./book-detail.component.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, Router, BookService])
    ], BookDetailComponent);
    return BookDetailComponent;
}());
//# sourceMappingURL=/home/tony/Desktop/curdoApi/curdo-app2/src/app/book-detail/book-detail.component.js.map