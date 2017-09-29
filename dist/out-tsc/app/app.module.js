var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookService } from './book.service';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { ChatComponent } from './chat/chat.component';
export var appRoutes = [
    { path: '', redirectTo: 'chat', pathMatch: 'full' },
    { path: 'chat', component: ChatComponent },
    { path: 'books', component: BookComponent },
    { path: 'book-details/:id', component: BookDetailComponent },
    { path: 'book-create', component: BookCreateComponent },
    { path: 'book-edit/:id', component: BookEditComponent }
];
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                BookComponent,
                BookDetailComponent,
                BookCreateComponent,
                BookEditComponent,
                ChatComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                RouterModule.forRoot(appRoutes)
            ],
            providers: [
                BookService,
                { provide: LocationStrategy, useClass: HashLocationStrategy }
            ],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/tony/Desktop/curdoApi/curdo-app2/src/app/app.module.js.map