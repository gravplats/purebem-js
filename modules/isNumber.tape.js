import test from 'tape';

import isNumber from './isNumber';

[
    { name: 'number (falsy)', data: 0 },
    { name: 'number (non-falsy)', data: 1 }
].forEach((fixture) => {
    test(fixture.name, (t) => {
        const result = isNumber(fixture.data);

        t.true(result);
        t.end();
    });
});

[
    { name: 'object', data: {} },
    { name: 'false', data: false },
    { name: 'true', data: true },
    { name: 'string (falsy)', data: '' },
    { name: 'string (non-falsy)', data: 'x' },
    { name: 'array', data: [] },
    { name: 'null', data: null },
    { name: 'undefined', data: undefined },
    { name: 'function', data: function() {} },
    { name: 'symbol', data: Symbol() }
].forEach((fixture) => {
    test(fixture.name, (t) => {
        const result = isNumber(fixture.data);

        t.false(result);
        t.end();
    });
});
