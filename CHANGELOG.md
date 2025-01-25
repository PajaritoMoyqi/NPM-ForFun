# Changelog

This file contains all notable changes of npm package [pajarito-fn](https://www.npmjs.com/package/pajarito-fn "npm package 'pajarito-fn'").

## [1.0.3] - 2025-01-25

### New

- CHANGELOG.md

### Fixes

- Modified annotations (https://github.com/PajaritoMoyqi/NPM-pajarito-fn/commit/77b34f8c2ea7b18d2c6e8acbbdf99296e3912827)
- Enhanced README.md (https://github.com/PajaritoMoyqi/NPM-pajarito-fn/commit/766b1b1ddcba0a69eb021d193728112d9d97816c)

## [1.0.2] - 2024-07-29

### New

- LICENSE

### Fixes

- Tiny chanages at README.md

## [1.0.1] - 2022-12-17

### New

- Functions

```js
// Return randomly shuffled array.
shuffleArray( array );
// Return shuffled array from first input integer to second input integer;
getShuffledArrFromNumToNum( start, end );

// Return random color code in string.
getRandomColorCode();
```

## [1.0.0] - 2022-01-30

### New

- Functions

```js
// Return 0 ~ less then input integer(initialNum).
getRandomNum( initialNum );
// Return array; [start, start + 1, start + 2, ... , end -2, end -1, end]
getArrFromNumToNum( start, end );

// Return random index of given array(arr).
getRandomIdx( arr );

// Return random element of given array(arr).
getRandomItem( arr );

// Capitalize given string(str).
capitalize( str );

// Return 0 ~ less then first input integer(initialNum) except second input integer(currentNum).
getRandomNumNotSame( start, end );
```

- .gitignore
- README.md
- index.js
- package.json

***

[1.0.3]: https://github.com/PajaritoMoyqi/NPM-pajarito-fn/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/PajaritoMoyqi/NPM-pajarito-fn/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/PajaritoMoyqi/NPM-pajarito-fn/compare/v1.0.0...v1.0.3
[1.0.0]: https://github.com/olivierlacan/keep-a-changelog/releases/tag/v0.0.1