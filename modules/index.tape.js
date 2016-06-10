import test from 'tape';

import purebem from './index';


test('purebem with no arguments', (t) => {
    const result = purebem();

    t.is(result, '');
    t.end();
});

test('purebem with element', (t) => {
    const result = purebem('block', 'element');

    t.is(result, 'block__element');
    t.end();
});

test('purebem with element/modifiers', (t) => {
    const result = purebem('block', 'element', ['modifier']);

    t.is(result, 'block__element block__element--modifier');
    t.end();
});


const block = purebem('block');

test('block', (t) => {
    const result = block();

    t.is(result, 'block');
    t.end();
});

test('block with element', (t) => {
    const result = block('element');

    t.is(result, 'block__element');
    t.end();
});

test('block with object modifiers', (t) => {
    const result = block({ modifier1: true, modifier2: true, modifiers3: false });

    t.is(result, 'block block--modifier1 block--modifier2');
    t.end();
});

test('block with array modifiers', (t) => {
    const result = block(['modifier1', 'modifier2']);

    t.is(result, 'block block--modifier1 block--modifier2');
    t.end();
});

test('block with multiple array/object modifiers', (t) => {
    const result = block({ modifier1: true }, ['modifier2'], { modifiers3: false });

    t.is(result, 'block block--modifier1 block--modifier2');
    t.end();
});

test('block with element and object modifiers', (t) => {
    const result = block('element', { modifier1: true, modifier2: true, modifiers3: false });

    t.is(result, 'block__element block__element--modifier1 block__element--modifier2');
    t.end();
});

test('block with element and array modifiers', (t) => {
    const result = block('element', ['modifier1', 'modifier2']);

    t.is(result, 'block__element block__element--modifier1 block__element--modifier2');
    t.end();
});

test('block with element and multiple array/object modifiers', (t) => {
    const result = block('element', { modifier1: true }, ['modifier2'], { modifiers3: false });

    t.is(result, 'block__element block__element--modifier1 block__element--modifier2');
    t.end();
});
