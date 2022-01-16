const unique = (arr) => {
  return [...new Set(arr)]
}

// uses lodash
function isEmptyDeep(obj) {
  if (isObject(obj)) {
    if (Object.keys(obj).length === 0) return true
    return every(map(obj, v => isEmptyDeep(v)))
  } else if (isString(obj)) {
    return !obj.length
  }
  return false
}

const intersection = arr => {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (i === 0) {
      result = arr[0];
    } else arr[i] = result;
    result = arr[i].filter(el => arr[i + 1].includes(el));
  }
  return result;
};
