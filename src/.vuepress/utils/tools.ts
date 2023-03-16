import store from 'store';

export const mStorage = store;
export const LoadImage = (url) => {
  var img = new Image();
  img.src = url;
  img.onload = () => {};
};

function clearAllCookie() {
  var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    for (var i = keys.length; i--; ) document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
  }
}

export const CheckStorage = () => {
  const nowTime = Date.now() - 0;

  const localTime = mStorage.get('LastStoreDataTime');
  if (!(localTime - 0)) {
    mStorage.set('LastStoreDataTime', nowTime);
    return;
  }

  const Diff = nowTime - localTime;

  if (Diff > 86400000) {
    mStorage.clearAll();
    document.cookie = '';
    clearAllCookie();
    window.location.reload();
  }
};
