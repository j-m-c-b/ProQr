var GHPATH = '/ProQr';
 
// Choose a different app prefix name
var APP_PREFIX = 'proQ';
 
// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_01';
 
// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
 // `${GHPATH}/caDupli-master/files/JSON/consult.html`
  //`${GHPATH}/caDupli-master/files/JSON/html5-qrcode.min.js`
]