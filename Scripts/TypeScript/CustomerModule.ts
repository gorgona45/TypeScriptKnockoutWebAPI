/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="Itf.ts" />

module CustomerModule {

    export class Customer implements CustomerIntrerfaces.ICustomer {
        CustomerID: KnockoutObservable<string>;
        CompanyName: KnockoutObservable<string>;
        ContactName: KnockoutObservable<string>;
        Country: KnockoutObservable<string>;

        constructor() {
        }
    }
}



