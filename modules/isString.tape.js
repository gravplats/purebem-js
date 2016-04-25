import test from 'tape';

import isString from './isString';

[
    { name: 'string (non-falsy)', data: 'x' }
].forEach((fixture) => {
    test(fixture.name, (t) => {
        const result = isString(fixture.data);

        t.true(result);
        t.end();
    });
});

[
    { name: 'object', data: {} },
    { name: 'false', data: false },
    { name: 'true', data: true },
    { name: 'number (falsy)', data: 0 },
    { name: 'number (non-falsy)', data: 1 },
    { name: 'string (falsy)', data: '' },
    { name: 'array', data: [] },
    { name: 'null', data: null },
    { name: 'undefined', data: undefined },
    { name: 'function', data: function() {} },
    { name: 'symbol', data: Symbol() }
].forEach((fixture) => {
    test(fixture.name, (t) => {
        const result = isString(fixture.data);

        t.false(result);
        t.end();
    });
});
