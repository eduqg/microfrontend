# Microfrontend Sample 1

Microfrontend with create-mf-app and module federation.

### SolidJS Host
<img src="./host.png" alt="SolidJS Host" />

### SolidJS Remote
<img src="./remote.png" alt="SolidJS Remote" />

### ReactJS Host
<img src="./react-host.png" alt="ReactJS Host" />

[Video](https://www.youtube.com/watch?v=s_Fs4AXsTnA)

## Getting started

Open host, remote, react-host and

```console
yarn
yarn start
```

Open on 

[http://localhost:8080/](http://localhost:8080/)
[http://localhost:3000/](http://localhost:3000/)
[http://localhost:3001/](http://localhost:3001/)

## Steps made

```console
npx create-mf-app

Select: name, solid-js, tailwind, javascript to remote and host
```

Create counter component on remote

After edit on webpack.config.js

```javascript
exposes: {
  "./Counter": "./src/Counter.jsx"
},
```

This route will have Counter component exposed. Is a manifest of all modules exposed from that remote.

http://localhost:3000/remoteEntry.js

Copy the url and go back to host app webpack config:

```javascript
remotes: {
  remote: "remote@http://localhost:3000/remoteEntry.js"
},
```

After that, go to host and import Counter because is shared.

Creating a new host in react


```console
npx create-mf-app

react
```

Go to remote (solid-js) app and create counterWrapper, then expose it on webpack.config.js.

Import counterWrapper in react-host App.jsx
