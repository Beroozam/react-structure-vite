export function filterUndefinedKeys<T extends object>(obj):object {
  const filteredObj = {};

  for (const key in obj) {
    if (obj[key] !== undefined) {
      filteredObj[key] = obj[key];
    }
  }

  return filteredObj;
}

export function filterUndefinedKeysSecondWay<T extends object>(obj):object {
  return Object.fromEntries(Object.entries(obj).filter(([key, value]) => value !== undefined));
}

export function filterUndefinedKeysThirdWay<T extends object>(obj):object {
  let filteredObj = {};

  for (const key in obj) {
    filteredObj = {...filteredObj , ...( (obj[key] !== undefined) && {[key]:obj[key]} )}
  }

  return filteredObj;
}
