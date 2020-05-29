# The gooey effect for React
The 'gooey effect' has been made popular by various (amazing) blogposts over the years. This tiny package makes it easy to use within React, and has improved the implementation as much as possible. It's optimized to be as sharp/crisp as possible, since existing implementations can be a bit blurry. Safari support (which can be notorious, and is usually missing) has been added as well.

## Installation (1 kb)
```sh
npm install gooey-react
```

## Usage
```jsx
import Goo from 'gooey-react'

<Goo> … </Goo>
```
You can put regular HTML elements inside the component, but using an SVG is recommended for better browser support.

[Visit the website](https://gooey-react.netlify.app/) for full documentation, properties and examples.
