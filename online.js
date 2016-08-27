/*! online.js 0.0.1 */
var Online = (function() {

  'use strict';

  // Private

  var options = {
    status: null
  };

  var alert = document.querySelector('.alert');

  function activeAlert(status) {
    if (!status) {
      alert.classList.add('visible');
    } else {
      alert.classList.remove('visible');
    }
  }

  function updateStatus() {
    activeAlert(navigator.onLine ? true : false);
  }

  function init() {

    // TODO: añadir en el DOM la alerta de conexión

    // init status
    activeAlert(navigator.onLine ? true : false);

    // network listeners
    window.addEventListener('online',  updateStatus);
    window.addEventListener('offline', updateStatus);
  }

  init();

  // Public

  return {
    // init : init
  };

})();

(function() {

  'use strict';

  // init Online.js
  // Online.init();

})();
