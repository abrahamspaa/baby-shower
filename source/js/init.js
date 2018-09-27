import '../css/style.css';
import $ from 'jquery';
import 'node_modules/materialize-css/dist/js/materialize.js';

// Enable LiveReload
if (ENV !== 'production') {
  document.write(
    '<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>'
  );
}

$('.sidenav').sidenav();
$('.parallax').parallax();
