/* https://hackernoon.com/routing-in-react-the-uncomplicated-way-b2c5ffaee997 */
const onChangeListeners = [];

let l = 0;

function push(pathname) {
  window.history.pushState({}, '', pathname);
  l += 1;

  onChangeListeners.forEach(callback => callback(pathname));
}

function canGoBack() {
  return l > 0;
}

window.onpopstate = () => {
  l -= 1;
  onChangeListeners.forEach(callback => callback(window.location.pathname));
};

export default {
  push,
  onChange: cb => onChangeListeners.push(cb),
  canGoBack,
};
