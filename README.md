
# Anywhere Ice Cream: Online Ice Cream Order-and-Delivery Platform

## Group Details
Group Number: 9

Group members:
| Name | Student Number |
|--|--|
| Xiaoxuan Wang | 300133594 |
| Victor Li | 300146133 |
| Xiao Tan | 300012813 |

## Project Description
We intend to create an online ice cream order-and-delivery platform for ice cream stores. Customers can order ice cream from an ice cream store online. Ice cream is delivered by registered delivery persons.

## Platform Operation Logic
The business model consists of four major roles:

* Ice-cream stores
* Customers
* Delivery persons
* Platform employees

### Ice-cream stores
Any qualified ice cream store can register on the platform and start their online businesses. The stores may offer different flavours of ice cream on a menu or may allow customers to create their own personalized flavours.

### Customers

#### Before logging in
Customers can:
* Browse the list of ice cream shops, or search for a specific shop.
* See the details of an ice cream store that are available to the user, including the rating, address, menu, etc.

#### After logging in
Customers can also:
* Order ice cream
* Rate an ice cream store
* Create bookmarks

### Delivery persons
A registered and active delivery person will be notified if there is a new order is to be delivered. They can choose either to accept or ignore the order.

#### Before acceptance
The delivery person can see the location of the ice cream store and the delivery fee associated with the order.

#### After acceptance
The delivery person will be guided by the navigation system to the store. After arrival, the delivery person may wait for the store to make ice cream, and take the order after the store finishes. Then the delivery will be guided to the delivery point and will finish the delivery.

### Platform employees
Platform employees are responsible for the operations of the platform itself. Examples:
* Verify if a shop is qualified;
* Customer service (e.g. resolve complaints; offer support and help);
* Account management

## Architecture
* Browser/Server Model will be employed for the platform.
* Client side is designed to be decoupled from the backend.
    * RESTful API schemes will be used to communicate with the server.
* MVVM framework (e.g. Vue.js) is favoured, which provides data binding mechanism, as well as swift and responsible dynamic pages.

### Client side
The client side consists of four interfaces for each role (ice cream store, customer, delivery person and employees). Each interface is independent of others and offers corresponding services described in [(Platform Operation Logic)](#Platform%20Operation%20Logic).

### Server side
The server side will deal with actuall business logic. It is responsible to fetch data from the database and return them to the client side, as well as handle requests from the client side and update the database correspondingly.
