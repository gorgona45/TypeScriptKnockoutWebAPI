/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/knockout.kogrid/ko-grid.d.ts" />
/// <reference path="../typings/knockout.mapping/knockout.mapping.d.ts" />
/// <reference path="CustomerModule.ts" />
/// <reference path="Itf.ts" />

module CustomerUIModule {


    export class CustomerUIModel implements CustomerIntrerfaces.ICustomerUI {

        public customers: KnockoutObservableArray<CustomerIntrerfaces.ICustomer>;
        service: CustomerIntrerfaces.ICustomerService;



        constructor(svc: CustomerIntrerfaces.ICustomerService, data: any) {
            this.service = svc;
            this.customers = ko.observableArray<CustomerIntrerfaces.ICustomer>(data);
        }

        AddCustomer = (elem: CustomerIntrerfaces.ICustomer): void => {
            this.service.Insert(elem, (d) => {
                var tt = 0;
            });
            this.customers.push(elem);
        }

        UpdateCustomer = (elem: CustomerIntrerfaces.ICustomer): void => {
            this.service.Update(elem, (d) => {
                var tt = 0;
            });
        }

        DeleteCustomer = (elem: CustomerIntrerfaces.ICustomer): void => {
            this.service.Delete(elem, (d) => {
                var tt = 0;
            });
            this.customers.remove(elem);
        }
    }
}