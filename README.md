
# D - A Date Utility Class

The `D` class is a utility class for working with dates in JavaScript. It provides several convenient methods and properties for getting and formatting dates.

## Installation

```bash
npm install @andrewphm/date-lib
```

## Usage

First, import the `D` class from the package:

```javascript
import D from '@andrewphm/date-lib';

```

Then, you can create a new `D` object:

```javascript
const d = new D(2017, 8, 2, 3, 4, 5); // September 2, 2017 03:04:05
```

You can use the getters to get various parts of the date:

```javascript
console.log(d.year); // 2017
console.log(d.yr); // 17
console.log(d.month); // September
console.log(d.mon); // Sep
console.log(d.day); // Saturday
console.log(d.dy); // Sat
console.log(d.date); // 2
console.log(d.hours); // 3
console.log(d.mins); // 4
console.log(d.secs); // 5
console.log(d.ordinal); // 2nd
```

You can use the `format` method to format the date:

```javascript
console.log(d.format('Y-M-D h:i:s')); // 2017-September-02 03:04:05
```

You can use the `when` method to get a human-readable description of when the date will occur:

```javascript
console.log(d.when()); // 4 years ago (assuming the current date is in 2021)
```

## Tests

To run the tests for the `D` class, use the following command:

```bash
npm test
```

