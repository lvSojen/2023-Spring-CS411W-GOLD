<!--
Team Gold - Spring 2023

- [Trello](https://trello.com/b/8NgCdVEH/stories-issues)

# Members

- vdulc001 - Vaelyn Dulce - vdulc001@odu.edu
- jwangCSProject - Joshua Wang - jwang010@odu.edu
- lvSojen - Yao Wang - ywang011@odu.edu
- nmohu001odu - Natalie Mohun - nmohu001@odu.edu
- ThomasH0 - tharl001@odu.edu - Thomas Harlow
- ebarr005@odu.edu - Estefania Barron
-->

**Authors**: Vaelyn Dulce, Thomas Harlow, Joshua Wang, and Yao Wang<br />
[contributions](https://github.com/lvSojen/2023-Spring-CS411W-GOLD/wiki/Setting-up-the-Front-End/_history)
# Booked Front-End

The contents of this wiki will be focused on:
* Project installation
* Website Walkthrough

## Project Installation

### Clone the following Booked Front End Repository:

https://github.com/lvSojen/2023-Spring-CS411W-GOLD.git

_Assuming the following link has been cloned successfully_

### To Run the Contents of the Booked Front End Repository:

  - Inside the main directory, navigate to **/frontend**:
    - `cd /frontend`
  - In this directory, run the following commands:
     - `npm install`
     - `npm run dev`

# Website Walkthrough

## Home Page
You can see the landing page of the Booked website below. Like most online stores, you are immediately taken to the Home Page. Our form is the first thing you see, so you can start searching for books right away!

![homewebsite](https://user-images.githubusercontent.com/98435631/233506457-f40048ff-e960-4d03-aef4-6c5b896d201c.png)

## Search
It is advised that you fill in all of the search criteria (seen in the image below). Filling in more fields makes for more accurate results! As of right now, the language, edition, and format fields are not supported.

![](https://github.com/lvSojen/2023-Spring-CS411W-GOLD/blob/main/wikiImages/Search.PNG)

### Entering Data
From the image before we can see all the various input fields that we are able to use to search for that specific book you are looking for.
In this example we are searching for the Book _Foundation_ with a **Binding** of _Paperback_ and a **Zipcode/Max Distance** of _Zip: 23456 and a max distance of 30 miles_.
![](https://github.com/lvSojen/2023-Spring-CS411W-GOLD/blob/main/wikiImages/SearchEnter.png)

### Search Results that Displays Distance and Other Data
To use the Distance feature, we must first ensure that the user has entered their zip code in the previous search fields. Once the zip code is provided, with or without a maximum distance constraint, the Booked search will return the accurate distance between the bookstore and the user's zip code in miles.

The Distance measurement is achieved in the front-end by calling the Google Maps Geocoding API to obtain the latitude and longitude of both the store and user's zip codes. Once both sets of coordinates are acquired, we can calculate the distance between the two zip codes and display it on the front-end. If the user does not specify their zip code, the distance column will return "unknown."

Here we get displayed the search results. As you can see, only two results were found. This is what the user would be displayed from their entered data. Every search field works besides the language, edition, and format mentioned earlier.<br />

<strong>(1) Book title: Foundation, User zipcode is 23456, maximum distance is within 30 miles.</strong>

![](https://github.com/lvSojen/2023-Spring-CS411W-GOLD/blob/main/wikiImages/SearchResults.png)

<strong>(2) Book title: Foundation, Author: Isaac Asimov condition: New, User zipcode and maximum distance are not specified</strong>

![](https://github.com/lvSojen/2023-Spring-CS411W-GOLD/blob/main/wikiImages/SearchResults2.png)

## Recommendations
In the header, you can click on the "Recommendations" button. By clicking on this button, you will be able to go to the Recommendations Page and see the latest novels for you! Since Team Gold didn't have time to implement this page dynamically, they recommended some popular reads from this year.

![](https://github.com/lvSojen/2023-Spring-CS411W-GOLD/blob/main/wikiImages/Recommendation.PNG)
## Favorites
In the header, you can also click on the "Favorites" button. By clicking on this button, you will see all the books that you have favorited! As of right now, this page is hard-coded to list the Gates of Fire, The Hobbit, Dune, and The Two Towers, and they can't be removed.

![](https://github.com/lvSojen/2023-Spring-CS411W-GOLD/blob/main/wikiImages/Favorites.PNG)
## Sign In
Next to the "Favorites" button is the "Sign In" button. After clicking the button, you will need to enter your email address and password to sign into your account. There are currently no user accounts for the Booked website. This page was included for completeness.

![](https://github.com/lvSojen/2023-Spring-CS411W-GOLD/blob/main/wikiImages/SignIn.PNG)
## Sign Up
To the right of the "Sign-In" button is the "Sign-Up" button. Here, you will have to fill in all fields below to sign up for an account. If one field is not filled, in there will be a pop-up message requiring you to fill in that field. Once again, user accounts are not yet supported. This page was also included for completeness.

![](https://github.com/lvSojen/2023-Spring-CS411W-GOLD/blob/main/wikiImages/SignUp.PNG)
## About
The next button you can click on is the "About" button in the header. Here, you can see our purposes for creating the website as well as the people who worked on the website. You can click on the pictures of the developers and see what the developers do in their free time.

![](https://github.com/lvSojen/2023-Spring-CS411W-GOLD/blob/main/wikiImages/AboutUs.PNG)
## Help
Next up is the "Help" button. The Help Page is where you will get all the information needed to use the form on the Home Page. Read through the step-by-step process then apply that knowledge to the search form. You can go back to the search form by clicking on the "Home" button in the header.

![](https://github.com/lvSojen/2023-Spring-CS411W-GOLD/blob/main/wikiImages/Help.PNG)
## Frequently Asked Questions (FAQ)
The last button to be featured in the header is the "FAQ" page. This page will answer some common questions brought up by Booked users.

![](https://github.com/lvSojen/2023-Spring-CS411W-GOLD/blob/main/wikiImages/FAQ.PNG)
