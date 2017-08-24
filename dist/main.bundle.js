webpackJsonp([1,4],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], BookService);
    return BookService;
    var _a;
}());
//# sourceMappingURL=C:/Users/S5186398/Desktop/proyecto/angular2/mean-app/src/book.service.js.map

/***/ }),

/***/ 386:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 386;


/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(505);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/S5186398/Desktop/proyecto/angular2/mean-app/src/main.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(673),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/S5186398/Desktop/proyecto/angular2/mean-app/src/app.component.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_book_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__book_detail_book_detail_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__book_create_book_create_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__book_edit_book_edit_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chat_chat_component__ = __webpack_require__(510);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
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
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__book_service__["a" /* BookService */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* HashLocationStrategy */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/S5186398/Desktop/proyecto/angular2/mean-app/src/app.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_service__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookCreateComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-book-create',
            template: __webpack_require__(674),
            styles: [__webpack_require__(668)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], BookCreateComponent);
    return BookCreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/S5186398/Desktop/proyecto/angular2/mean-app/src/book-create.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_service__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-book-detail',
            template: __webpack_require__(675),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */]) === 'function' && _c) || Object])
    ], BookDetailComponent);
    return BookDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/S5186398/Desktop/proyecto/angular2/mean-app/src/book-detail.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_service__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookEditComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-book-edit',
            template: __webpack_require__(676),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], BookEditComponent);
    return BookEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/S5186398/Desktop/proyecto/angular2/mean-app/src/book-edit.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-book',
            template: __webpack_require__(677),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]) === 'function' && _a) || Object])
    ], BookComponent);
    return BookComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/S5186398/Desktop/proyecto/angular2/mean-app/src/book.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
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
    function ChatComponent() {
        this.joinned = false;
        this.newUser = { nickname: '', room: '' };
        this.msgData = { room: '', nickname: '', message: '' };
        this.chats = [{ 'id': 1, "description": "prueba" }, { 'id': 2, "description": "prueba2" }];
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    // Fetching a uniq random avatar from the robohash.org service.
    ChatComponent.prototype.avatarUrl = function () {
        return '//robohash.org/1?set=set2&bgset=bg2&size=70x70';
    };
    ChatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__(678),
            styles: [__webpack_require__(672)]
        }), 
        __metadata('design:paramtypes', [])
    ], ChatComponent);
    return ChatComponent;
}());
//# sourceMappingURL=C:/Users/S5186398/Desktop/proyecto/angular2/mean-app/src/chat.component.js.map

/***/ }),

/***/ 511:
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
//# sourceMappingURL=C:/Users/S5186398/Desktop/proyecto/angular2/mean-app/src/environment.js.map

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Book</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"saveBook()\" #bookForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">ISBN</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.isbn\" name=\"isbn\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Title</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.title\" name=\"title\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Author</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.author\" name=\"author\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Publisher</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.publisher\" name=\"publisher\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Price</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"book.price\" name=\"price\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!bookForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{ book.title }}</h1>\n  <dl class=\"list\">\n    <dt>ISBN</dt>\n    <dd>{{ book.isbn }}</dd>\n    <dt>Author</dt>\n    <dd>{{ book.author }}</dd>\n    <dt>Publisher</dt>\n    <dd>{{ book.publisher }}</dd>\n    <dt>Price</dt>\n    <dd>{{ book.price }}</dd>\n    <dt>Update Date</dt>\n    <dd>{{ book.updated_at }}</dd>\n  </dl>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <a [routerLink]=\"['/book-edit', book._id]\" class=\"btn btn-success\">EDIT</a>\n      <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteBook(book._id)\">DELETE</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Book</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"updateBook(book._id)\" #bookForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">ISBN</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.isbn\" name=\"isbn\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Title</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.title\" name=\"title\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Author</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.author\" name=\"author\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Publisher</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.publisher\" name=\"publisher\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Price</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"book.price\" name=\"price\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!bookForm.form.valid\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Book Catalogue\n    <a [routerLink]=\"['/book-create']\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n    </a>\n  </h1>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Title</th>\n        <th>Author</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let book of books\">\n        <td>{{ book.title }}</td>\n        <td>{{ book.author }}</td>\n        <td><a [routerLink]=\"['/book-details', book._id]\">Show Details</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<div>\n    <ul class=\"collection\">\n        <li class=\"collection-item avatar\" *ngFor=\"let chat of chats\">\n                   <img src=\"avatarUrl()\"  class=\"circle\">\n                   <span class=\"title\">#{{ chat.id }}</span>                \n                   <p>\n                       <i class=\"prefix mdi-action-alarm\"></i>\n                       <span class=\"message-date\">{{ chat.description }}</span>\n                       <br/>\n                   </p>\n                   \n       </li>\n    </ul>\n</div>"

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(387);


/***/ })

},[697]);
//# sourceMappingURL=main.bundle.map