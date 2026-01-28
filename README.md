# Adams_Project1

1. A brief description of the application

The code is 5 files that creates 3 webpages. 3 of the files create the structure of the webpages in HTML, 1 file adds design in CSS that is shared between the 3 and the last file adds logic and math to make the site functional.

The site allows the user to choose one of 3 shapes, add the shapes' dimensions and the site will calculate the shapes' area based on user's input. The Home page displays an ordered list, an unordered list, as well as a picture.

2. An explanation of how form data is passed to result.html

The line " <form action="result.html" method="GET" id="shapeForm"> " (line 43 in Input.html). Uses the "Get" method to store the data that is in the <form> </form> tags and send that data to result.html, which is then read in JavaScript.

3. The formulas used to calculate area for each shape

The formulas for all the geometry are in JavaScript

Starting with Triangle:
    The variables "base" and "triHeight", the 2 variables are multiplied together and multiplied by 0.5 to find the area. I did this rather than divide by 2 because 3 multiplications is easier to write.

Circle:
    For circle I looked up how to insert PI into JS and then used the variable "radius" for the radius. Then did PI times radius times radius to find the area because 3 multiplications is easier to write than writing radius squared.

Rectangle:
    I used the variables "width" and "height" for the width and height of the rectangle and then multiplied them together to find the area.
    

4. A short reflection on challenges encountered

I had a rough-ish time with the Javascript as it is not a language I am familiar with, the HTML and CSS were kind of fun but had a slight learning curve as well.

5. An AI Usage Disclosure section:
   - List any AI-assisted tools used (if any) - Chat GPT and VS Code's Intellisense (I think thats an AI).
   - Describe how they were used - I asked Chat GPT to walk me through how to approach this assignment since I am working in languages I am not entirely comfortable in. I also used Chat GPT and Intellisense as well as Google to help me with Syntax.
   - Explain how you reviewed and modified the output - I specified asking for a walkthrough when using Chat GPT as well as asking for help with Syntax after describing what I was trying to do, I then read through the code it provided and if I couldn't understand it then I changed it, asked for an explanation or a simplification. 
   - If no AI tools were used, explicitly state this - AI was absolutely used and appreciated 
