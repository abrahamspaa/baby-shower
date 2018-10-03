import { materiallize } from '../materiallize';
import { initViewer } from './gallery';
import debug from 'debug';

const log = debug('app:log');

if (ENV !== 'production') {
  // Enable the logger.
  debugger;
  console.log(ENV);
  debug.enable('*');
  log('Logging is enabled!');
} else {
  debug.disable();
}

materiallize();
log(initViewer);
