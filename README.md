# Authentication & Private Routing

This template should help get you to create a authentication guard in Vite + Vue js

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Setup BootStrap

```sh
npm install BootStrap
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## About Project

In this project, User log in with there required details such as username, email
& password. After logged In there data are stored in local storage. After logged in
the route are changed to the "Dashboard" Page and there in NavBar the logged out button
appeared. When they changed the route without logged out. The authentication guard restrict
the user to the "Dashboard" page. After logged out then they are be able to change the route
other wise it stuck on the dashboard page. As well without "logged In" they are also not be able to enter in "dashboard page" if they are try to enter in dashboard page without "logged In" the 
alert message appear "You are not be able to enter in Dashboard without logged In".

## Components In Project

Different components used in this project are follows

### NavBar 

Create a navbar using BootStrap with required list items. e.g "log In", "Dashboard", "Sign Out"

### HomePage

In homePage user can see the intro about the project

### Login Page

In login Page user can enter there data in required fields.

### Dashboard

After "logged In" user can enter in dashboard




