# Express.js Async Error: Unhandled Promise Rejection

This repository demonstrates a common error in Express.js applications: improper handling of asynchronous operations within routes.  Specifically, it showcases how forgetting to handle promises correctly can lead to unexpected results or application crashes.

## The Bug

The `bug.js` file contains an Express.js route that attempts to send a response including the result of an asynchronous operation. However, it doesn't properly handle the promise, leading to the result being undefined when the response is sent.  This can result in an incomplete or incorrect response.

## The Solution

The `bugSolution.js` file demonstrates the correct way to handle asynchronous operations.  It uses `async/await` to elegantly wait for the promise to resolve before sending the response, ensuring the result is available and the response is complete.

## How to Run

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js` to see the buggy behavior.
5. Run `node bugSolution.js` to see the corrected behavior.