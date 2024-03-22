### Episode-06 | Exploring the World 🌍

Welcome to Episode 06 - **Exploring the World** 🌐

In this episode, we gain insights into architecture, useEffect hook, and working with APIs.

#### Topics Covered:
- Architecture, useEffect
- Conditional Rendering
- API usage

### Episode-6.1 | Swiggy API Issue Resolved 🛠️

Welcome to Episode 6.1 - **Swiggy API Issue Resolved** 🚧

In this video, we resolve all the issues related to the Swiggy API, ensuring smooth project operation.

### Episode-6.2 | CORS Plugin Issue Solved 🔄

Welcome to Episode 6.2 - **CORS Plugin Issue Solved** 🔁

## Why onClick={update()} won't work ?

- In JavaScript and React, when you use `onClick={update()}`, it means that the `update` function is immediately invoked when the component renders. This is not what you typically want for event handlers in React.

- When you use `onClick={update}`, you are passing a reference to the `update` function, and it will be called only when the actual click event occurs. This is the correct way to set up event handlers in React.

- If you use `onClick={update()}`, it results in the function being called immediately when the component renders, which is not the intended behavior for handling a click event. This is why it's important to omit the parentheses when passing a function as a handler to events in React.

### You can certainly choose different names for the variables in the destructuring assignment, even if they don't match the property names exactly. For example:

const { NameId: restaurantName, avgRating: rating, cuisines: foodTypes, cloudinaryImageId: imageId } = restInfo?.info;

## For Shimmer effect you can also use npm package
