using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TypeScriptWebAPIDemo.Models;

namespace TypeScriptWebAPIDemo.Controllers
{
    public class CustomersController : ApiController
    {
        public IEnumerable<Customer> Get()
        {
            NorthwindEntities db=new NorthwindEntities();
            var data = from item in db.Customers
                        select item;
            return data.ToList();
        }

        public void Post(Customer obj)
        {
            try
            {
                NorthwindEntities db = new NorthwindEntities();
                db.Customers.Add(obj);
                db.SaveChanges();
            }
            catch (Exception ex)
            {

                throw;
            }
        }


        public void Put(Customer obj)
        {
            NorthwindEntities db = new NorthwindEntities();
            var data = from item in db.Customers
                        where item.CustomerID == obj.CustomerID
                        select item;
            Customer old = data.SingleOrDefault();
            old.CompanyName = obj.CompanyName;
            old.ContactName = obj.ContactName;
            old.Country = obj.Country;
            db.SaveChanges();
        }

        public void Delete(Customer obj)
        {
            NorthwindEntities db = new NorthwindEntities();
            var data = from item in db.Customers
                        where item.CustomerID == obj.CustomerID
                        select item;
            Customer c = data.SingleOrDefault();
            db.Customers.Remove(c);
            db.SaveChanges();
        }
    }
}