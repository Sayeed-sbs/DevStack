# The name of this project is DevStack

This is a web application, where developers can look at different programming tools, compare them, and choose items to build their own custom layout stacks.

## Technology that I used
- React.js 
- Vite 
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON

## 3 features about my project
- Interactive Stack Selection: Users can click buttons to add technologies directly into a sidebar workspace dashboard panel or remove them individually.
- Live Toast Alerts: Shows real-time pop-up notifications when an item is added, when someone tries to add a duplicate item, or when the stack is cleared.
- Fully Responsive Grid Layout: The entire page structure smoothly scales down from a wide desktop split-screen view into a single-column layout for small mobile screens.

------------------------------------------------------------------------------------------------------------------


## React Questions and Answers

### i. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is a syntax extension that lets us write HTML like code directly inside our JavaScript files. We use it in React because it makes designing UI layouts much easier and more visual. Instead of writing long, complicated document creation methods in vanilla JavaScript, JSX lets us see the actual structure of our webpage directly inside our components.

### ii. What is the difference between props and state?
State is internal data that belongs to a component and can change whenever a user interacts with the page, like typing in an input box or clicking a button. Props are like read-only arguments passed down from a parent component to a child component. A component can change its own state, but it cannot change the props it receives from the outside.

### iii. What does the useState hook do, and where did you use it in this project?
The useState hook lets us create variables that React tracks for changes. When the value inside a useState variable changes, React automatically updates that part of the browser screen. In this project, I used useState inside the TechDashboard component to manage two things: the list of technologies loaded from the JSON file, and the array tracking items added to the user's stack.

### iv. What does the useEffect hook do, and why did you need it to load the JSON data?
The useEffect hook lets us run code outside the normal layout rendering, like fetching files or connecting to an external source. I needed it to load the JSON data because fetching a file from the server takes time. By using useEffect with an empty array at the end, React safely fetches the technology database exactly once when the webpage loads up, preventing the site from fetching the file over and over again.

### v. Why does every item in a .map() list need a unique key prop?
Every item needs a unique key prop so React can tell the difference between the items inside the list. When an item changes, gets added, or gets deleted, React uses this key to find and update just that one specific item. Without unique keys, React gets confused and has to rebuild the entire HTML list from scratch, which slows down the website.

### vi. What is conditional rendering? Show one place you used it?
Conditional rendering means using simple true/false checks to decide which HTML elements should show up on the screen. In my project, I used it inside the sidebar panel to check the size of the user's stack. If the stack is empty, it renders a box showing "Your stack is empty". If it has items, it skips that box and lists out the selected items instead.

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
To send data forward from a parent to a child, we pass variables or strings directly inside the child's tag using props, just like adding parameters to an HTML tag. To send data back from a child to a parent, the parent passes down a function as a prop. When an event happens inside the child component, it calls that passed-down function and passes the new data back inside its arguments.
