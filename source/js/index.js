import { materiallize } from '../materiallize';
import { initViewer } from '../gallery';
import debug from 'debug';

const log = debug('app:log');

log(ENV);

if (ENV !== 'production') {
  // Enable the logger.
  debug.enable('*');
  log('Logging is enabled!');
} else {
  debug.disable();
}


window.onload = () => {
    // Blocking image download
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    }, false);

    document.addEventListener("keydown", function(e) {

      // "I" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
      }
      // "J" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
      }
      // "S" key + macOS
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
      // "U" key
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
      }
      // "F12" key
      if (event.keyCode == 123) {
        disabledEvent(e);
      }
    }, false);

    function disabledEvent(e){

      if (e.stopPropagation){
        e.stopPropagation();
      } else if (window.event){
        window.event.cancelBubble = true;
      }

      e.preventDefault();

      return false;
    }
  };

materiallize();
initViewer();
