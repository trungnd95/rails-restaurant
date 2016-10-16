# README

This is trung-manucian restaurant project built on rails 5

# CoderRestaurant Website

**Coder Restaurant** is a Ruby on Rails restaurant website let users order foods.

Submitted by: **Trung Manucian**

Time spent: **16** hours spent in total

URL: [trung-manucian-restaurant.heroku.com](https://trung-manucian-restaurant.herokuapp.com/) 
    
### Required (User Stories)

* [x] User must be able to go two pages: Menu, and Contact Us.
* [x] User can see the address and phone number on the contact us page.
* [x] User can see a basic google map on the Contact Us page.
* [x] User can navigate to a menu page with four sections:
  * [x] Breakfast
  * [x] Lunch
  * [x] Dinner
  * [x] Drinks
* [x] User should see at least 5 food items in each section.
* [x] Each food item should have the following fields:
  * Name (Canh Chua)
  * Description (Delicious fish soup)
  * Price (VND)
  * Section - Breakfast, Lunch, Dinner, Drinks
  * Image URL - do a google search or use LoremFlickr: http://loremflickr.com/320/240/canhchua
* [x] User should be able to filter by section of Breakfast, Lunch, Dinner, or Drinks and see only the relevant items.
* [ ] User can sort menu items by “alphabetical”, “price low to high”, and “price high to low”.
* [ ] User should be able to search for a menu item and see results.
* [x] Clicking on an item in the menu brings up its detail, where you see the description and a larger picture.
* [x] User can click “order” on a menu item to go to a “Create Order” page.
* [x] User is able to fill in their name, phone number, and address.
* [x] User is taken to a “Thank you for your order page” that lists the name of item, the total cost (delivery should cost 20,000 VND), the user’s name, the user’s address, and the time the order was created in human-readable format (for example, Tuesday, December 1, 15:25).

### Optional:

* [x] User can also filter by type of Cuisine.
* [x] User can see how many times each menu item has been viewed, and sort items by “most viewed”.
* [x] User can leave a review (1-5 stars) for each dish, along with a text review.
* [x] User can see reviews and an average review score.
* [x] User can input "CODERSCHOOL" as a coupon code on the order page, which should give a 50% discount off of the order.
* [x] User can order more than one dish at a time.
* [x] User receives an email upon placing an order.
* [ ] The Restaurant (you) receives an email or SMS when a User places an order. Try Twilio if you’d like a SMS API. Use Promo Code CodeSchool15 for $30 free credit.

## Modeling our Data

**Section**    
    name:string    

**FoodItem**  
    name:string    
    description:text    
    image_url:string    
    price:integer    
    section:references    
    timestamp     

**Comment**    
    name:string    
    body:text    
    rating:integer    
    food_item:references    
    timestamp    

**Order**    
    name:string    
    phone:string    
    address:string    
    email:string    
    number_of_food_items: integer    
    food_item:references    

## Video Walkthrough

Here's a walkthrough of implemented user stories:
GIF Image Recorder [Click here to see it! Thanks](https://giphy.com/gifs/3o7TKrx66krRcy57vG/tile).
(Sorry because low quality of gif image i recordered)
## Notes

I encounter some problem with javscript caused by tuborlink in rails when i reload page. 
**Thank for Harley today, i knew the way to handle it. Instead of using document.ready , using document.addEventListener("turbolinks:load",...) will work perfectly. 

## License

    Copyright @TrungNguyen2016
