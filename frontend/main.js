(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog-create/blog-create.component */ "./src/app/blog-create/blog-create.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _blog_update_blog_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog-update/blog-update.component */ "./src/app/blog-update/blog-update.component.ts");
/* harmony import */ var _session_expired_session_expired_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./session-expired/session-expired.component */ "./src/app/session-expired/session-expired.component.ts");
/* harmony import */ var _sharedFolder_guards_loginRequired_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sharedFolder/guards/loginRequired.guard */ "./src/app/sharedFolder/guards/loginRequired.guard.ts");












var routes = [
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: "register",
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: "home",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: "blogs",
        canActivate: [_sharedFolder_guards_loginRequired_guard__WEBPACK_IMPORTED_MODULE_11__["LoginRequiredGuard"]],
        component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"]
    },
    {
        path: "blogs/create",
        canActivate: [_sharedFolder_guards_loginRequired_guard__WEBPACK_IMPORTED_MODULE_11__["LoginRequiredGuard"]],
        component: _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_7__["BlogCreateComponent"]
    },
    {
        path: "blogs/update/:blogId",
        canActivate: [_sharedFolder_guards_loginRequired_guard__WEBPACK_IMPORTED_MODULE_11__["LoginRequiredGuard"]],
        component: _blog_update_blog_update_component__WEBPACK_IMPORTED_MODULE_9__["BlogUpdateComponent"]
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "home"
    },
    {
        path: "logout",
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"]
    },
    {
        path: "session-expired",
        component: _session_expired_session_expired_component__WEBPACK_IMPORTED_MODULE_10__["SessionExpiredComponent"]
    },
    {
        path: "**",
        redirectTo: "home"
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Manish';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog-create/blog-create.component */ "./src/app/blog-create/blog-create.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");
/* harmony import */ var _blog_update_blog_update_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blog-update/blog-update.component */ "./src/app/blog-update/blog-update.component.ts");
/* harmony import */ var _session_expired_session_expired_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./session-expired/session-expired.component */ "./src/app/session-expired/session-expired.component.ts");
/* harmony import */ var _sharedFolder_guards_loginRequired_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sharedFolder/guards/loginRequired.guard */ "./src/app/sharedFolder/guards/loginRequired.guard.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"],
                _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_9__["BlogCreateComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"],
                _blog_update_blog_update_component__WEBPACK_IMPORTED_MODULE_13__["BlogUpdateComponent"],
                _session_expired_session_expired_component__WEBPACK_IMPORTED_MODULE_14__["SessionExpiredComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                angular_web_storage__WEBPACK_IMPORTED_MODULE_12__["AngularWebStorageModule"]
            ],
            providers: [_sharedFolder_guards_loginRequired_guard__WEBPACK_IMPORTED_MODULE_15__["LoginRequiredGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog-create/blog-create.component.css":
/*!*******************************************************!*\
  !*** ./src/app/blog-create/blog-create.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-blog {\r\n    height: 100vh;\r\n    background: azure;\r\n}\r\n\r\n.blogCreate-form {\r\n    padding-top: 20%;\r\n    margin-left: 18%;\r\n    width: 700px;\r\n}\r\n\r\nform .ng-invalid.ng-touched {\r\n    border: 2px solid salmon;;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy1jcmVhdGUvYmxvZy1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9ibG9nLWNyZWF0ZS9ibG9nLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWF0ZS1ibG9nIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiBhenVyZTtcclxufVxyXG5cclxuLmJsb2dDcmVhdGUtZm9ybSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4JTtcclxuICAgIHdpZHRoOiA3MDBweDtcclxufVxyXG5cclxuZm9ybSAubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHNhbG1vbjs7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/blog-create/blog-create.component.html":
/*!********************************************************!*\
  !*** ./src/app/blog-create/blog-create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"create-blog\">\n  <div class=\"container\">\n    <form #form=\"ngForm\" class=\"blogCreate-form\">\n      <div class=\"form-group row\">\n        <label for=\"Title\" class=\"col-sm-2 col-form-label\">Title :</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" ngModel class=\"form-control\" id=\"Title\" placeholder=\"Title\" name=\"title\" required>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"content\" class=\"col-sm-2 col-form-label\">Content :</label>\n        <div class=\"col-sm-10\">\n          <textarea type=\"text\" ngModel class=\"form-control\" id=\"content\" placeholder=\"content\" name=\"content\" required\n            rows=\"5\">\n          </textarea>\n        </div>\n      </div>\n      <button class=\"btn btn-primary\" style=\"margin-left:50%\" (click)=\"onCreate(form); form.reset();\"\n        [disabled]=\"form.invalid\">create</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/blog-create/blog-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/blog-create/blog-create.component.ts ***!
  \******************************************************/
/*! exports provided: BlogCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogCreateComponent", function() { return BlogCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sharedFolder_services_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharedFolder/services/notify.service */ "./src/app/sharedFolder/services/notify.service.ts");





var BlogCreateComponent = /** @class */ (function () {
    function BlogCreateComponent(sessionService, router, notifyService) {
        this.sessionService = sessionService;
        this.router = router;
        this.notifyService = notifyService;
    }
    BlogCreateComponent.prototype.ngOnInit = function () {
    };
    BlogCreateComponent.prototype.onCreate = function (form) {
        var _this = this;
        var body = {
            "title": form.value.title,
            content: form.value.content
        };
        var token = this.sessionService.get("token");
        fetch("http://localhost:3000/api/blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            },
            body: JSON.stringify(body)
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (responseData) {
            if (responseData.success) {
                console.log('responseData.message :', responseData.message);
                _this.notifyService.notificationMessage(responseData.message, 'success');
                _this.router.navigate(["blogs"]);
            }
            else {
                if (responseData.statusCode === 401) {
                    _this.router.navigate(["session-expired"]);
                }
                _this.notifyService.notificationMessage(responseData.message, 'danger');
            }
        })
            .catch(function (error) {
            _this.notifyService.notificationMessage("Error", 'danger');
        });
    };
    BlogCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-create',
            template: __webpack_require__(/*! ./blog-create.component.html */ "./src/app/blog-create/blog-create.component.html"),
            styles: [__webpack_require__(/*! ./blog-create.component.css */ "./src/app/blog-create/blog-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_web_storage__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _sharedFolder_services_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"]])
    ], BlogCreateComponent);
    return BlogCreateComponent;
}());



