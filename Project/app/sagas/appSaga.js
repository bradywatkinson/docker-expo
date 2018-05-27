import { takeLatest, fork } from 'redux-saga/effects';

import { FOREGROUND } from 'app/middlewares/redux-event-listener';


function* foregroundHandler() {
  console.log('App is foreground'); // eslint-disable-line no-console
}

function* foregroundWatcher() {
  yield takeLatest(
    FOREGROUND,
    foregroundHandler,
  );
}

function* main() {
  yield fork(foregroundWatcher);
}

export default main;
