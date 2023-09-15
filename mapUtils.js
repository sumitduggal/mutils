const mapSetGet = (map, key, value, d = []) => {
  if (!map.has(key)) {
    map.set(key, d);
  }
  let valueToSet = null;
  if (Array.isArray(d)) {
    valueToSet = [...map.get(key), value];
  } else {
    valueToSet = value;
  }
  if (value) {
    map.set(key, valueToSet);
  }

  return map.get(key);
};

const mapToArray = (map, signature) => {
  const mapFn = signature
    ? signature
    : ([key, value]) => ({ name: key, value: value });
  return Array.from(map, mapFn);
};
