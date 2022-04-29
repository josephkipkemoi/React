# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Linting
Refer to rules used in eslint configuration file 
Additional convenctions to be used addressed below

## File Structure (ROOT)
public - Contains all production build assets and files
src - All Pages and Routes 
[configuration_files e.g. package.json, .gitignore, eslintrc]

## File Structure (src)
Domain Driven Approach will be used for the file structure of all page routes
Each Domain will have all necessary files to run independently without depending on each other
e.g.

src / Common 
* Will contain all common elements/components of a page e.g Buttons, Link styling as Buttons, Header, Footer, NavBar
* Each component/element should be placed in its own folder with descriptive naming e.g. Buttons folder / RegistrationButtonLink, LoginButtonLink, LogoutButtonLink
* Pascale case to be used in naming of folder and filenames

src / Modules
* Will contain all routes main components
* Naming convenctions to be strictly followed 
* Each route should be in its own folder with supporting files ( test files (Help.test.js) , styling (Help.css) etc)

    
