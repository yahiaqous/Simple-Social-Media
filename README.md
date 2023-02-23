<!-- @format -->

<!-- README Template Source => https://www.grepper.com/tpc/readme+template/273816 -->

# Simple Social Media

Simple Social Media app with Home and Auth pages created using React library and [{JSON} Placeholder API](https://jsonplaceholder.typicode.com/).

[Website Live Link](https://ssm-simple-social-media.netlify.app)

## Table of Contents

- [Simple Social Media](#simple-social-media)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
    - [Task Description Provided By Digitinary](#task-description-provided-by-digitinary)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [Demo Video](#demo-video)
  - [Setup](#setup)
  - [Features to be Added](#features-to-be-added)
  - [Acknowledgements](#acknowledgements)
  - [Contact](#contact)

## General Information

- Simple Social Media app displays posts' data and comments provided from the API.
- Technical assignment requested by Digitinary for the application of **React Developer** position.

### Task Description Provided By Digitinary

> ReactJs Code Challenge Details:
>
> 1. Create a new react application using material UI.
> 2. Create a Login page and manage the use session without using 3rd party library. Users Endpoint => <https://jsonplaceholder.typicode.com/users>
> 3. Create user posts page where to support: <https://jsonplaceholder.typicode.com/posts>
>
>    - Retrieve all posts, the design should be as a card which contains the post contents, each post should have all comments under it with the same card.
>    - Add post, an action at the top of the page, this should on a dialog to add a new post and immediately show it the posts page.
>    - Delete post, should display a confirmation dialog only to confirm the deletion, the action should be on the post card itself.
>    - Modify post, should open the same post dialog, the action should be on the post card itself.
>
> Note: for more details about the APIs specs, please check <https://jsonplaceholder.typicode.com>

## Technologies Used

- [React Library](https://reactjs.org) | A JavaScript library for building user interfaces.

- [React Hooks](https://reactjs.org/docs/hooks-intro.html) |
  [State Hook](https://reactjs.org/docs/hooks-state.html),
  [Effect Hook](https://reactjs.org/docs/hooks-effect.html), and
  [Refs Hook](https://reactjs.org/docs/refs-and-the-dom.html).

- [React Router Dom Library](https://reactrouter.com/en/main) |
  [BrowserRouter](https://reactrouter.com/en/main/router-components/browser-router),
  [Router](https://reactrouter.com/en/main/router-components/router),
  [Route](https://reactrouter.com/en/main/components/route),
  [Routes](https://reactrouter.com/en/main/components/routes),
  [Navigate](https://reactrouter.com/en/main/components/navigate), and
  [Outlet](https://reactrouter.com/en/main/components/outlet)

- [Fetch API](https://javascript.info/fetch-api) | To make requests to [{JSON} Placeholder](https://jsonplaceholder.typicode.com) in order to fetch data.

- [Material-UI Components](https://react-bootstrap.github.io) |
  [AppBar](https://mui.com/material-ui/api/app-bar),
  [Box](https://mui.com/material-ui/api/box),
  [Button](https://mui.com/material-ui/api/button),
  [Card](https://mui.com/material-ui/api/card),
  [CardActions](https://mui.com/material-ui/api/card-actions),
  [CardContent](https://mui.com/material-ui/api/card-content),
  [CardHeader](https://mui.com/material-ui/api/card-header),
  [Collapse](https://mui.com/material-ui/api/collapse),
  [Dialog](https://mui.com/material-ui/api/dialog),
  [DialogActions](https://mui.com/material-ui/api/dialog-actions),
  [DialogContent](https://mui.com/material-ui/api/dialog-content),
  [DialogContentText](https://mui.com/material-ui/api/dialog-content-text),
  [DialogTitle](https://mui.com/material-ui/api/dialog-title),
  [Divider](https://mui.com/material-ui/api/divider),
  [Drawer](https://mui.com/material-ui/api/drawer),
  [Grid](https://mui.com/material-ui/api/grid),
  [IconButton](https://mui.com/material-ui/api/icon-button),
  [Link](https://mui.com/material-ui/api/link),
  [List](https://mui.com/material-ui/api/list),
  [ListItem](https://mui.com/material-ui/api/list-item),
  [ListItemButton](https://mui.com/material-ui/api/list-item-button),
  [ListItemText](https://mui.com/material-ui/api/list-item-text),
  [Tab](https://mui.com/material-ui/api/tab),
  [Tabs](https://mui.com/material-ui/api/tabs),
  [TextField](https://mui.com/material-ui/api/text-field),
  [Toolbar](https://mui.com/material-ui/api/toolbar), and
  [Typography](https://mui.com/material-ui/api/typography)

- [Material-UI Icons](https://react-icons.github.io/react-icons) |
  [DeleteOutlineOutlinedIcon](https://mui.com/material-ui/material-icons/?selected=DeleteOutlineOutlined),
  [EditOutlinedIcon](https://mui.com/material-ui/material-icons/?selected=EditOutlined),
  [ExpandMoreIcon](https://mui.com/material-ui/material-icons/?selected=ExpandMore), and
  [MenuIcon](https://mui.com/material-ui/material-icons/?selected=Menu)

- [React Toastify Library](https://fkhadra.github.io/react-toastify/introduction) |
  [ToastContainer](https://fkhadra.github.io/react-toastify/api/toast-container) and
  [toast](https://fkhadra.github.io/react-toastify/api/toast)

## Features

- User can not access the posts page before login or signup.

<div align="center">
  <img src='https://user-images.githubusercontent.com/80676788/220989379-fcc0fa4a-cbb1-4bbb-a2f5-b7ba566f861d.gif' alt='Protected Routes Handler' width='75%'/>
</div>
<br />

- User can login with his email "One of the existing in the API" in order to explore the posts.

<div align="center">
  <img src='https://user-images.githubusercontent.com/80676788/220989896-3177b0fd-9e1f-4e6e-9ef9-df183956f537.gif' alt='Auth Page Login' width='75%'/>
</div>
<br />

- User can signup with his email "Not existing in the API" in order to explore the posts.

<div align="center">
  <img src='https://user-images.githubusercontent.com/80676788/220990383-4cec5966-2042-4166-912e-f28e9cb6be40.gif' alt='Auth Page Signup' width='75%'/>
</div>
<br />

<div align="center">
  <img src='https://user-images.githubusercontent.com/80676788/220992714-301e4697-6dfd-424d-9ad8-00608d7d3b47.gif' alt='Prevent Signup with Existing Email' width='75%'/>
</div>
<br />

- User can explore all posts with their comments.

<div align="center">
  <img src='https://user-images.githubusercontent.com/80676788/220990910-f7db917c-af06-46e5-b582-56b2694fa6c1.gif' alt='Posts and Comments Cards' width='75%'/>
</div>
<br />

- User can create a new post and see it directly.

<div align="center">
  <img src='https://user-images.githubusercontent.com/80676788/220991420-ba0b24df-d1db-4b22-87a6-87f44b3daf63.gif' alt='Add Post Button and Dialog' width='75%'/>
</div>
<br />

- User can modify only his posts.

<div align="center">
  <img src='https://user-images.githubusercontent.com/80676788/220991941-56b66d97-aa35-45d9-a092-c0c80a7984a7.gif' alt='Update Post Button and Dialog' width='75%'/>
</div>
<br />

- User can delete only his posts.

<div align="center">
  <img src='https://user-images.githubusercontent.com/80676788/220992335-44549108-3fe2-4a27-a458-6784521610bb.gif' alt='Delete Post Button and Dialog' width='75%'/>
</div>
<br />

## Demo Video

[Full Demo Video](https://drive.google.com/file/d/1V-auKs3tqRemW5FjUHavExpUsWf6FLng/view?usp=sharing)
<br />

## Setup

```bash
$ git clone git@github.com:yahiaqous/Simple-Social-Media.git
$ cd Simple-Social-Media
Simple-Social-Media git:(main)$ npm i
Simple-Social-Media git:(main)$ npm start
```

## Features to be Added

- Add pagination to the posts or request data based on user scrolling.
- Add interactive styling and modern colors to the posts page.
- Design and develop the Footer component.
- Add "Return to Top" button.
- Create loading component until fetching data.
- Create API errors handler.
- Translate the API data to English.
- Create Dark mode button.

## Acknowledgements

- This project was inspired and requested by Digitinary.
- This [Auth Page Example](https://mdbootstrap.com/docs/standard/extended/login) inspired me with the page layout and design.
- This [Stack Overflow Answer](https://stackoverflow.com/a/45905418) helped me how to navigate to the page end.
- This [W3School Tutorial](https://www.w3schools.com/js/js_cookies.asp) helped me how to manage the user session and cookies using Document object without 3rd parties.
- This [Tip](https://dev.to/rajeshroyal/page-not-found-error-on-netlify-reactjs-react-router-solved-43oa) for fixing the React Single Page Application deployed on Netlify.

## Contact

Created by [Yahia Qous](https://github.com/yahiaqous) - feel free to contact me!
