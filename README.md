# JSStruct

Immutable, Elixir-like structs in JavaScript.

## Installation
`npm install jsstruct`

## Setup
ES6:
```javascript
import { struct } from 'jsstruct';
import Struct from 'jsstruct/StructFunctions';
```

ES5:
```javascript
const { struct } = require('jsstruct');
const Struct = require('jsstruct/StructFunctions').default;
```

## Usage
```javascript
// Create a struct
const User = struct({
  id: 'number',
  username: 'string',
  email: 'string',
  password: 'string'
});

// Create a user from that struct
const someUser = User({
  id: 4,
  username: 'john.doe',
  email: 'foo@bar',
  password: 'somehash'
});

// Update struct (this returns a new struct, the original struct remains
// unchanged)
const updatedUser = Struct.update(someUser, { email: 'bar@foo' });

// Clone struct
const clone = Struct.clone(someUser);

// Check whether something is a struct
Struct.isStruct(someUser); // true

// Check whether something matches a given struct
Struct.isStruct(someUser, User); // true

const NotUser = struct({ name: 'string' });
Struct.isStruct(someUser, NotUser); // false

// Convert struct to plain object
Struct.toObj(someUser);
```