/***/ }),

/***/ "./src/app/blog-update/blog-update.component.css":
/*!*******************************************************!*\
  !*** ./src/app/blog-update/blog-update.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".update-blog {\r\n    height: 100vh;\r\n    background: azure;\r\n}\r\n\r\n.blogUpdate-form {\r\n    padding-top: 15%;\r\n    margin-left: 18%;\r\n    width: 700px;\r\n}\r\n\r\nform .ng-invalid.ng-touched {\r\n    border: 2px solid salmon;;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy11cGRhdGUvYmxvZy11cGRhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9ibG9nLXVwZGF0ZS9ibG9nLXVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwZGF0ZS1ibG9nIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiBhenVyZTtcclxufVxyXG5cclxuLmJsb2dVcGRhdGUtZm9ybSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4JTtcclxuICAgIHdpZHRoOiA3MDBweDtcclxufVxyXG5cclxuZm9ybSAubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHNhbG1vbjs7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/blog-update/blog-update.component.html":
/*!********************************************************!*\
  !*** ./src/app/blog-update/blog-update.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"update-blog\">\n  <div class=\"container\">\n    <form #form=\"ngForm\" class=\"blogUpdate-form\">\n      <div class=\"form-group row\">\n        <label for=\"Title\" class=\"col-sm-2 col-form-label\">Title</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" [(ngModel)]=\"blogDetails.title\" class=\"form-control\" id=\"Title\" placeholder=\"Title\"\n            name=\"title\" required>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"content\" class=\"col-sm-2 col-form-label\">Content</label>\n        <div class=\"col-sm-10\">\n          <textarea type=\"text\" [(ngModel)]=\"blogDetails.content\" class=\"form-control\" id=\"content\"\n            placeholder=\"content\" name=\"content\" required rows=\"5\">\n          </textarea>\n        </div>\n      </div>\n      <button class=\"btn btn-primary\" style=\"margin-left:50%\" (click)=\"onUpdate(form); form.reset();\"\n        [disabled]=\"form.invalid\">update</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/blog-update/blog-update.component.ts":
/*!******************************************************!*\
  !*** ./src/app/blog-update/blog-update.component.ts ***!
  \******************************************************/
