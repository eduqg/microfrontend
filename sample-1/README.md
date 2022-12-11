# Microfrontend Sample 1

Microfrontend with create-mf-app and module federation.

https://www.youtube.com/watch?v=s_Fs4AXsTnA

## Steps

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

````

```console

````

```console

```

```console

```

```console

```

```console

```

```console

```

```console

```
