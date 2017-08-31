webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<H1>PubNub Angular2 SDK Demo</H1>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Book Catalogue';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/S5186398/Desktop/curdo/curdo-app2/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_book_component__ = __webpack_require__("../../../../../src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_service__ = __webpack_require__("../../../../../src/app/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__book_detail_book_detail_component__ = __webpack_require__("../../../../../src/app/book-detail/book-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__book_create_book_create_component__ = __webpack_require__("../../../../../src/app/book-create/book-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__book_edit_book_edit_component__ = __webpack_require__("../../../../../src/app/book-edit/book-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var appRoutes = [
    { path: '', redirectTo: 'chat', pathMatch: 'full' },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_12__chat_chat_component__["a" /* ChatComponent */] },
    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_7__book_book_component__["a" /* BookComponent */] },
    { path: 'book-details/:id', component: __WEBPACK_IMPORTED_MODULE_9__book_detail_book_detail_component__["a" /* BookDetailComponent */] },
    { path: 'book-create', component: __WEBPACK_IMPORTED_MODULE_10__book_create_book_create_component__["a" /* BookCreateComponent */] },
    { path: 'book-edit/:id', component: __WEBPACK_IMPORTED_MODULE_11__book_edit_book_edit_component__["a" /* BookEditComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__book_book_component__["a" /* BookComponent */],
                __WEBPACK_IMPORTED_MODULE_9__book_detail_book_detail_component__["a" /* BookDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__book_create_book_create_component__["a" /* BookCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_11__book_edit_book_edit_component__["a" /* BookEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__chat_chat_component__["a" /* ChatComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__book_service__["a" /* BookService */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["c" /* HashLocationStrategy */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/S5186398/Desktop/curdo/curdo-app2/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/book-create/book-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book-create/book-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Add New Book</h1>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <form (ngSubmit)=\"saveBook()\" #bookForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">ISBN</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.isbn\" name=\"isbn\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Title</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.title\" name=\"title\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Author</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.author\" name=\"author\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Publisher</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.publisher\" name=\"publisher\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Price</label>\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"book.price\" name=\"price\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!bookForm.form.valid\">Save</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/book-create/book-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_service__ = __webpack_require__("../../../../../src/app/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookCreateComponent = (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-book-create',
            template: __webpack_require__("../../../../../src/app/book-create/book-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/book-create/book-create.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], BookCreateComponent);
    return BookCreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/S5186398/Desktop/curdo/curdo-app2/src/book-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/book-detail/book-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book-detail/book-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>{{ book.title }}</h1>\r\n  <dl class=\"list\">\r\n    <dt>ISBN</dt>\r\n    <dd>{{ book.isbn }}</dd>\r\n    <dt>Author</dt>\r\n    <dd>{{ book.author }}</dd>\r\n    <dt>Publisher</dt>\r\n    <dd>{{ book.publisher }}</dd>\r\n    <dt>Price</dt>\r\n    <dd>{{ book.price }}</dd>\r\n    <dt>Update Date</dt>\r\n    <dd>{{ book.updated_at }}</dd>\r\n  </dl>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <a [routerLink]=\"['/book-edit', book._id]\" class=\"btn btn-success\">EDIT</a>\r\n      <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteBook(book._id)\">DELETE</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/book-detail/book-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_service__ = __webpack_require__("../../../../../src/app/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookDetailComponent = (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-book-detail',
            template: __webpack_require__("../../../../../src/app/book-detail/book-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/book-detail/book-detail.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */]) === 'function' && _c) || Object])
    ], BookDetailComponent);
    return BookDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/S5186398/Desktop/curdo/curdo-app2/src/book-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/book-edit/book-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book-edit/book-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Edit Book</h1>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <form (ngSubmit)=\"updateBook(book._id)\" #bookForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">ISBN</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.isbn\" name=\"isbn\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Title</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.title\" name=\"title\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Author</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.author\" name=\"author\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Publisher</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.publisher\" name=\"publisher\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Price</label>\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"book.price\" name=\"price\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!bookForm.form.valid\">Update</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/book-edit/book-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_service__ = __webpack_require__("../../../../../src/app/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookEditComponent = (function () {
    function BookEditComponent(bookService, router, route) {
        this.bookService = bookService;
        this.router = router;
        this.route = route;
        this.book = {};
    }
    BookEditComponent.prototype.ngOnInit = function () {
        this.getBook(this.route.snapshot.params['id']);
    };
    BookEditComponent.prototype.getBook = function (id) {
        var _this = this;
        this.bookService.showBook(id).then(function (res) {
            _this.book = res;
            console.log(_this.book);
        }, function (err) {
            console.log(err);
        });
    };
    BookEditComponent.prototype.updateBook = function (id) {
        var _this = this;
        this.bookService.updateBook(id, this.book).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/book-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BookEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-book-edit',
            template: __webpack_require__("../../../../../src/app/book-edit/book-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/book-edit/book-edit.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], BookEditComponent);
    return BookEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/S5186398/Desktop/curdo/curdo-app2/src/book-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookService = (function () {
    function BookService(http) {
        this.http = http;
    }
    BookService.prototype.getAllBooks = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/book')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    BookService.prototype.showBook = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/book/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    BookService.prototype.saveBook = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/book', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    BookService.prototype.updateBook = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put('/book/' + id, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    BookService.prototype.deleteBook = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('/book/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    BookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], BookService);
    return BookService;
    var _a;
}());
//# sourceMappingURL=C:/Users/S5186398/Desktop/curdo/curdo-app2/src/book.service.js.map

/***/ }),

/***/ "../../../../../src/app/book/book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Book Catalogue\r\n    <a [routerLink]=\"['/book-create']\" class=\"btn btn-default btn-lg\">\r\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n    </a>\r\n  </h1>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>Title</th>\r\n        <th>Author</th>\r\n        <th>Action</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let book of books\">\r\n        <td>{{ book.title }}</td>\r\n        <td>{{ book.author }}</td>\r\n        <td><a [routerLink]=\"['/book-details', book._id]\">Show Details</a></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__("../../../../../src/app/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookComponent = (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-book',
            template: __webpack_require__("../../../../../src/app/book/book.component.html"),
            styles: [__webpack_require__("../../../../../src/app/book/book.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]) === 'function' && _a) || Object])
    ], BookComponent);
    return BookComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/S5186398/Desktop/curdo/curdo-app2/src/book.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <div class=\"firstSubChild contain\">\r\n        <div class=\"header\">\r\n            <h2>Messages</h2>\r\n            <div class=\"chat-box\">   \r\n                <div class=\"message-box\">\r\n                    <div>\r\n                        <ul id=\"messages\" class=\"message\"></ul>\r\n                        <ul class=\"collection\">\r\n                            <li class=\"collection-item avatar\" *ngFor=\"let item of messages\">\r\n                                <img src=\"//robohash.org/{{ item.message.id }}?set=set2&bgset=bg2&size=70x70\"  class=\"circle\">\r\n                                <span class=\"title\">#{{ item.message.id }}</span>                \r\n                                <p>\r\n                                    <i class=\"prefix mdi-action-alarm\"></i>\r\n                                    <span class=\"message-date\">{{item.message.date | date: 'dd/MM/yyyy'}}:{{ item.message.text }}</span>\r\n                                    <br/>\r\n                                </p>        \r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"enter-message\">\r\n                        <input id=\"message-boxID\" #messagebox placeholder=\"Type your message here\" (keyup)=\"actionOnEnter($event, messagebox)\"  (keydown)=\"update()\" autocomplete=\"off\" value=\"\" autofocus required>\r\n                        <button class=\"send\" (click)=\"action(messagebox)\" >Send</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"secondSubChild\">\r\n        <div class=user-alert>\r\n            <div id=\"newUserID\" *ngIf=\"newUser\">\r\n                {{newUserName}} joined Chat!\r\n            </div>\r\n            <div id=\"leftUserID\" *ngIf=\"exitedUser\">\r\n                {{exitedUserName}} left the Chat!\r\n            </div>\r\n        </div>\r\n        <div class=\"caption\">\r\n            <h2>Connected Users</h2>\r\n        </div>\r\n        <div class=\"user-list\">\r\n            <ul class=\"user-list-ul\">\r\n                <li *ngFor=\"let name of clientsNameList\" class=\"user-list__item\">\r\n                    <div>\r\n                        <input class=\"check-box\" type=\"checkbox\" [checked]=\"true\" disabled>\r\n                    </div>\r\n                    <div class=\"user-list__content\">\r\n                        <div class=\"user-list__name\">\r\n                            <div class=\"text text_size_m\">{{name}}</div>\r\n                        </div>\r\n                    </div>                \r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div id=\"resID\" *ngIf=\"resFlag\">\r\n            this is the server response : {{response}}\r\n        </div>     \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pubnub_angular2__ = __webpack_require__("../../../../pubnub-angular2/lib/pubnub-angular2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pubnub_angular2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pubnub_angular2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = (function () {
    function ChatComponent(pubnub) {
        this.resFlag = false;
        this.newUser = false;
        this.exitedUser = false;
        this.newUserName = null;
        this.exitedUserName = null;
        this.sentMessageUsername = null;
        this.msgCount = 0;
        var reference = this;
        var temp;
        var user = 'web-client_' + new Date();
        this.chats = [{ 'id': 1, "description": "prueba" }, { 'id': 2, "description": "prueba2" }];
        this.messages = [];
        this.messages.push({ "id": 1, "text": "Tony Garcixa", "date": new Date() });
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
        this.messages = this.pubnub.getMessage(this.channel, function (msg) {
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
                var uuids = p.uuids; // UUIDs of users who are connected with the channel with their state
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
    ChatComponent.prototype.ngOnInit = function () {
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
    };
    ChatComponent.prototype.action = function (data) {
        console.log(data);
        this.resFlag = true;
        var reference = this;
        console.log("function called");
        this.pubnub.publish({
            channel: this.channel,
            message: {
                "id": 1,
                "text": data.value,
                "date": new Date()
            }
        }, function (status, response) {
            if (status.error) {
                console.log(status);
            }
            else {
                console.log('message Published w/ timetoken', response.timetoken);
                $("#message-boxID").val(" ");
            }
        });
        /*  var m = this.pubnub.getMessage(this.channel, function(msg) {
              console.log(msg);
              this.arreglo.unshift(msg.message);
          });
  
         console.log(m);*/
    };
    ChatComponent.prototype.actionOnEnter = function ($event, messagebox) {
        if ($event.which === 13) {
            this.action(messagebox);
        }
    };
    ChatComponent.prototype.update = function () {
        console.log("DD");
        this.resFlag = false;
        this.newUser = false;
        this.exitedUser = false;
    };
    // Fetching a uniq random avatar from the robohash.org service.
    ChatComponent.prototype.avatarUrl = function () {
        return '//robohash.org/1?set=set2&bgset=bg2&size=70x70';
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1_pubnub_angular2__["PubNubAngular"]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_pubnub_angular2__["PubNubAngular"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_pubnub_angular2__["PubNubAngular"]) === 'function' && _a) || Object])
    ], ChatComponent);
    return ChatComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/S5186398/Desktop/curdo/curdo-app2/src/chat.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/S5186398/Desktop/curdo/curdo-app2/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_28" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/S5186398/Desktop/curdo/curdo-app2/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map