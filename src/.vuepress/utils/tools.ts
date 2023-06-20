import store from 'store';

export const mStorage = store;

export const LoadImage = (url) => {
  const img = new Image();
  img.src = url;
  img.onload = () => {};
};

function clearAllCookie() {
  const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    for (let i = keys.length; i--; ) document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
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
    clearAllCookie();
  }
};
