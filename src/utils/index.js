// What's this you ask, well this is low footprint uuidv4 generator
export const uuidx = (a, b) => {
  for (
    b = a = '';
    a++ < 36;
    b +=
      (a * 51) & 52
        ? (a ^ 15 ? 8 ^ (Math.random() * (a ^ 20 ? 16 : 4)) : 4).toString(16)
        : '-'
  );
  return b;
};

// debounce
export const debounce = (fn, wait) => {
  let timeout;

  return function() {
    let callback = () => fn.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(callback, wait);
  };
};

// random string of length
export const randomString = length =>
  (
    Math.random()
      .toString(36)
      .substring(2, 2 + length) + '0'.repeat(length)
  ).substring(0, length);
