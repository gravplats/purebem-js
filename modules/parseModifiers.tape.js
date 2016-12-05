import test from 'tape';

import parseModifiers from './parseModifiers';


test('empty object', (t) => {
    const modifiers = parseModifiers([{}]);

    t.same(modifiers, {});
    t.end();
});

test('object with boolean', (t) => {
    const value = true;
    const modifiers = parseModifiers([{ value }]);

    t.same(modifiers, ['value']);
    t.end();
});

test('object with boolean (camelCase)', (t) => {
    const valueCamelCase = true;
    const modifiers = parseModifiers([{ valueCamelCase }]);

    t.same(modifiers, ['value-camel-case']);
    t.end();
});

test('object with string', (t) => {
    const value = 'other';
    const modifiers = parseModifiers([{ value }]);

    t.same(modifiers, ['other']);
    t.end();
});

test('object with empty string', (t) => {
    const value = '';
    const modifiers = parseModifiers([{ value }]);

    t.same(modifiers, []);
    t.end();
});

test('object with number (falsy)', (t) => {
    const value = 0;
    const modifiers = parseModifiers([{ value }]);

    t.same(modifiers, ['0']);
    t.end();
});

test('object with number (non-falsy)', (t) => {
    const value = 1;
    const modifiers = parseModifiers([{ value }]);

    t.same(modifiers, ['1']);
    t.end();
});

test('object with empty array', (t) => {
    const value = [];
    const modifiers = parseModifiers([{ value }]);

    t.same(modifiers, []);
    t.end();
});

test('object with non-empty array', (t) => {
    const value = [{ value: true }];
    const modifiers = parseModifiers([{ value }]);

    t.same(modifiers, []);
    t.end();
});

test('object with null', (t) => {
    const value = null;
    const modifiers = parseModifiers([{ value }]);

    t.same(modifiers, []);
    t.end();
});

test('object with undefined', (t) => {
    const value = undefined;
    const modifiers = parseModifiers([{ value }]);

    t.same(modifiers, []);
    t.end();
});

test('object with function', (t) => {
    const value = function() {};
    const modifiers = parseModifiers([{ value }]);

    t.same(modifiers, []);
    t.end();
});

test('object with Symbol', (t) => {
    const value = Symbol();
    const modifiers = parseModifiers([{ value }]);

    t.same(modifiers, []);
    t.end();
});

test('array (empty)', (t) => {
    const value = [];
    const modifiers = parseModifiers([value]);

    t.same(modifiers, []);
    t.end();
});

test('array (numbers)', (t) => {
    const value = [0, 1];
    const modifiers = parseModifiers([value]);

    t.same(modifiers, ['0', '1']);
    t.end();
});

test('array (strings)', (t) => {
    const value = ['', '0', '1'];
    const modifiers = parseModifiers([value]);

    t.same(modifiers, ['0', '1']);
    t.end();
});

test('multiple modifiers', (t) => {
    const modifiers = parseModifiers([{ bem1: true }, { bem2: true }]);

    t.same(modifiers, ['bem1', 'bem2']);
    t.end();
});

test('string', (t) => {
    const modifiers = parseModifiers(['bem']);

    t.same(modifiers, []);
    t.end();
});

test('number (falsy)', (t) => {
    const modifiers = parseModifiers([0]);

    t.same(modifiers, []);
    t.end();
});

test('number (non-falsy)', (t) => {
    const modifiers = parseModifiers([1]);

    t.same(modifiers, []);
    t.end();
});

test('null', (t) => {
    const modifiers = parseModifiers([null]);

    t.same(modifiers, {});
    t.end();
});

test('undefined', (t) => {
    const modifiers = parseModifiers([undefined]);

    t.same(modifiers, []);
    t.end();
});

test('empty string', (t) => {
    const modifiers = parseModifiers(['']);

    t.same(modifiers, []);
    t.end();
});

test('false', (t) => {
    const modifiers = parseModifiers([false]);

    t.same(modifiers, []);
    t.end();
});

test('true', (t) => {
    const modifiers = parseModifiers([true]);

    t.same(modifiers, []);
    t.end();
});

test('function', (t) => {
    const modifiers = parseModifiers([function() {}]);

    t.same(modifiers, []);
    t.end();
});

test('Symbol', (t) => {
    const modifiers = parseModifiers([Symbol()]);

    t.same(modifiers, []);
    t.end();
});
