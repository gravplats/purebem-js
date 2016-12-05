import isNumber from './isNumber';
import isObject from './isObject';
import isString from './isString';


const convertCamelCase = (key) => {
    return key.replace(/([a-z](?=[A-Z]))/g, '$1-').toLowerCase();
};

const fromKeyOrValue = (key, value) => {
    return isNumber(value) || isString(value) ? value.toString() : convertCamelCase(key.toString());
};

const isValidArrayItem = (value) => {
    return isNumber(value) || isString(value);
};

const isValidObjectPropertyValue = (value) => {
    return isNumber(value) || isString(value) || value === true;
};

const parseArrayItem = (obj) => {
    if (Array.isArray(obj)) {
        return obj
            .filter(isValidArrayItem)
            .map((item) => item.toString());
    }

    if (isObject(obj)) {
        return Object.keys(obj)
            .filter((key) => isValidObjectPropertyValue(obj[key]))
            .map((key) => fromKeyOrValue(key, obj[key]));
    }

    return [];
};

const reduceArray = (prev, curr) => {
    const modifiers = parseArrayItem(curr);
    return [...prev, ...modifiers];
};

export default (array) => {
    return array.reduce(reduceArray, []);
};
