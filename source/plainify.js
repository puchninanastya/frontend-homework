'use strict';

/**
 * Преобразует вложенные свойства объекта в свойства первого уровня.
 *
 * @param {object} obj Исходный объект, в котором необходимо убрать вложенность свойств.
 * @param {object} resObj Результирущий объект, используется для сохранения результата в рекурсии.
 * @param {string} currentKey Текущий ключ, используется для создания вложенного названия ключа в рекурсии.
 * @return {object} Результирущий объект без вложенности свойств.
 */

function plainify(obj, resObj, currentKey) {
  if (obj === undefined) {
    return null;
  }

  if (resObj === undefined) {
    var resObj = {};
  }

  for (var key in obj) {
    var newKey = ((currentKey === undefined) ? key : currentKey + '.' + key);
    if (typeof obj[key] === 'object') {
      plainify(obj[key], resObj, newKey);
    } else {
      resObj[newKey] = obj[key];
    }
  }

  return resObj;
}
