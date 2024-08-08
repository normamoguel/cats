# Cat Visor

## This app show the breed's cat character from TheCat API

### Requirements

This app need keys from https://api.thecatapi.com generate and replace in assets/javascript/cat.js line 3.

Css
    Directory css
               style.css

Images
    Directory images 
               cat-logo.png
               No_Image_Available.jpg

index.html is the entry point.


fonts:
https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap

Application can be executed using the Live Server extension in Visual Studio Code.

https://code.visualstudio.com/

Description.


1. Implement the Breeds API to display each breed's cat in a card. The front of the card should include the breed's image, name, and temperament, while the back should display the breed's description. Users should be able to flip the card by hovering the cursor over it. Additionally, there should be a dropdown menu for selecting breeds. Users should be able to navigate through the images by clicking on left and right arrows or by using the scroll bar at the bottom of the cards. https://api.thecatapi.com/v1/breeds

2. When a user selects a breed from the dropdown, display the images for the selected breed. The front of the card should show the image, while the back should display the breed's name, description, temperament, origin, life span, adaptability, affection level, child friendliness, dog friendliness, energy level, and Wikipedia URL.
 https://api.thecatapi.com/v1/images/search?limit=25&breed_ids=${breed_id}

Please note that the styles used in this demo are based on the CSS course on W3Schools and examples from https://www.youtube.com/watch?v=6QE8dXq9SOE&t=448s.