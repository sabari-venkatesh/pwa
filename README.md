# pwa
A progressive web app primer with react. Inspired from https://github.com/rwieruch/minimal-react-webpack-babel-setup

## Getting started
Setting up basic dependencies in package.json

Install dependencies with
`npm i`

## Git Tags
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

## Tags
1. v1.0-basic - **React, Babel & Webpack**
2. v1.1-hmr - **Hot module replacement**
3. v1.2-eslint - **eslint**
4. v1.3-client-router - **Client side routing**
5. v1.4-server-router - **Server side routing**

##_TODO_ 
route config, server side rendering, progressive web app, service workers, asset management, css loaders, code splitting and more coming..