/*! exports provided: BlogUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogUpdateComponent", function() { return BlogUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sharedFolder_services_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharedFolder/services/notify.service */ "./src/app/sharedFolder/services/notify.service.ts");





var BlogUpdateComponent = /** @class */ (function () {
    function BlogUpdateComponent(sessionService, route, notifyService, router) {
        this.sessionService = sessionService;
        this.route = route;
        this.notifyService = notifyService;
        this.router = router;
        this.blogDetails = {};
    }
    BlogUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.blogId = params.blogId;
            _this.getBlogDetail();
        });
    };
    BlogUpdateComponent.prototype.getBlogDetail = function () {
        var _this = this;
        fetch("http://localhost:3000/api/blog/" + this.blogId)
            .then(function (response) {
            return response.json();
        })
            .then(function (responseData) {
            if (responseData.success) {
                _this.blogDetails = responseData.data;
            }
            else {
                _this.notifyService.notificationMessage(responseData.message, 'danger');
            }
        })
            .catch(function (error) {
            _this.notifyService.notificationMessage('Error', 'danger');
        });
    };
    BlogUpdateComponent.prototype.onUpdate = function (form) {
        var _this = this;
        var body = {
            title: form.value.title,
            content: form.value.content
        };
        var token = this.sessionService.get('token');
        fetch("http://localhost:3000/api/blog/" + this.blogId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            },
            body: JSON.stringify(body)
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (responseData) {
            if (responseData.success) {
                _this.notifyService.notificationMessage(responseData.message, 'success');
                _this.router.navigate(["blogs"]);
            }
            else {
                _this.notifyService.notificationMessage(responseData.message, 'danger');
            }
        })
            .catch(function (error) {
            _this.notifyService.notificationMessage('Error', 'danger');
        });
    };
    BlogUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-update',
            template: __webpack_require__(/*! ./blog-update.component.html */ "./src/app/blog-update/blog-update.component.html"),
            styles: [__webpack_require__(/*! ./blog-update.component.css */ "./src/app/blog-update/blog-update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_web_storage__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _sharedFolder_services_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BlogUpdateComponent);
    return BlogUpdateComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-box {\r\n    padding-left: 85%;\r\n}\r\n.top-box .top-row {\r\n    margin: 15px 8px;\r\n    display: inline;\r\n}\r\n.toogler {\r\n    float: right;\r\n}\r\n.btn {\r\n    margin-left: 5%;\r\n    color: white;\r\n}\r\n.content-box .content-row {\r\n    margin: 15px 8px;\r\n    display: inline;\r\n}\r\n.content-box {\r\n    text-align: center;\r\n    padding: 25px;\r\n    border: 1px solid black;\r\n    margin: 20px;\r\n    background: aliceblue;\r\n    color: black;\r\n    border-radius: 8px;\r\n    box-shadow: 1px 1px;\r\n}\r\n.main-box{\r\n    background-color: #3fc1c0;\r\n    height: 100%;\r\n}\r\n.content-box h4 {\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.content-box p {\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7QUFFQTtJQUNJLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1ib3gge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4NSU7XHJcbn1cclxuLnRvcC1ib3ggLnRvcC1yb3cge1xyXG4gICAgbWFyZ2luOiAxNXB4IDhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLnRvb2dsZXIge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbnRlbnQtYm94IC5jb250ZW50LXJvdyB7XHJcbiAgICBtYXJnaW46IDE1cHggOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4uY29udGVudC1ib3gge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweDtcclxufVxyXG5cclxuLm1haW4tYm94e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmYzFjMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQtYm94IGg0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250ZW50LWJveCBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-box\">\n  <button class=\"btn btn-success top-row\" routerLink=\"create\">create-blog</button>\n  <button class=\"btn btn-primary top-row\" routerLink=\"/logout\">logout</button>\n</div>\n<div *ngFor=\"let item of blogs\">\n  <div class=\"content-box\">\n    <div class=\"dropdown toogler\">\n      <i class=\"material-icons pl-4 text_align-center visible-on-sidebar-regular\" style=\"cursor: pointer;\"\n        data-toggle=\"dropdown\">more_vert</i>\n      <ul class=\"dropdown-menu dropdown-menu-right\">\n        <li class=\"action\">\n          <button class=\"btn btn-warning btn-sm mb-2\" (click)=\"onUpdate(item._id)\">Update</button>\n        </li>\n        <li class=\"action\">\n          <button class=\"btn btn-danger btn-sm\" (click)=\"onDelete(item._id)\">delete</button>\n        </li>\n      </ul>\n    </div>\n    <h4>Title : {{ item.title }}</h4>\n    <p>{{ item.content }}</p>\n  </div>\n</div>\n<p *ngIf=\"blogs.length==0\">{{ message }}</p>"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");
/* harmony import */ var _sharedFolder_services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedFolder/services/notify.service */ "./src/app/sharedFolder/services/notify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var BlogComponent = /** @class */ (function () {
    function BlogComponent(sessionService, notifyService, router) {
        this.sessionService = sessionService;
        this.notifyService = notifyService;
        this.router = router;
        this.blogs = [];
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.getBlogsByUserName();
    };
    BlogComponent.prototype.getBlogsByUserName = function () {
        var _this = this;
        this.email = this.sessionService.get("email");
        fetch("http://localhost:3000/api/blogs/" + this.email)
            .then(function (response) {
            return response.json();
        })
            .then(function (responseData) {
            if (responseData.success) {
                _this.blogs = responseData.data;
                //this.notifyService.notificationMessage(responseData.message, 'success');
                _this.message = _this.blogs.length == 0 ? "No blogs found" : "";
            }
            else {
                _this.notifyService.notificationMessage(responseData.message, 'danger');
            }
        })
            .catch(function (error) {
            _this.notifyService.notificationMessage("Error", 'danger');
            console.log('getBlogsByUserName() error :', error);
        });
    };
    BlogComponent.prototype.onDelete = function (blogId) {
        var _this = this;
        var token = this.sessionService.get('token');
        fetch("http://localhost:3000/api/blog/" + blogId, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (responseData) {
            if (responseData.success) {
                _this.notifyService.notificationMessage(responseData.message, 'success');
                _this.getBlogsByUserName();
            }
            else {
                _this.notifyService.notificationMessage(responseData.message, 'danger');
            }
        })
            .catch(function (error) {
            _this.notifyService.notificationMessage("Error", 'danger');
            console.log('onDelete() error :', error);
        });
    };
    BlogComponent.prototype.onUpdate = function (blogId) {
        this.router.navigate(['blogs', 'update', blogId]);
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_web_storage__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"], _sharedFolder_services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-box {\r\n    padding-left: 61%;\r\n}\r\n.top-box .top-row {\r\n    margin: 15px 8px;\r\n    display: inline;\r\n}\r\n.content-box {\r\n    text-align: center;\r\n    padding: 25px;\r\n    border: 1px solid black;\r\n    margin: 20px;\r\n    background: aliceblue;\r\n    color: black;\r\n    border-radius: 8px;\r\n    box-shadow: 1px 1px;\r\n}\r\n.main-box {\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n.content-box h5 {\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.content-box p {\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7QUFFQTtJQUNJLHFDQUFxQztBQUN6QztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1ib3gge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2MSU7XHJcbn1cclxuLnRvcC1ib3ggLnRvcC1yb3cge1xyXG4gICAgbWFyZ2luOiAxNXB4IDhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLmNvbnRlbnQtYm94IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHg7XHJcbn1cclxuXHJcbi5tYWluLWJveCB7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250ZW50LWJveCBoNSB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY29udGVudC1ib3ggcCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-box\">\n  <div class=\"top-box\">\n    <button class=\"btn btn-primary top-row\" routerLink=\"/login\">login</button>\n    <button class=\"btn btn-dark top-row\" routerLink=\"/register\">register</button>\n    <input class=\" form-control top-row\" [(ngModel)]=\"searchValue\" style=\"width:300px\" type=\"text\" name=\"search\"\n      placeholder=\"search by name\">\n    <button class=\"btn btn-success top-row\" (click)=\"onSearch()\">search</button>\n  </div>\n\n  <div *ngFor=\"let item of blogs\">\n    <div class=\"content-box\">\n      <h5>Title : {{ item.title }}</h5>\n      <h6>{{ item.content }}</h6>\n      <p>Written By : {{ item.createdBy.email }}</p>\n    </div>\n  </div>\n  <p *ngIf=\"blogs.length==0\">{{ message }}</p>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sharedFolder_services_notify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharedFolder/services/notify.service */ "./src/app/sharedFolder/services/notify.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(notifyService) {
        this.notifyService = notifyService;
        this.blogs = [];
        this.searchValue = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getAllBlogs();
    };
    HomeComponent.prototype.getAllBlogs = function () {
        var _this = this;
        fetch("http://localhost:3000/api/blogs")
            .then(function (response) {
            return response.json();
        })
            .then(function (responseData) {
            if (responseData.success) {
                _this.blogs = responseData.data;
                _this.message = _this.blogs.length == 0 ? "No blogs." : "";
                // this.notifyService.notificationMessage(responseData.message, 'success');
            }
            else {
                _this.notifyService.notificationMessage(responseData.message, 'danger');
            }
        })
            .catch(function (error) {
            _this.notifyService.notificationMessage("Error", 'danger');
        });
    };
    HomeComponent.prototype.onSearch = function () {
        var searchValue = this.searchValue;
        if (searchValue === undefined || searchValue === null || searchValue.trim() === "") {
            this.getAllBlogs();
        }
        else {
            this.getByUser(searchValue);
        }
    };
    HomeComponent.prototype.getByUser = function (searchValue) {
        var _this = this;
        fetch("http://localhost:3000/api/blogs/" + searchValue)
            .then(function (response) {
            return response.json();
        })
            .then(function (responseData) {
            if (responseData.success) {
                _this.blogs = responseData.data;
                _this.message = _this.blogs.length == 0 ? "No blogs." : "";
                // this.notifyService.notificationMessage(responseData.message, 'success');
            }
            else {
                _this.notifyService.notificationMessage(responseData.message, 'danger');
            }
        })
            .catch(function (error) {
            _this.notifyService.notificationMessage("Error", 'danger');
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sharedFolder_services_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n    color: #ffff;\r\n    font-size: 18px;\r\n}\r\n\r\n.login-box {\r\n    width: 320px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n\r\n.login-box .icon {\r\n    float: left;\r\n    color: white;\r\n    padding: 5px;\r\n}\r\n\r\n.login-box .button {\r\n    width: 100%;\r\n    padding: 5px;\r\n    font-size: 18px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.login-box h1 {\r\n    border-bottom: 5px solid white;\r\n    width: 35%;\r\n    color: #fff;\r\n    margin-bottom: 18px;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.main-box{\r\n    background-color: #3fc1c0;\r\n    height: 100vh;\r\n}\r\n\r\nform .ng-invalid.ng-touched {\r\n    border: 2px solid salmon;;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5sb2dpbi1ib3gge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG59XHJcblxyXG4ubG9naW4tYm94IC5pY29uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ubG9naW4tYm94IC5idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubG9naW4tYm94IGgxIHtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubWFpbi1ib3h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZjMWMwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuZm9ybSAubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHNhbG1vbjs7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-box\">\n  <div class=\"container\">\n    <div class=\"login-box\">\n      <h1>Login</h1>\n      <form #form=\"ngForm\">\n        <div class=\"form-group\">\n          <div class=\"text-box\">\n            <i class=\"fas fa-envelope icon fa-1x\"></i><label for=\"email\">Email</label>\n            <input type=\"text\" class=\"form-control\" ngModel placeholder=\"Email\" id=\"email\" name=\"email\" required\n              #emailController=\"ngModel\" pattern=\"^[a-z0-9](\\.?[a-z0-9]){5,}@gmail\\.com$\">\n            <p style=\"color: red;\" *ngIf=\"emailController.errors?.required && emailController.touched\">Email is required\n            </p>\n            <p style=\"color: red;\"\n              *ngIf=\"!emailController.errors?.required && emailController.errors?.pattern && emailController.touched\">\n              Please enter valid\n              Email address</p>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"text-box\">\n            <i class=\"fas fa-key icon fa-1x\"></i><label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" ngModel placeholder=\"Password\" id=\"password\" name=\"password\"\n              required #passwordController=\"ngModel\">\n            <p style=\"color: red;\" *ngIf=\"passwordController.invalid && passwordController.touched\">Password is\n              required</p>\n          </div>\n        </div>\n        <button class=\"btn btn-success button\" (click)=\"login(form); form.reset();\"\n          [disabled]=\"form.invalid\">sign-in</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");
/* harmony import */ var _sharedFolder_services_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharedFolder/services/notify.service */ "./src/app/sharedFolder/services/notify.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, sessionStorage, notifyService) {
        this.router = router;
        this.sessionStorage = sessionStorage;
        this.notifyService = notifyService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        var email = form.value.email;
        var password = form.value.password;
        var body = {
            email: email, password: password
        };
        fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (responseData) {
            if (responseData.success) {
                _this.notifyService.notificationMessage(responseData.message, 'success');
                _this.sessionStorage.set('token', responseData.token, 1, 'h');
                _this.sessionStorage.set('email', email, 1, 'h');
                _this.router.navigate(["blogs"]);
            }
            else {
                _this.notifyService.notificationMessage(responseData.message, 'danger');
                _this.router.navigate(["register"]);
            }
        })
            .catch(function (error) {
            _this.notifyService.notificationMessage("Error", 'danger');
            console.log('error :', error);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angular_web_storage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"], _sharedFolder_services_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logout {\r\n    padding-top: 20%;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvdXQge1xyXG4gICAgcGFkZGluZy10b3A6IDIwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logout\">\n    <h3>{{ logoutMessage }}</h3>\n    <br>\n    <h5>{{ login }}</h5>\n    <br>\n    <button class=\"btn btn-primary\" routerLink=\"/login\">login</button>\n</div>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(session) {
        this.session = session;
        this.logoutMessage = "You are successfully logged out";
        this.login = "click here to login";
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.session.clear();
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_web_storage__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n    color: #ffff;\r\n    font-size: 18px;\r\n}\r\n\r\n.login-box {\r\n    width: 350px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n\r\n.login-box .icon {\r\n    float: left;\r\n    color: white;\r\n    padding: 5px;\r\n}\r\n\r\n.login-box .button {\r\n    width: 100%;\r\n    padding: 5px;\r\n    font-size: 18px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.login-box h1 {\r\n    border-bottom: 5px solid white;\r\n    width: 50%;\r\n    color: #fff;\r\n    margin-bottom: 18px;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.main-box{\r\n    background-color: #3fc1c0;\r\n    height: 100vh;\r\n}\r\n\r\nform .ng-invalid.ng-touched {\r\n    border: 2px solid salmon;;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5sb2dpbi1ib3gge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG59XHJcblxyXG4ubG9naW4tYm94IC5pY29uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ubG9naW4tYm94IC5idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubG9naW4tYm94IGgxIHtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubWFpbi1ib3h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZjMWMwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuZm9ybSAubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHNhbG1vbjs7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-box\">\n  <div class=\"container login-box\">\n    <h1>Register</h1>\n    <form #form=\"ngForm\">\n      <div class=\"form-group \">\n        <div class=\"text-box\">\n          <i class=\"fas fa-envelope icon fa-1x\"></i><label for=\"email\">Email</label>\n          <input type=\"text\" ngModel class=\"form-control\" id=\"email\" placeholder=\"Email\" name=\"email\" required\n            #emailController=\"ngModel\" pattern=\"^[a-z0-9](\\.?[a-z0-9]){5,}@gmail\\.com$\">\n          <p style=\"color: red;\" *ngIf=\"emailController.errors?.required && emailController.touched\">Email is required\n          </p>\n          <p style=\"color: red;\"\n            *ngIf=\"!emailController.errors?.required && emailController.errors?.pattern && emailController.touched\">\n            Please enter valid\n            Email address</p>\n        </div>\n      </div>\n      <div class=\"form-group \">\n        <div class=\"text-box\">\n          <i class=\"fas fa-key icon fa-1x\"></i><label for=\"password\">Password</label>\n          <input type=\"password\" ngModel class=\"form-control\" id=\"password\" placeholder=\"Password\" name=\"password\"\n            required #passwordController=\"ngModel\">\n          <p style=\"color: red;\" *ngIf=\"passwordController.errors?.required && passwordController.touched\">Password is\n            required</p>\n        </div>\n      </div>\n      <button class=\"btn btn-success button\" (click)=\"register(form); form.reset();\"\n        [disabled]=\"form.invalid\">Register</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sharedFolder_services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedFolder/services/notify.service */ "./src/app/sharedFolder/services/notify.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, notifyService) {
        this.router = router;
        this.notifyService = notifyService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (form) {
        var _this = this;
        var email = form.value.email;
        var password = form.value.password;
        var body = {
            email: email, password: password
        };
        console.log('email :', email);
        console.log('password :', password);
        fetch("http://localhost:3000/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (responseData) {
            if (responseData.success) {
                _this.notifyService.notificationMessage(responseData.message, 'success');
                _this.router.navigate(["login"]);
            }
            else {
                _this.notifyService.notificationMessage(responseData.message, 'danger');
            }
        })
            .catch(function (error) {
            _this.notifyService.notificationMessage("Error", 'danger');
            console.log('error :', error);
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _sharedFolder_services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/session-expired/session-expired.component.css":
/*!***************************************************************!*\
  !*** ./src/app/session-expired/session-expired.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".re-login {\r\n    padding-top: 20%;\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vzc2lvbi1leHBpcmVkL3Nlc3Npb24tZXhwaXJlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24tZXhwaXJlZC9zZXNzaW9uLWV4cGlyZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZS1sb2dpbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/session-expired/session-expired.component.html":
/*!****************************************************************!*\
  !*** ./src/app/session-expired/session-expired.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"re-login\">\n    <h3>Your session has been expired</h3>\n    <br>\n    <h5>please login again</h5>\n    <br>\n    <button class=\"btn btn-primary\" routerLink=\"/login\">Login</button>\n</div>"

/***/ }),

/***/ "./src/app/session-expired/session-expired.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/session-expired/session-expired.component.ts ***!
  \**************************************************************/
/*! exports provided: SessionExpiredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionExpiredComponent", function() { return SessionExpiredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SessionExpiredComponent = /** @class */ (function () {
    function SessionExpiredComponent() {
    }
    SessionExpiredComponent.prototype.ngOnInit = function () {
    };
    SessionExpiredComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-session-expired',
            template: __webpack_require__(/*! ./session-expired.component.html */ "./src/app/session-expired/session-expired.component.html"),
            styles: [__webpack_require__(/*! ./session-expired.component.css */ "./src/app/session-expired/session-expired.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SessionExpiredComponent);
    return SessionExpiredComponent;
}());



/***/ }),

/***/ "./src/app/sharedFolder/guards/loginRequired.guard.ts":
/*!************************************************************!*\
  !*** ./src/app/sharedFolder/guards/loginRequired.guard.ts ***!
  \************************************************************/
/*! exports provided: LoginRequiredGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRequiredGuard", function() { return LoginRequiredGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");




var LoginRequiredGuard = /** @class */ (function () {
    function LoginRequiredGuard(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }
    LoginRequiredGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var token = this.sessionService.get('token');
        // if (token) {
        //     return true;
        // } else {
        //     this.router.navigate(["/session-expired"])
        //     return false;
        // }
        return new Promise(function (resolve, reject) {
            if (!token) {
                reject(false);
                _this.router.navigate(['/session-expired']);
                return;
            }
            fetch("http://localhost:3000/auth/validateToken", {
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
                .then(function (response) {
                return response.json();
            })
                .then(function (data) {
                if (data.success) {
                    resolve(true);
                }
                else {
                    reject(false);
                    _this.router.navigate(['/session-expired']);
                }
            })
                .catch(function (error) {
                reject(false);
                _this.router.navigate(['/session-expired']);
            });
        });
    };
    LoginRequiredGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_web_storage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginRequiredGuard);
    return LoginRequiredGuard;
}());



/***/ }),

/***/ "./src/app/sharedFolder/services/notify.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/sharedFolder/services/notify.service.ts ***!
  \*********************************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotifyService = /** @class */ (function () {
    function NotifyService() {
    }
    NotifyService.prototype.notificationMessage = function (toasterMsg, toasterType) {
        $.notify({
            icon: 'add_alert',
            message: toasterMsg
        }, {
            type: toasterType,
            delay: 2000,
            timer: 1000,
            placement: {
                from: 'top',
                align: 'right'
            },
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-raised-button type="button" aria-hidden="true" class="close" style="outline:none;" data-notify="dismiss">' +
                '<i class="material-icons" style="position: relative;top: 4px;font-size: 14px;right: -6px;">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message" style="color:black;position:relative;top:-6px;" >{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" ' +
                'aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    NotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotifyService);
    return NotifyService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\Practice\blog\frontend\blogClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map