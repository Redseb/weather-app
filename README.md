# The Weather App

A React Native weather app built using [Expo](https://docs.expo.dev/), [MobX](https://mobx.js.org/README.html), and [Typescript](https://www.typescriptlang.org/).

This app was made to learn MobX, and how to use it in the context of a React Native app. The app uses GPS to locate the user, and then based off of the received coordinates queries an API for weather information.

Uses [Open-Meteo](https://open-meteo.com/) for weather data, hence no requirement for an API-key.

## Running Locally

In the root directory

```bash
  npm install
  expo start
```

Next, scan the QR code using the _Expo Go_ app.

## Future Improvements

Due to time limitations this project could be improved:

-   I would wrap the stores in a custom hook.

```js
const [store] = useStore();
```

-   I would choose a different API provider, as the returned format is awkward.
    -   _(I chose the option with no API key for easier showcasing)_

## Appendix

Only confirmed to work on Android.

The app requires location permissions.
