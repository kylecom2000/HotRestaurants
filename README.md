# HotRestaurant

* Description: Basic app demonstrating Node and Express with jQuery. Overall purpose is to help schedule reservation requests. Restaurant has just 5 tables available. First five requests get a reservation, every request after that is sent to the waiting list.
* Live Demo: <https://hot-restaurant-fsf.herokuapp.com/>

![Hot Restaurant Image](Images/HotRestaurant.png)

## Notes

* You will NOT need a MySQL Database for this exercise.
* Current app doesn't have admin handling. We'll deal with that at a later time.
* Don't separate the JavaScript from the HTML in the client-side code. (i.e. Don't use external JavaScript. If you do, you will need an additional line of code to configure the express server to know where the JavaScript is).

## Good luck! Don't stress out

* Spend some time trying to build exposure. But don't get overwhelmed. We'll have plenty of time to come back to this.


##################################

route to main page, table page, reservation page.

table page should get the current tables and waitlist and display them on the webpage

reservation page should allow users to fill out a form, and then post that information to the js

tables.js should have two arrays?
    reserved, waitlist

htmlRoutes
    /
    /tables
    /reserve
    * catch all
api routes
    get /api/reserve
    post api/reserve




