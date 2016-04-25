import test from 'tape';

import purebem from './purebem';


test('custom separator', (t) => {
    const custom = purebem('$', '$$');
    const block = custom('block');

    const result = block('element', ['modifier']);

    t.is(result, 'block$element block$element$$modifier');
    t.end();
});
