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

- css changes in subfolders are ignored