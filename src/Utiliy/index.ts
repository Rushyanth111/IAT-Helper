// https://stackoverflow.com/questions/44203045/remove-fields-from-typescript-interface-object
function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
  const copy = {} as Pick<T, K>;
  keys.forEach((key) => (copy[key] = obj[key]));

  return copy;
}

export {pick};
