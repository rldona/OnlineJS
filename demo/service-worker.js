if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then((registration) => {
    // Registration was successful
    console.log('ServiceWorker registred: ', registration.scope);
  }).catch((err) => {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}