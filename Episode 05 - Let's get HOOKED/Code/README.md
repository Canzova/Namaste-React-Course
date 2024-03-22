### Episode-05 | Let's Get Hooked 🎣

Welcome to Episode 05 - **Let's Get Hooked** 🪝

In this episode, we explore React Hooks and understand their importance.

#### Topics Covered:
- File structure
- Import/export
- React Hooks (useState)

## Filtering the top rated restraurants
  const update = () => {
    setRestaurants(topRestaurants.filter((Restaurants) => {
      return Restaurants.info.avgRating >= 4.5;
    }))
  };

## Another way of declaring state variables
    const arr = useState(restList);
    topRestaurants = arr[0];
    setRestaurants = arr[1];

## why can't you " onClick={ setState() } " ?

- If you do something like ---> onClick={setState()}

- It means you are calling the setState function immediately when the component renders, not when the button is clicked. This is not the desired behavior, as the purpose of the onClick event is to specify a function that should be called when the user clicks the element.

- Correct way to use onClick with setState ---> onClick={() => setState()}

- The reason why onClick={setState()} is not the desired behavior is due to the fact that when React encounters this code during the component rendering, it immediately executes setState().

- onClick={setState()} // Incorrect
Above code essentially says, "When rendering this component, execute setState() and assign its result to the onClick handler." It doesn't wait for a click event; it immediately calls setState() during rendering. and pass the result of setState() to onClick.


- In JavaScript, when you provide setState() without wrapping it in a function, it will be invoked immediately during the rendering phase, not when the button is clicked.
