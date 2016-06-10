import parseParams from './parseParams';

import isNumber from './isNumber';
import isString from './isString';


export default (elementSeparator = '__', modifierSeparator = '--') => {
    const purebem = (block) => (...params) => {
        if (!isNumber(block) && !isString(block)) {
            return '';
        }

        const { element, modifiers } = parseParams(params);

        const base = element !== null ? `${block}${elementSeparator}${element}` : `${block}`;
        const additional = modifiers.map((modifier) => `${base}${modifierSeparator}${modifier}`);

        return [base, ...additional].join(' ');
    };

    return (...params) => {
        if (params.length === 0) {
            return '';
        }

        const block = purebem(params[0]);
        return params.length === 1 ? block : block(...params.slice(1));
    };
};
