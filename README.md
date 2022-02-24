## Overview

**Dynamic** 

Upon visiting Dynamic, guests will be offered a training set to do (default to beginner). Afterwards they will offered to register to create and record their own training sets.

Users can select their difficultly levels. Users will be offered either the given training set of the day (and be allowed to modify it) or they can design their own training set to complete. In addition, they can leave notes on specific movements, i.e. how much weight they used for that one movement, they can edit or delete these entries. 

Users can post suggestion movements that we can consider.

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Project Title** MVP lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

<br>

### Goals

- To create a full CRUD (Frontend and Backend)
- Allow users to keep track of their training
- Have a randomized Training Set
- Have user authentication 
- _etc._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       |        Front-end framework with JavaScript |
|   React Router   |       Handles changing between screens.    |
|     Ruby         | _Lorem ipsum dolor sit amet, consectetur._ |
|     Rails        |       Backend library for SQL database     |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes
[Here](https://whimsical.com/dynamic-TiNQ8pmBberzAgX2UjTs13) is a link that will direct you to my vision for both my browser and mobile look of this application. 

#### Component Tree
[Here](https://whimsical.com/movement-E3U8g7Jwgb29kLT8mLo9DP) is a link that shows the component hierarchy.

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ containers/
      |__ MovementContainer
          |__ MovementContainer.jsx
      |__ JournalContainer
          |__ JournalContainer.jsx
|__ components/
      |__ Header.jsx
      |__ Nav.jsx
      |__ Layout.jsx
      |__ Footer.jsx
|__ screens/
      |__ Home 
          |__ Home.jsx
      |__ PostExercise
          |__ PostExercise.jsx
      |__ DetailsExercise
          |__ DetailsExercise.jsx
      |__ Customization
          |__Customization.jsx
      |__ Profile
          |__ Profile.jsx
      |__ Registeration
          |__ Registeration.jsx
      |__ Login
          |__ Login.jsx
      |__ Training
          |__Training.jsx
      |__ JournalPost
          |__ JournalPost.jsx
      |__ JournalEdit
          |__ JournalEdit.jsx
      |__ JournalDelete
          |__ JournalDelete.jsx

|__ services/
      |__apiConfig.js
      |__movement.js
      |__journal.js
```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Migrations (BE)     |    H     |     0.5 hrs    |     TBA       |     TBD    |
| Controllers (BE)    |    H     |     2 hrs      |     TBA       |     TBD     |
| Models (BE)         |    H     |     0.5 hrs    |     TBA       |     TBD     |
| Routes (BE)         |    H     |     0.5 hrs    |     TBA       |     TBD     |
| Gemfile/Cors (BE)   |    H     |     0.5 hrs    |     TBA       |     TBD     |
| Setup Seed file (BE)|    H     |     3 hrs      |     TBA       |     TBD     |
| Setup Auth      (BE)|    H     |     1 hrs      |     TBA       |     TBD     |
| Setup services (FE) |    H     |     2 hrs      |     TBA       |     TBD     |
| Create Home.jsx (FE)|    H     |     2.5 hrs    |     TBA       |     TBD     |
| Rando Train Form(FE)|    H     |     3 hrs      |     TBA       |     TBD     |
| Login Function (FE) |    H     |     2 hrs      |     TBA       |     TBD     |
| Profile.jsx (FE)    |    H     |     2 hrs      |     TBA       |     TBD     |
| Regist function(FE) |    H     |     2 hrs      |     TBA       |     TBD     |
| Login.jsx (FE)      |    H     |     2 hrs      |     TBA       |     TBD     |
| Regist.jsx (FE)     |    H     |     2 hrs      |     TBA       |     TBD     |
| Journal Post (FE)   |    H     |     2.5 hrs    |     TBA       |     TBD     |
| Journal Edit (FE)   |    H     |     2.5 hrs    |     TBA       |     TBD     |
| Journal Delete (FE) |    H     |     2.5 hrs    |     TBA       |     TBD     |
| Exercise Post (FE)  |    H     |     2.5 hrs    |     TBA       |     TBA     |
| Media Query         |    H     |     3 hrs      |     TBA       |     TBA     |
| Experience Level(FE)|    L     |     3 hrs      |     TBA       |     TBA     |
| Dropdown Selection  |    L     |     3 hrs      |     TBA       |     TBA     |
| Customization       |    L     |     3 hrs      |     TBA       |     TBD     |
| TOTAL               |          |     49 hrs     |     TBA       |     TBD     |

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.