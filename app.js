if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js', {scope: 'sw-test'}).then(function(registration) {
    // registration worked
    console.log('Service Worker Registered');
    button.onclick = function() {
      registration.update();
    }
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
};
