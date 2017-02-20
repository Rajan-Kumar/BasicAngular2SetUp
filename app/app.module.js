"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            // imports: [BrowserModule, RouterModule],
            // exports: [RouterModule],
            // declarations: [HomeComponent],
            // bootstrap: [HomeComponent],
            imports: [
                platform_browser_1.BrowserModule,
                // FormsModule,
                // HttpModule,
                router_1.RouterModule
            ],
            declarations: [home_component_1.HomeComponent],
            //, routableComponents
            //providers: [CanActivateAuthGuard, CharacterService, UserProfileService, VehicleService],
            bootstrap: [home_component_1.HomeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map