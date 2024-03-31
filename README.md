# utils

## Installation
`npm i @mozeyinedu/utils`

## Usage
```
    const utils = require('@mozeyinedu/utils).default;
    console.log(utils.hasExpired(createdAt, expiredIn)) // returns true or false

    // expiredIn:number => is the millisecond of the expiration time
    // createdAt:string => is the string date of creation

    
````