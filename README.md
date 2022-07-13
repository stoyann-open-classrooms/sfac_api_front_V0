
# Architecture du projet
Ce projet, dit front-end, est développé avec le Framework React il est connecté à un service API back-end que vous devez aussi lancer en local.
Le projet back-end se trouve ici : https://github.com/stoyann-open-classrooms/sfac_api_back_V0


# Organisation de l'espace de travail.

Pour une bonne organisation, vous pouvez créer un dossier **sfac_app** dans lequel vous allez cloner le projet back-end et par la suite, le projet front-end :

Clonez le projet back-end dans le dossier **sfac-app** :

```
$ git clone https://github.com/stoyann-open-classrooms/sfac_api_back_V0.git
```

```
sfac-app/
   - sfac_api_front_V0
```

Clonez le projet frontend dans le dossier bill-app :

```
$ git clone https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-Front.git
```

```
sfac-app/
   - sfac_api_front_V0
   - sfac_api_back_V0
```
## Lancer l'application en local ?

### étape 1 - Lancer le backend :

Suivez les indications dans le README du projet [https://github.com/stoyann-open-classrooms/sfac_api_back_V0](backend) .

### étape 2 - Lancer le frontend :

Allez au repo cloné :
```
cd sfac_api_front_V0
```

Installez les packages npm (décrits dans `package.json`) :
```
npm install
```

### étape 3 - Lancer l'application en local :

```
npm start
```

## L'application est disponible sur le port : [http://localhost:3000](http://localhost:3000)


============================================================================
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
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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
