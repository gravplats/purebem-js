# purebem-js

> A BEM CSS methodology utility helper

[![npm version](https://img.shields.io/npm/v/purebem-js.svg?style=flat-square)](https://www.npmjs.com/package/purebem-js)

A simple JavaScript utility for creating [BEM](http://getbem.com) standard CSS class names. This is a stricter cousin of [purebem](https://github.com/billogram/purebem).

## Install

To install the stable version:

```
npm install --save purebem-js
```

## Usage

### Import module

```js
import purebem from 'purebem-js';

const element = purebem('my-block');

// Define a block.
block();
// 'my-block'

// Define a block with modifier(s) using an object.
block({ modifier: true });
// 'my-block my-block--modifier'

block({ camelCase: true });
// 'my-block my-block--camel-case'

// Define a block with modifier(s) using an array.
block(['modifier'];
// 'my-block my-block--modifier'

// Define an element.
block('my-element');
// 'my-block__my-element'

// Define an element with modifiers using an object.
block('my-element', { modifier: true });
// 'my-block__my-element my-block__my-element--modifier'

// Define an element with modifiers using an array.
block('my-element', ['modifier'];
// 'my-block__my-element my-block__my-element--modifier'
```

## API

### `purebem(block: string/number) -> ([ modifiers: array/object ]) -> string`
### `purebem(block: string/number) -> ([ element: string/number [, modifiers: array/object ] ]) -> string`

The `purebem` takes one argument and returns a function taking multiple arguments.

#### `block`

Type: `string` or `number`

The block name.

#### `element`

Type: `string` or `number`

The element name.

#### `modifiers`

Type: `array` or `object`.

The modifiers.

## License

MIT
