if ('serviceWorker' in navigator) {
  console.log('Service Worker Supported')
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../serviceWorker.js')
      .then(reg => console.log('Service Worker registered'))
      .catch(err => console.log(`Service Worker: Error: ${err}`))
  });
}