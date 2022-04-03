## Description:
#### Search and History Pages:
After entering song name, it will lazily send get requests to the iTunes Search API.
It is implemented using useDebounce hook, after 1 sec send request with last entered song name.
#### Statistics
to be continued...
## Installation:
Install NodeJS(version provided in `.nvmrc`)

If you have `nvm` you can install NodeJS by running these commands:
```
nvm install
nvm use
```
After that install dependencies:
```
npm install
```
To run the development server:
```
npm start
```
Stack:
* React
* Typescript
* Redux
* Material UI
* Vite
* eslint + prettier

Requirements are written in `Schwarzthal Tech FE A.html` file. It can be safely deleted