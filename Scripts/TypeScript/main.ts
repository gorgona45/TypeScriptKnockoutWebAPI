/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/knockout.kogrid/ko-grid.d.ts" />
/// <reference path="../typings/knockout.mapping/knockout.mapping.d.ts" />
/// <reference path="CustomerModule.ts" />
/// <reference path="CustomerServiceModule.ts" />


$(document).ready(function () {
    var svc = new CustomerServiceModule.CustomerService();
    svc.GetAll(function (dt) {

        var customerUI = new CustomerUIModule.CustomerUIModel(svc, dt);

        ko.applyBindings(customerUI);

    });

});
