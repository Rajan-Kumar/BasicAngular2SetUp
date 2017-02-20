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
var router_1 = require('@angular/router');
var characters_component_1 = require('./characters/characters.component');
var character_list_component_1 = require('./characters/character-list.component');
var character_component_1 = require('./characters/character.component');
var login_component_1 = require('./login/login.component');
var page_not_found_component_1 = require('./page-not-found.component');
var vehicle_list_component_1 = require('./vehicles/vehicle-list.component');
var vehicle_component_1 = require('./vehicles/vehicle.component');
var can_activate_service_1 = require('./can-activate.service');
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'characters', },
    { path: 'login', component: login_component_1.LoginComponent },
    // { path: 'characters', component: CharacterListComponent },
    // { path: 'character/:id', component: CharacterComponent },
    {
        path: 'characters',
        component: characters_component_1.CharactersComponent,
        canActivate: [can_activate_service_1.CanActivateAuthGuard],
        canActivateChild: [can_activate_service_1.CanActivateAuthGuard],
        children: [
            { path: '', component: character_list_component_1.CharacterListComponent },
            { path: ':id', component: character_component_1.CharacterComponent },
        ]
    },
    { path: 'vehicles', component: vehicle_list_component_1.VehicleListComponent },
    { path: 'vehicles/:id', component: vehicle_component_1.VehicleComponent },
    { path: '**', pathMatch: 'full', component: page_not_found_component_1.PageNotFoundComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routableComponents = [
    character_list_component_1.CharacterListComponent,
    character_component_1.CharacterComponent,
    characters_component_1.CharactersComponent,
    login_component_1.LoginComponent,
    vehicle_list_component_1.VehicleListComponent,
    vehicle_component_1.VehicleComponent,
    page_not_found_component_1.PageNotFoundComponent
];
/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/ 
//# sourceMappingURL=app-route.moule.js.map