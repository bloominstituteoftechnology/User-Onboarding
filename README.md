# Module Project: Advanced Form Management - User Onboarding
## Project Description

We've seen many different styles of form management by now -- simple to complex. Today we are going to unleash your inner form-wizard! 🧙

## Set Up The Project

- [ ] Start off by installing a blank React app by using Create React App.
- [ ] Add the following as dependencies inside your React app:
  - `formik`
  - `yup`
  - `axios`
- [ ] Create a component file called `Form.js`, import it into your `App.js` file, and place the component in your JSX there.

## STEP 1 - Create Your Formik Form

We want to create a form to onboard a new user to our system. We need _at least_ the following pieces of information about our new user:

- Name
- Email
- Password
- Terms of Service (checkbox)
- A Submit button to send our form data to the server.

## STEP 2 - Implement Form Validation and Error Messaging

Form validation is one of the facets of an application that makes it feel polished and controlled from a user perspective. With that in mind, implement the following:

- Using Yup, set up _at least_ two different validations for each field along with custom error codes that will display on screen when validation fails.

## STEP 3 - Make a POST Request

Being able to `POST` data is a key skill of any developer, no matter your skill level.

- Craft a `POST` request using `axios` that sends your form data to the following endpoint: _https://reqres.in/api/users_
- Verify using a `console.log()` that you are receiving a successful response back

(Note: For those that are curious, we're using [reqres.in](https://reqres.in/) for this assignment's API. It's a free API that allows us to simulate a `POST` request for any data that we send it. Pretty awesome!)

## STEP 4 - Display Returned Data to Screen

When you write your `POST` requests in the coming months, you will be manipulating your data in all sorts of cool ways. Today, we will just verify that the information is coming in correctly by using a simple pop-up alert with your returned user data:

- Create an alert with the user information using the following syntax: `window.alert(<SERVER RESPONSE GOES HERE>)`

More information about alerts in JavaScript can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert).

## Stretch Goals

The following are stretch goals that you should attempt _after_ you meet MVP for your project:

- Add basic styling to your form in your app. Make it look pretty with any styling method you choose.
- Implement a dropdown menu in your Formik form.
- Create 3 new inputs inside your Formik form of your choice along with corresponding validation and error messaging
- Add to your existing handling so that, if a user inputs their email as `waffle@syrup.com`, they receive an error message in their form that says _"That email is already taken."_
