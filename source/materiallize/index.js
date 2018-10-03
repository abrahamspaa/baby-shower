import materializeCss from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

export function materiallize () {

  document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('.parallax');

    materializeCss.Parallax.init(elems);
  });

}
