# People

A contact list app built with **React Native** (Expo) as a learning project —
the author's first React Native app, developed before moving on to Flutter.

![App icon](assets/icon.png)

## What it does

- Fetches a list of 150 Brazilian users from the [Random User API](https://randomuser.me/).
- Shows a scrollable contact list (`FlatList`) with a loading state.
- Opens a detail page per contact.

## Structure

- `App.js` — navigation setup (`react-navigation` stack).
- `src/pages/` — `PeoplePage` (list) and `PeopleDetailPage` (detail).
- `src/components/` — `PeopleList`, `PeopleListItem`, `Line`, `Header`.
- `src/utils/` — small helpers (e.g. `capitalizeFirstLetter`).

## How to run

Built with Expo SDK 31 (2019), so it requires an old toolchain to run today:

```sh
yarn install
yarn start   # opens the Expo dev server
```

> **Note:** the project uses legacy React Navigation v3 and Expo SDK 31 and is
> not compatible with current Expo/React Native versions without a migration.
> It is kept as a historical record of the author's learning path.

## Technologies

- [React Native](https://reactnative.dev/) + [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/) v3
- [axios](https://github.com/axios/axios)

## Author

- **Robson Silva** — [robsonsilv4](https://github.com/robsonsilv4)
