# Project Overview

## Project Name

BMI Calculator 

## Project Description

This web application allows a user to determine their BMI. The user can select between Imperial or Metric system of measurements to input their values. After entering it, they will be shown their results and how to interpret them and its significance. The application will offer further insight with references and resources. 

## Wireframes

<!-- Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe. -->
[Here](https://whimsical.com/bmi-calculator-9aqjBs6qNhzLkJGxnhQvn9) is a link that will direct you to my vision for both my browser and mobile look of this application. 

## Component Hierarchy
<!-- Show your component hierarchy here! Use [this](https://cms-assets.tutsplus.com/uploads/users/1795/posts/30352/image/GettingStartedWithReduxTutorial-React-Component-Structure.png) as an example. -->
[Here](https://whimsical.com/bmi-component-hierarchy-VmLjp5FZY844kytW2SzW2o) is a link that shows us our component hierarchy.

## API and Data Sample

<!-- Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This __must__ be properly formatted. An example is below: -->

```json
{
    "records": [
        {
            "id": "recR6hpiYWuyfVGur",
            "fields": {
                "weight": 79,
                "calculation": 25.79591836734694,
                "height": 1.75,
                "category": "overweight"
            },
            "createdTime": "2022-01-07T21:10:26.000Z"
        },
        {
            "id": "rec25mbbWGewOrDmR",
            "fields": {
                "calculation": 16.3265306122449,
                "height": 1.75,
                "category": "underweight",
                "weight": 50
            },
            "createdTime": "2022-01-07T21:10:26.000Z"
        },
        {
            "id": "recKB9UL8QUcnM7Io",
            "fields": {
                "calculation": 24.489795918367346,
                "weight": 75,
                "category": "normal",
                "height": 1.75
            },
            "createdTime": "2022-01-07T21:10:26.000Z"
        }
    ],
    "offset": "itrFy0PpjuxU94yHI/recKB9UL8QUcnM7Io"
}

```

### MVP/PostMVP

<!-- The functionality will then be divided into two separate lists: MVP and PostMVP.  Carefully decide what is placed into your MVP, as the client will expect this functionality to be implemented upon project completion.   -->

#### MVP 
<!-- *These are examples only. Replace with your own MVP features.* -->

- Create and use external API
- Create get functionality to render data into components
- Create post functionality to allow a user to add to the data
- Create functionality for a user to input weight and height
- Create both imperial and metric systems to be used
- Create submission button for both systems
- Create a results page in which the user is given information in regards to their BMI
- Create a Why BMI? Page. To provide more information to user
- Create a Navbar with the appropriate routes
- Stylize the pages with flex.
- Create references within the information


#### PostMVP  
<!-- *These are examples only. Replace with your own Post-MVP features.* -->

- To somehow have it so it is posted one at a time. So the results page does not get bloated. 
- For the imperial input, create an input that takes x(foot) y
- Add a loading animation

## Project Schedule

<!-- This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example. -->

|  Day | Deliverable | Status
|---|---| ---|
|January 8-10| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|January 10| Project Approval | Complete
|January 11| Core Application Structure, foundational stylizing, render api | Complete
|January 12| Input functionality| Complete
|January 13| Styling/media query  | Complete
|January 14| MVP | Complete
|January 18| Presentations | Incomplete

## Timeframes

<!-- Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. -->

<!-- Time frames are also key in the development cycle.  You have limited time to code all parts of your app.  Your estimates can then be used to evalute possibilities based on time needed and the actual time you have before the app must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly. -->

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|Create API|H| 2.5hrs|3hrs|3hrs|
|Create Navbar|H|1hr|0.5hrs|0.5hrs|
|Create API component|H|1hr|0.5hr|0.5hr|
|Hide API information|H|0.5hr|0.5hr|0.5hr|
|Create get functionality|H|1hr|1hr|1hr|
|Create Imperial System|H|3hrs|3.5hrs|3.5hrs|
|Create Metric System|H|3hrs|3hrs|3hrs|
|Create Results Page|H|2.5hrs|3hr|3hrs
|Create logic to display Results|H|3hrs|3.5hrs|2hrs|
|Adding Form|H|3hrs|4hrs|4hrs|
|Handle submit functionality|H|1hr|2hr|2hr|
|Input functionality|H|1.5hrs|1hr|1hr|
|Create Post functionality|H|1hr|1.5hrs|1.5hrs|
|Create Why BMI? page|H|2hrs|2.5hr|2.5hr|
|Add Linkedin and Git icons|M|1.5hrs|2hrs|2hrs|
|Add title for page and tab icon|M|1.5hrs|NA|NA
|Stylize Header|M|1.5hrs|2hrs|2hrs|
|Stylize text and alignment|H|3hrs|3.5hrs|3.5hrs|
|Display results|H|2hrs|3.5hrs|3.5hrs|
|Media query|H|3hrs|5hrs|5hrs|
|Create intuitive Imperial input|L|3.5hrs|3hrs|3hrs|
|Utilize loading animation|L|2hrs|NA|NA|
|Create local storage|L|3.5hrs|NA|NA|
|Create references in information|L|3.5|5hrs|5hrs|
| Total|H|51hrs|51.5|51.5|

## SWOT Analysis

### Strengths:
- This was something that I used in my previous field so it comes to me intuitively.
- I feel fairly confident in my abilities in using react.
- I can see real world application and there is potential to take this further. 

### Weaknesses:
- I can get overwhelmed or feel the pressure when I start to hit obstacles. 
- I feel I haven't had as much opportunities to do styling for this unit, I feel I am rusty and dusty in regards to that. 
- I have a bad habit of struggling in silence.

### Opportunities:
- This feels like a step up from my previous project. I feel I can challenge myself in creating logic. 
- I can get out of my comfort zone and try different things aside from what we have done a lot in class. 
- This project as real world application. It has the potential to have additional elements added post project. 

### Threats:
- Not entirely sure how I can go about having a one time submission per user.
- Figuring out to turn a user input from 5 foot 9 to metric units.
- Styling and figuring out how to include references to the text