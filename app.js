if ('serviceWorker' in navigator) {
     navigator.serviceWorker
     .register('./service-worker.js')
     .then(function() { 
       alert('Service Worker Registered'); 
     });
} else {
     alert('not Registered');
}
