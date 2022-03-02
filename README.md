## Overview

**Dynamic** 

Upon visiting Dynamic, guests will be offered a training set to do (default to beginner). Afterwards they will offered to register to create and record their own training sets. It is primarily a 

Users can select their difficultly levels. Users will be offered either the given training set of the day (and be allowed to modify it) or they can design their own training set to complete. In addition, they can leave notes on specific movements, i.e. how much weight they used for that one movement, they can edit or delete these entries. 

Users can post suggestion movements that we can consider.

## MVP

- User aunthentication
- Randomized Training Set
- Media Query
- Full CRUD on front end (With React)
- Full CRUD on backend (With RESTful API)
- Using Flexbox to style with style components
- Base Beginner Level 


<br>

### Goals

- To create a full CRUD (Frontend and Backend)
- Allow users to keep track of their training
- Have a randomized Training Set
- Have user authentication 

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       |        Front-end framework with JavaScript |
|   React Router   |       Handles changing between screens.    |
|     Ruby         | Back-end language for server side logic.   |
|     Rails        |       Backend library for SQL database     |

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

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Migrations (BE)     |    H     |     0.5 hrs    |     1 hrs     |     1 hrs   |
| Controllers (BE)    |    H     |     2 hrs      |     2 hrs     |     2 hrs   |
| Models (BE)         |    H     |     0.5 hrs    |     0.5 hrs   |     0.5 hrs |
| Routes (BE)         |    H     |     0.5 hrs    |     1 hrs     |     1 hrs   |
| Gemfile/Cors (BE)   |    H     |     0.5 hrs    |     0.5 hrs   |     0.5 hrs |
| Setup Seed file (BE)|    H     |     3 hrs      |     2 hrs     |     2 hrs   |
| Setup Auth      (BE)|    H     |     1 hrs      |     2 hrs     |     2 hrs   |
| Setup services (FE) |    H     |     2 hrs      |     1.5 hrs   |     1.5 hrs |
| Create Home.jsx (FE)|    H     |     2.5 hrs    |     3 hrs     |     3 hrs   |
| Rando Train Form(FE)|    H     |     3 hrs      |     3 hrs     |     3 hrs   |
| Login Function (FE) |    H     |     2 hrs      |     1.5 hrs   |     1.5 hrs |
| Regist function(FE) |    H     |     2 hrs      |     1.5 hrs   |     1.5 hrs |
| Login.jsx (FE)      |    H     |     2 hrs      |     2.5 hrs   |     2.5 hrs |
| Regist.jsx (FE)     |    H     |     2 hrs      |     2.5 hrs   |     2.5 hrs |
| Journal Post (FE)   |    H     |     2.5 hrs    |     2 hrs     |     2 hrs   |
| Journal Edit (FE)   |    H     |     2.5 hrs    |     3.5 hrs   |     3.5 hrs |
| Journal Delete (FE) |    H     |     2.5 hrs    |     1.5 hrs   |     1.5 hrs |
| Footer.jsx (FE)     |    H     |     1.5 hrs    |     1 hrs     |     1 hrs   |
| Navbar.jsx (FE)     |    H     |     2 hrs      |     1.5 hrs   |     1.5 hrs |
| Layout.jsx (FE)     |    H     |     2 hrs      |     0.5 hrs   |     0.5 hrs |
| Media Query         |    H     |     3 hrs      |     5 hrs     |     5 hrs   |
| Experience Level(FE)|    L     |     3 hrs      |     TBA       |     TBA     |
| Dropdown Selection  |    L     |     3 hrs      |     TBA       |     TBA     |
| Customization       |    L     |     3 hrs      |     TBA       |     TBD     |
| TOTAL               |          |     47.5 hrs   |     39.5 hrs  |     39.5 hrs|

<br>

### Server (Back End)

#### ERD Model
[Here](https://drive.google.com/file/d/1vpsQez2IdBhQ0ZldFkGd28uHz7ByhV1Q/view?usp=sharing) is the link to my ERD model
<br>

***

## Post-MVP

- Customization for training sets for users
- Experience Level logic to autofill proper exercises
- Utilize transition styling 
- Randomizing sets and reps (Experience Level)
- Time keeping

<!-- ***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution. -->