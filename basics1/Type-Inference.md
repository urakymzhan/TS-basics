# TYPE INFERENCE: Typescript guesses the type

- if declaration and initilization are on the same line TypeScript will figure out type of variable.
- When to use 'Alwyas'

```
const color = 'red;
'declaration' =  'initialization'
```

# TYPE ANNOTATIONS: We (developers) tell Typescript the type

- When we declare a variable on one line then initalize it later
- When we want a variable to have a type that can't be inferred
- When a function returns the 'any' type and we need to clarify the value

```
const color: string = 'red;
'declaration' =  'initialization'
```
