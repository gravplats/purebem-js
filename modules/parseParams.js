import isNumber from './isNumber';
import isString from './isString';

import parseModifiers from './parseModifiers';


export default (params) => {
    const hasElement = params.length > 0 && (isNumber(params[0]) || isString(params[0]));
    return hasElement
        ? { element: params[0].toString(), modifiers: parseModifiers(params.slice(1)) }
        : { element: null, modifiers: parseModifiers(params) };
};
