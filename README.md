# pwa
A progressive web app primer with react. Inspired from https://github.com/rwieruch/minimal-react-webpack-babel-setup

## Getting started
Setting up basic dependencies in package.json

* Install dependencies with `npm i`
* Run with **hmr** enabled `npm start`
* Build a production ready version `npm run build`
* Deploy to github pages `npm run deploy`

## Tags
1. v1.0-basic - **React, Babel & Webpack**
2. v1.1-hmr - **Hot module replacement**
3. v1.2-eslint - **eslint**
4. v1.3.0-router-client - **Client side routing**
5. v1.3.1-router-server - **Server side routing**
6. v1.3.2-router-config - **Routes config**
7. v1.4-ssr - **Server side rendering**

### More about Git Tags
To mark a specific point in history as important, use git tags.
- `git tag` to show list of tags
- `git tag -a <tagname> -m <tagmessage>` to create an annotated tag
- `git show <tagname>` to display the annotated tag
- `git push origin <tagname>` Publish the tag. By default, the git push command doesn’t transfer tags to remote servers

### Renaming tags
- `git tag <newtag> <oldtag>`
- `git push --tags`
- `git push origin :refs/tags/<oldtag>` delete the old tag from remote
- `git tag -d <oldtag>` delete it from local

## _TODO_
progressive web app, service workers, asset management, css loaders, code splitting and more coming..