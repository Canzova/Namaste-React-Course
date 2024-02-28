## Episode 08 - Let's get Classy

### Life Cycle of Class Based Component

- Constructor---->Render Method----->componentDidMount--->componentDidUpdate--->componentWillUpdate

### This is the usage of componentWillUpdate ---> It is used for cleaning up our mess

componentDidUpdate() {
this.timer = setInterval(() => {
console.log("I am inside component did mount");
}, 1000);
}

componentWillUnmount() {
// Cleaning up our setInterval
clearInterval(this.timer);
}

### This is how we return clean up function in useEffect

useEffect(() => {
const timer = setInterval(()=>{
console.log("I am inside useEffect")
}, 1000);

    // Cleanup Function
    return ()=>{
      clearInterval(timer);
    }

}, []);

### If we want to apply any function on state variable change

#### In useEffect

useEffect(() => {}, [count1, count2]);

#### In class based component

componentDidUpdate(prevState, prevProp) {
    if(prevState.count !== this.state.count)
    {

    }
    else if(prevState.count2 !== this.state.count2)
    {

    }

}
