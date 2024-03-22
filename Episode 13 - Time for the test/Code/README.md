### Episode-13 | Time for Test ⏰

Welcome to Episode 13 - **Time for Test** 🧪

In this episode, we dive into comprehensive testing with Jest and React Testing Library.

#### Topics Covered:
- Jest, React Testing Library

### Error : Support for the experimental syntax 'jsx' isn't currently enabled

### Solution : npm i @babel/preset-react : So that we can write jsx inside our test case

- When we write render() into our test case then it renders our jsx, which our jest cant undderstand, so we are using babel to convert the jsx into html so that our jest could understand it.

- After installing @babel/preset-react you also need to configure it into your babel.config.js.

- Add : ["@babel/preset-react", { runtime: "automatic" }], into your abel.config.js.

### Alo install npm i -D @testing-library/jest-dom --> It will give us allot of different functions to check any element is present onto the dom or not

#### This is the error I am getting in cartFlow.test.js

TypeError: Cannot read properties of undefined (reading 'filter')

      24 |
      25 |     //console.log(dish);
    > 26 |     const updatedDishList = dish.filter((item, index) => {
         |                                  ^
      27 |       return (
      28 |         item?.card?.card?.["@type"] ===
      29 |         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

      at filter (src/utils/useRestMenu.js:26:34)
