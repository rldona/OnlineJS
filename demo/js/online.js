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
    var backdrop = document.createElement('div');

    alertDOM.classList.add('online-component');
    alertDOM.classList.add(options.position);
    backdrop.classList.add('backdrop');

    alertDOM.innerHTML = "<p>You're <b>offline</b>. Connect to the internet.</p><i class='loader'></i>";

    document.body.insertBefore(alertDOM,document.body.childNodes[0]);
    document.body.insertBefore(backdrop,document.body.childNodes[0]);
  }

  function remove() {
    var body = document.querySelector('body');
    var alert = document.querySelector('.online-component');
    var backdrop = document.querySelector('.backdrop');

    body.removeChild(alert);
    body.removeChild(backdrop);
  }

  function activate() {
    var alert, backdrop;

    if (!options.status) {
      create();

      alert = document.querySelector('.online-component');
      backdrop = document.querySelector('.backdrop');

      backdrop.classList.add('visible');
      alert.classList.add('visible');

      options.activate = true;
    }

    if (options.activate && options.status) {

      alert = document.querySelector('.online-component');
      backdrop = document.querySelector('.backdrop');

      // reconnect
      alert.classList.add('reconnect');
      alert.innerHTML = "<p class='connected'>You're <strong>online</strong>. You come to have internet.</p>";

      setTimeout(function() {
        alert.classList.remove('visible');
        backdrop.classList.remove('visible');

        options.activate = false;
      }, 1500);

      setTimeout(function() {
        alert.classList.remove('reconnect');
        remove();
      }, 1600);
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