## Description:
#### Search and History Pages:
After entering song name, it will lazily send get requests to the iTunes Search API.
It is implemented using useDebounce hook, after 1 sec send request with last entered song name.
#### Statistics
For every favourite track, it scans artistId, add them to array, count them, sort by count and slice 5 elements. Fetch all albums by these 5 artists, discard all singles and make a graph with all albums and artists as nodes and edges connected by artistId of an album, so albums and artists are connected.
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