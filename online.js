/*! online.js 0.0.1 */
var Online = (function() {

  'use strict';

  // Private
  var options = {
    activate: false,
    status: navigator.onLine ? true : false,
    position: 'top'
  };

  function create() {
    var alertDOM = document.createElement('div');

    alertDOM.classList.add('online-component');
    alertDOM.classList.add(options.position);

    alertDOM.innerHTML = '<p>Connection lost. Reconnecting...</p><i class="loader"></i>';

    document.body.insertBefore(alertDOM,document.body.childNodes[0]);
  }

  function remove() {
    var body = document.querySelector('body');
    var alert = document.querySelector('.online-component');

    body.removeChild(alert);
  }

  function activate() {
    var alert = document.querySelector('.online-component');

    if (!options.status) {
      create();
      alert = document.querySelector('.online-component');
      alert.classList.add('visible');
      options.activate = true;
    }

    if (options.activate && options.status) {
      // reconnect
      alert.classList.add('reconnect');
      alert.innerHTML = '<p class="connected">Your device is connected to the internet</p>';

      setTimeout(function() {
        alert.classList.remove('visible');
        options.activate = false;
      }, 3000);

      setTimeout(function() {
        alert.classList.remove('reconnect');
        remove();
      }, 3100);
    }
  }

  function updateStatus() {
    options.status = navigator.onLine ? true : false;

    activate();
  }

  var init = (function init() {
    // network listeners
    window.addEventListener('online',  updateStatus);
    window.addEventListener('offline', updateStatus);

    // init alert
    activate(options.status);
  })();

  // Public

  function getStatus() {
    return options.status;
  }

  return {
    getStatus: getStatus
  };

})();