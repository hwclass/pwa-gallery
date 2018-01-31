# PWA Gallery

An application with SSR and offline support based on PWA approach

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

- Node.js (>=8.0.0)
- npm (>=5.0.0)

### Installing

A step by step series of examples that tell you have to get a development env running

Before installing the dependencies, make sure that you have the proper Node.js and npm installed on your system:

```
node -v
```

```
npm -v
```

Optionally, we have a .[nvmrc](https://github.com/creationix/nvm) file in the root and you can install the minimum requirements on your system by the following command:

```
nvm install
nvm use <NODE-JS-VERSION>
```

Now you can install the dependencies:

Run install command

```
npm install
```

And after it is finished, run the following command:

```
npm run dev
```

If you want to run the app with a production build, run the following command:
```
npm run build
```

## Running the tests

We are using ./__test__ directory to store specs. Now, only tests for components and pages are added basically.
Additionally we have snapshot tests for them as well.

To give a shoot, just run the following command:

```
npm run test
```

If you are having problems generating actual snapshots, just clean your babel cache and run the command again. If you're too lazy, run the following one:

```
npm test -u
```

## Deployment

Upon request, the best platform such an app is [now](https://zeit.co/now).

## Built With

* [Next](https://zeit.co/blog/next) - The web framework based on Node.js with SSR support
* [React](https://reactjs.org/) - The view library for managing client-side flow
* [styled-jsx](https://github.com/zeit/styled-jsx) - Styles for JSX without compremises
* [Jest](https://facebook.github.io/jest/) - The testing framework supporting snapshot tests


## Authors

* **Baris Guler** - *Initial work* - [hwclass](https://github.com/hwclass)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

This project is based on some experimental approaches.
