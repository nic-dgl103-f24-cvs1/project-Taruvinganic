# Exercise 8: Responsive Layouts

## Objectives

You will code a webpage made up of a series of different content blocks that you can choose from some provided layouts. First you will code the layout for mobile screens, then you will add code in the media queries to modify the layout for tablet and desktop screen sizes. One of the blocks of content is already coded, this will provide you with practice working with someone else's code and an example of how to organize your code effectively.

## Instructions

### 1. Choose your content block layouts

You can choose your content blocks by visiting this site: https://xd.adobe.com/view/a971d502-33a5-46ea-81be-1fd2c5b2076b-fc22/flow
The hero section has already been coded for you. There are two layouts for each of the seven provided content blocks. You must choose one layout from each content block and use the provided high fidelity wireframes as a guide to code the HTML and CSS for a webpage that has the following content structure:

1. Header
2. Hero (already coded)
3. Benefits
4. Testimonials
5. Call-to-action
6. Footer

### 2. Code the content blocks for mobile

1. In VS Code, carefully read the code that was provided in index.html and style.css. In the browser, use the developer tools to understand how the styles were used.
2. Code each one of your chosen content blocks for mobile:
   - Your HTML should be clean and semantics.
   - The CSS should be well organised and make the most of the styles that already exist. Feel free to edit the existing CSS.
   - Mobile layouts usually follow the normal flow of content so you may not need flexbox for anything but the header. Use padding and margin to control the vertical space in the layout.
   - The hamburger menu must work, you can use the Responsive Nav codepen as inspiration: https://codepen.io/AskClaireGuiot/pen/BaMydwd?editors=1100
   - Make sure that your mobile HTML and CSS are perfectly finished and your CSS is well organized before you move on to step 3 or your code will become a mess. The layouts don't have to be pixel-perfect because the wireframes are poor quality (the spacing and sizing of the elements is inconsistent).
   - To simulate what your web page might look like on a mobile device:
     1. With the webpage open in Chrome, right-click > Inspect.
     2. In the DevTools window, click on the Toggle Device button (in top left-hand corner).
     3. In the browser window, select Responsive from the Dimensions drop down menu. Type in the wireframe's mobile dimensions: 375px x 733px. Make sure that the zoom level is set to 100% in both the wireframe and the browser.

By coding for the small screen first we're using what is known as a mobile-first approach. By doing this, we create a basic design that will fit small screens and low bandwidth, and then we add advanced features or layouts as the screen grows and users switch from cell data to wi-fi. This ensures that we're designing an experience that will work for everyone.

### 3. Adapt the layout for vertical tablets

1. In the browser window, type 768px x 851 in the Dimensions: Responsive settings.
2. In VS Code, add code in the vertical ipad media query all the CSS needed to adapt the layout so that it looks like the tablet version of your chosen content blocks. You may need to add some container elements to the HTML to control the relationships between your flex containers and flex items.

### 4. Adapt the layout for desktop screens

1. In the browser window, select Responsive from the Dimensions drop down menu. Enter 1200px in the viewport width field and remove the dimension from the height, and press enter.

- The breakpoint is 1200px but the desktop layouts in the wireframes are 1440px wide so that you can see the negative space on either side of the content.
- If your computer has a small screen and you can't see the whole viewport window then can use th zoom setting to scale down the wireframes and the website.

2. Add, in the desktops media query, all the CSS necessary to adapt the layout so that it looks like the desktop version of your chosen content blocks.

Note: For a professional website I would also check what the layout looks like in between the breakpoints. _You do not need to do this for the exercise_:

1. In the browser window, select Responsive from the Dimensions drop down menu.
2. Drag to expand your viewport width and watch how your layout behaves at all sizes.
3. If anything in the layout looks awkward, I would record the viewport width and add a new media query using the width of the viewport as the min-width.

### 5. Format, organize and add comments

- Use the Prettier VSCode extension to format HTMl and CSS code.
- Add organizational CSS comments and order your style rules so that your CSS is easy to read.
- Add a few comments to explain your HTML and CSS code and highlight anything of interest.

### 6. Check for errors

- Use the VSCode HTMLHint extension and validate your HTML code to make sure that it is correct: https://validator.w3.org/#validate_by_upload. Take a screenshot of the results.
- Validate your CSS code to make sure that it is correct: https://jigsaw.w3.org/css-validator/ for CSS. Take a screenshot of the results.

**You have now completed your exercise but you still need to push your edits to GitHub and submit it in Brightspace. Make sure to follow the instructions in the How to Complete Your Exercises Guide.**
