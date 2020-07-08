# Type Annotations

## TYPE INFERENCE: Typescript guesses the type

- if declaration and initilization are on the same line TypeScript will figure out type of variable.
- When to use - Always

```
const color = 'red;
'declaration' =  'initialization'
```

## TYPE ANNOTATIONS: We (developers) tell Typescript the type

- When we declare a variable on one line then initalize it later
- When we want a variable to have a type that can't be inferred
- When a function returns the 'any' type and we need to clarify the value

```
const color: string = 'red;
'declaration' =  'initialization'
```

### Type annotations for functions

- Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return

### Type inference for functions

- Typescript tries to figure out what type of value a function will return

### Typed Array

- Arrays where each element is some consistent type of value
- Where to use typed arrays? : Any time we need to represenet a collection of records with some arbitrary sort order

### Tuples

- Array-like structure where each element represents some property of a record
- We don't use them often though. Object is more meaningful

### Interfaces

- General Strategy for Reusable Code in TS
  - Create functions that accept arguments that are typed with interfaces
  - Objects/classes can decide to 'implement' a given interface to work with a function

### Classes

- Blueprint to create an object with some fields(values) and methods(functions) to represent a 'thing'

##### Modifiers in Classes:

- **public**: This method can be called any where, any time
- **private**: This method can only be called by other methods in this class
- **protected**: This method can be called by other methods in this class, or by other methods in child classes.
