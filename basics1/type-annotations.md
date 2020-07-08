## TYPE INFERENCE: Typescript guesses the type

- if declaration and initilization are on the same line TypeScript will figure out type of variable.
- When to use 'Alwyas'

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
