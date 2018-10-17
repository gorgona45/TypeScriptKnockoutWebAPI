/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="CustomerModule.ts" />
/// <reference path="Itf.ts" />

module CustomerServiceModule {

    export class CustomerService implements CustomerIntrerfaces.ICustomerService {
        Insert(obj: CustomerIntrerfaces.ICustomer,callback: any): number {
            var data = JSON.stringify(obj);

            $.ajax({
                type: 'POST',
                url: '/api/customers/',
                data: data,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: callback,
                error: function () { alert('Error'); }
            });
            return 0;
        }

        Update(obj: CustomerIntrerfaces.ICustomer,callback: any): number {
            var data = JSON.stringify(obj);

            $.ajax({
                type: 'PUT',
                url: '/api/customers',
                data: data,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: callback,
                error: function (xhr, err) {
                    alert("readyState: " + xhr.readyState + "\nstatus: " + xhr.status);
                    alert("responseText: " + xhr.responseText);
                }
            });

            return 0;
        }

        Delete(obj: CustomerIntrerfaces.ICustomer,callback: any): number {
            var data = JSON.stringify(obj);

            $.ajax({
                type: 'DELETE',
                url: '/api/customers',
                data: data,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: callback,
                error: function (xhr, err) {
                    alert("readyState: " + xhr.readyState + "\nstatus: " + xhr.status);
                    alert("responseText: " + xhr.responseText);
                }
            });
            return 0;
        }

        GetAll(callback: (da: any, textStatus: string, jqxhr: JQueryXHR) => void) {
            $.getJSON("/api/customers", function (dataFromSrv, ts, jq) {
                callback(dataFromSrv, ts, jq);
            });
        }

    }
}