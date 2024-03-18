# Noah Zeilmann's Portfolio Website

This is the source code for Noah Zeilmann's personal portfolio website, showcasing projects and skills in front-end web development. The site is built with React and Material UI for a sleek, responsive user experience and deployed using Firebase.

## Tools Used

- **React**: A JavaScript library for building user interfaces.
- **Material UI**: A popular React UI framework offering ready-to-use components that follow Material Design.
- **Firebase**: A platform developed by Google for creating mobile and web applications which is used here for hosting the website.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (which comes with [npm](http://npmjs.com)).
- [Firebase CLI](https://firebaseopensource.com/projects/firebase/firebase-tools/)

## Cloning the Repository

To get started with the development environment, clone the repository using the following command:

```bash
git clone https://github.com/zeilmannnoah/noahzeilmann.dev.git
cd noahzeilmann.dev
```

## Installation

After cloning the repository, run the following commands to install the necessary dependencies:

```bash
npm install
```

## Configuration

Create a `.env.local` file in the root of the project and add the following Firebase configuration variables:

```
API_KEY=
AUTH_DOMAIN=
PROJECT_ID=
STORAGE_BUCKET=
MESSAGING_SENDER_ID=
APP_ID=
```

> Note: The values for these variables can be obtained from your Firebase project settings.

## Running the Application

To run the application locally, execute:

```bash
npm start
```

This will start the development server and open the website in your default browser.

## Deployment

To deploy the application using Firebase, first build the production-ready app:

```bash
npm run build
```

Then deploy it to Firebase:

```bash
firebase deploy
```

> Ensure you have the Firebase CLI installed and configured before running the deployment command.
