# yureijs
## What is yureijs?
Package for creating casperjs test files easier.

## Installation
In node repository,
```
npm install --save-dev yureijs
```

After package installed, append this to package.json:
```
{
  ...

  "scripts": {
    "yureijs": "yureijs"
  }

  ...
}
```

## How to use

### Creating spec files
```
npm run yureijs generate spec [filepath]
```

After command finished, those files created:
- spec.js
- spec/filepath.js

### Testing
```
npm run yureijs test spec.js
```
