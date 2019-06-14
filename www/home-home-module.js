(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n\n    <div *ngFor=\"let item of urls\">\n      <label>{{item}}</label><br>\n      <ion-button (click)=\"clickUrl(item)\">Get</ion-button><br><br>\n    </div>\n\n\n    <div>\n      const resp = await fetch(url);<br>\n\n      response: {{response}}\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HomePage = /** @class */ (function () {
    function HomePage(httpClient) {
        this.httpClient = httpClient;
        this.urls = [
            'https://storage.giftistar.com/www/54e6c6a173d3e910dc5951dacf1c5badf2e6fc8d/android/pro-manifest.json',
            'https://storage.cache-front.iwinv.net/www/54e6c6a173d3e910dc5951dacf1c5badf2e6fc8d/android/pro-manifest.json',
            'https://hosajrucqueo1827438.cdn.ntruss.com/www/54e6c6a173d3e910dc5951dacf1c5badf2e6fc8d/android/pro-manifest.json',
        ];
    }
    HomePage.prototype.clickTest = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, _a, _b, _c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        url = 'https://storage.giftistar.com/www/54e6c6a173d3e910dc5951dacf1c5badf2e6fc8d/android/pro-manifest.json';
                        _a = this;
                        _c = (_b = JSON).stringify;
                        return [4 /*yield*/, this._fetch(url)];
                    case 1:
                        _a.response = _c.apply(_b, [_d.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.clickFront = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, _a, _b, _c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        url = 'http://storage.cache-front.iwinv.net/www/54e6c6a173d3e910dc5951dacf1c5badf2e6fc8d/android/pro-manifest.json';
                        // const url = 'https://storage.giftistar.com/www/54e6c6a173d3e910dc5951dacf1c5badf2e6fc8d/android/pro-manifest.json';
                        _a = this;
                        _c = (_b = JSON).stringify;
                        return [4 /*yield*/, this._fetch(url)];
                    case 1:
                        // const url = 'https://storage.giftistar.com/www/54e6c6a173d3e910dc5951dacf1c5badf2e6fc8d/android/pro-manifest.json';
                        _a.response = _c.apply(_b, [_d.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.clickCdn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, _a, _b, _c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        url = 'http://giftistarcdn.cache.iwinv.net/pro-manifest.json';
                        _a = this;
                        _c = (_b = JSON).stringify;
                        return [4 /*yield*/, this._fetch(url)];
                    case 1:
                        _a.response = _c.apply(_b, [_d.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.clickUrl = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        _c = (_b = JSON).stringify;
                        return [4 /*yield*/, this._fetch(url)];
                    case 1:
                        _a.response = _c.apply(_b, [_d.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype._fetch = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resp, _a, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        this.response = null;
                        return [4 /*yield*/, fetch(url, {
                                method: 'GET',
                                redirect: 'follow'
                            })];
                    case 1:
                        resp = _b.sent();
                        _a = {
                            fileBaseUrl: resp.url
                        };
                        return [4 /*yield*/, resp.json()];
                    case 2: return [2 /*return*/, (_a.manifestJson = _b.sent(),
                            _a)];
                    case 3:
                        error_1 = _b.sent();
                        return [2 /*return*/, error_1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map