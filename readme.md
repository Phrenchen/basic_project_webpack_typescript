setup project:
npm install

npm run start
- serves dist/index.html at localhost:8080
- observes changes to
    - ts, html, css files
- does NOT create a physical bundle.js file! 

npm run build
creates new bundle.js in dist folder



KNOWN ISSUES / TODOs:

- does each subfolder in dist folder need to be added to contentBase? how to avoid this?
