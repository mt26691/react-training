# Angular2DemoApplication

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.10.

## Why redux?
Single page application becomes more and more compicalted, our code must manage more state than ever before
We are, the developers, are expected to handle optimistic update, server-side rendering, fetching data
before performing route trainsitions.

 Redux attempts to make state mutations predictable

 ## Three fundamental principles of Redux.
 `Single source of truth:` The state of your whole application is stored in an object tree within a single store.

 `State is read-only:` The only way to change the state is to emit an action

 `Changes are made with pure functions`

 ## Flux vs Redux, Immutable
 Smilar: They prescribe that you concentrate your model update logic in a certain layer of your application  
 Different: Redux does not have dispatcher  
 Note: Redux team discorages mutate the data  

## Immutable
[Immutable](https://facebook.github.io/immutable-js/) is JS lib implementing persistent data structures.  
Developing with immutable data encourages you to think differently about how data flows through your application  
Immutable collections should be treated as values rather than objects. 
Note
