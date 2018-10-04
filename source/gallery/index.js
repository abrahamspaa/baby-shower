import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.min.css';
import './index.css';

export function initViewer ( log ) {

  const pictures = document.querySelector('.docs-pictures');

  const options = {
    // inline: true,
    url: 'data-original',
    ready: function (e) {
      log(e.type);
    },
    show: function (e) {
      log(e.type);
    },
    shown: function (e) {
      log(e.type);
    },
    hide: function (e) {
      log(e.type);
    },
    hidden: function (e) {
      log(e.type);
    },
    view: function (e) {
      log(e.type);
    },
    viewed: function (e) {
      log(e.type);
    },
    zoom: function (e) {
      log(e.type);
    },
    zoomed: function (e) {
      log(e.type);
    }
  };

  new Viewer(pictures, options);

}
