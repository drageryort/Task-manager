const localStorageToObject = (key) => JSON.parse(localStorage.getItem(key));

const formDataToObject = (formData) => {
  let object = {};
  formData.forEach((value, key) => {
    // Reflect.has in favor of: object.hasOwnProperty(key)
    if (!Reflect.has(object, key)) {
      object[key] = value;
      return;
    }
    if (!Array.isArray(object[key])) {
      object[key] = [object[key]];
    }
    object[key].push(value);
  });
  return object;
};

export { localStorageToObject, formDataToObject };
