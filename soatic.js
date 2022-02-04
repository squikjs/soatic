export default undefined;

export function* iter(iterable = {}, callback = (key, value) => [key, value]) {
  for (let key of Object.keys(iterable)) {
    let value = iterable[key];
    yield callback(key, value);
  }
}

Number.prototype[Symbol.iterator] = function () {
  if (this < 0) throw new RangeError("Number iterator can't be below 0");
  return iter([...Array(this).keys()], (_, n) => n);
};

Object.prototype[Symbol.iterator] = function (callback = (key, value) => [key, value]) {
  return iter(this, callback);
};
