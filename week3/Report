This is a brief report about how i created the slideshow feature on the gallery of this website. 

First, i had to set up the HTML structure for the slideshow which was really easy now that I've been given alot of hands on experience in using HTML. The only slight challenge was naming the classes to match the given css code. 

Next was setting up the JavaScript, ofcourse. I set the slideIndex and created a function call plusSlides first because i saw that was what the professor did. But after that i was quite lost. But then i realized there's another function inside the plusSlide. So I started working on defining the showSlides function.

I started with getting the div with the class "mySlides" and storing them  in a variable called slideArray, because i figuered since we have many "mySlide" divs that i could store them in an array which i can later index and display.

After that, i displayed all "mySlide" divs to "none" for which i used a for loop. Then i had to figure out how to connect the arrow buttons too somehow- when clicked- display the next "mySlide". 

Then i clicked to me that i should already have the first slide displayed. So i created new slideIndex variable and set it to 1 outside of the for loop. I changed the showSlide function to take a parameter n. I then created 2 if statments. One to check if n is greater than the number of slides, set slideIndex to 1 so that once the slideIndex reaches 8 and goes for 9th slide, it loops back too the first slide. Next if statement to check if n is less than 1, set slideIndex to the last slide for the same reason as the first if statement except in this case if the user keeps moving backwards.

Lastly i added the statement that changes the "none" display of the slides to "block" simultaniously as the user change the value of n with each click of the arrow buttons for which i added an "onclick" event listener to trigger the "plusSlide" function on each click. 

At this point i expected the arrow buttons to be working but no slides were changing so i had to change tactics. What is wrong with my code? Well of course, i had forgotten to call the function itself. So i created a new funciton called currentSlide to which called the showSlide funciton at the same time sets the slideIndex. 

The arrows began to work! But the numbers weren't aligning. And this took me 1 whole day of havign mental breakdowns. i had to set the last statment of the showSlides function to index - 1. 

It finally worked!