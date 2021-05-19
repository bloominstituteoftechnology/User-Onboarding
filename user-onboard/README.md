# Getting Started with Create React App

### Task 1: Set Up The Project

- [ ] Start off by installing a blank React app by running `npx create-react-app <app-name> --use-npm`.
- [ ] Using `npm`, add the following as dependencies inside your React app:
  - `yup`
  - `axios`
- [ ] Create a component file called `Form.js`, import it into your `App.js` file, and place the component in your JSX there.

### Task 2: MVP

#### Create Your Advanced Form

We want to create a form to onboard a new user to our system. We need _at least_ the following pieces of information about our new user:

- [ ] Name
- [ ] Email
- [ ] Password
- [ ] Terms of Service (checkbox)
- [ ] A Submit button to send our form data to the server.

#### Implement Form Validation and Error Messaging

Form validation is one of the facets of an application that makes it feel polished and controlled from a user perspective. With that in mind, implement the following:

- [ ] Using Yup, set up _at least_ two different validations along with custom error messages that will display on screen when validation fails.

#### Make a POST Request

Being able to `POST` data is a key skill of any developer, no matter your skill level.

- [ ] Craft a `POST` request using `axios` that sends your form data to the following endpoint: _`https://reqres.in/api/users`_
- [ ] Verify using a `console.log()` that you are receiving a successful response back

(Note: For those that are curious, we're using [reqres.in](https://reqres.in/) for this assignment's API. It's a free API that allows us to simulate a `POST` request for any data that we send it. Pretty awesome!)

#### Display Returned Data to Screen

When you get your data back, you will want to do something with it, right? Let's display a list of users in our app.

- [ ] Set up a state property called `users` that is initialized with an empty array
- [ ] Every time you make a `POST` request, and get that new user data back, update your `users` state with the new user added to the array
- [ ] Render `users` in your app. You can use the html pre tag and JSON.stringify() method to display your post request.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
