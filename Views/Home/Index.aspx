<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<!DOCTYPE html>
<html ng-app>
<head>
    <title>Manage Customers</title>
    <link rel="stylesheet" href="Content/bootstrap.css" />
    <script type="text/javascript" src="Scripts/jquery-1.7.1.js"></script>
    <script type="text/javascript" src="Scripts/TypeScript/CustomerModule.js"></script>
    <script type="text/javascript" src="Scripts/TypeScript/CustomerUIModule.js"></script>

    <script>
        $(document).ready(function () {
            var customer = new CustomerModule.Customer();
            var customerUI = new CustomerUIModule.CustomerUI();
            customer.SelectAll(customerUI.LoadCustomers);
        });

    </script>
</head>
<body>
    <table id="customerTable" border="0" cellpadding="3">
    <tr>
        <th>Customer ID</th>
        <th>Company Name</th>
        <th>Contact Name</th>
        <th>Country</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td><input type="text" id="txtCustomerId" size="5"/></td>
        <td><input type="text" id="txtCompanyName" /></td>
        <td><input type="text" id="txtContactName" /></td>
        <td><input type="text" id="txtCountry" /></td>
        <td><input type="button" name="btnInsert" value="Insert" /></td>
    </tr>
</table>
</body>
</html>