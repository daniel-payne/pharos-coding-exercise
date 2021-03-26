# Notes

This is _NOT_ how I would layout production code, it needs more work on typescript types, and cutting out code into UTIL functions to reduce every file to a max of 50 lines : makes it more maintainable.

I use ": any" for all types until i know more about how the function works then "funnel down" the types

I add "[key: string]: any;" to app props ant type definitions until i narrow down the object and how it is used

I always use `<div className="SpendSelection">` on my outer component, and almost never use fragments : so testers can reason about the code that generates the HTML

I always start my components as

```
import { FC } from "react";

import "./DataDisplay.css";

type Props = {
  [key: string]: any;
};

const DataDisplay: FC<Props> = (props) => {
  const { children } = props;

  return <div className="DataDisplay">{children}</div>;
};

export default DataDisplay;
```

I have only included one test, on the utils/nameSort as a demo of how i would run two windows "npm start" and "npm test" during development

# Pharos Coding Exercise

This exercise is to help us better understand your experience in react and typescript, how you would go about structuring your work, code quality, styles, etc...

## Setup

To get started, install the dependencies with `npm install`.

Run the application with `npm start`.

Launch application in browser at [http://localhost:3000](http://localhost:3000).

## Task

We would like you build a simple data explorer as shown in the image below. This is just a wireframe guide to get you started, you may style it in any way you like to improve the design and UX.

![Pharos Coding Exercise wireframe](/pharos-coding-exercise.png)

The data is a list of application records and is fetchable at `/data`. Each application has 3 levels of business capabilities. Business capabilities are hierarchical as shown in the image (Business capability 1 -> Business capability 2 -> Business capability 3)

The app should -

- Requests the dataset.
- Build a hierarchical navigation tree displaying the different levels of business capabilities. Bonus points if we can expand/collapse the navigation tree.
- Have a range slider to be able to further filter the dataset based on the total spending value
- Present a list of applications from the data set, showing name and total spend. The list depends on the navigation tree and the range filter

Additional notes

- Please spend as much time as you feel necessary to complete the task and show off your skills.
- We will be looking at code/file structure, code quality & best practices, design & user experience.
- Add comments where necessary or to document any assumptions/considerations you may have.
- You shouldn't need to use any external libraries

How to share your code with us

- Please provide us a link to a public github repository with the project
