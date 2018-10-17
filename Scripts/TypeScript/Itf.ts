/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/knockout.kogrid/ko-grid.d.ts" />
/// <reference path="../typings/knockout.mapping/knockout.mapping.d.ts" />

module CustomerIntrerfaces {


    export interface ICustomerService {
        Insert(obj: CustomerIntrerfaces.ICustomer, callback: any): number;
        Update(obj: CustomerIntrerfaces.ICustomer, callback: any): number;
        Delete(obj: CustomerIntrerfaces.ICustomer, callback: any): number;
        GetAll(callback: (da: any) => void);
    }

    export interface ICustomer {
    }

    export interface ICustomerUI {
    }
}
