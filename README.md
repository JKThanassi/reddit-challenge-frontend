# Reddit-2.0 Cisco Challenge README
## Author: Joseph Kaming-Thanassi

Deployed at [reddit-2.joekt.dev](https://reddit-2.joekt.dev/)

### Description:
For this project, I went with react as a front-end framework and react-bootstrap to style my components.

The main components of the app are as follows:
- App.tsx
  - This file contains the code responsible for drawing the main ui (nav bar) and contains logic for contacting the [api](https://github.com/JKThanassi/reddit-challenge-backend).
- components/post/post.tsx
    - This file contains the Post component. This component is responsible for displaying a reddit post in a card style.
- components/post/postContracts.ts
  - This file contains interfaces and enums that define api contracts for the [api](https://github.com/JKThanassi/reddit-challenge-backend)


### Setup and Running:
**Setup**
- To install this app, make sure to have node (`v14.15.4`) installed. 
  - I use [nvm](https://github.com/nvm-sh/nvm) to manage my node installs.
- If you don't have it already, install [yarn]( https://classic.yarnpkg.com/en/docs/install) by running `npm install --global yarn`
- Clone the repository to your machine by running `git clone https://github.com/JKThanassi/reddit-challenge-frontend.git`
- Navigate to the cloned repo and run `yarn install`
  - This command installs all the dependencies for the project
  
**Running Locally**  
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

