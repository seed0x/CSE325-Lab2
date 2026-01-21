# Lab 2: Test-Driven Development

## Overview
This lab implements a shopping cart price calculator using Test-Driven Development. Functions calculate discounts, taxes, and totals for shopping cart items.

## Setup Instructions
```bash
npm install
npm test
npm run test:coverage
```

## Functions Implemented
- applyDiscount - Applies percentage discount to a price
- calculateTax - Calculates sales tax with support for tax-exempt items
- calculateTotal - Calculates final cart totals with discounts and taxes

## Reflection

### Why do we intentionally write a failing test first? How does this relate to what Fowler describes as "state verification"?
We intentionally write a failing test first to verify the behavior of the function. This relates to Fowler's state verification because we're checking the state of the output. Also, dev confidence is higher when tests fail first then pass, rather than tests that always pass.

### In the mockist vs. classicist debate from Fowler's article, which approach are we using here? Why don't we need any test doubles for this function?
We are using the classicist approach as we are using real objects by testing applyDiscount directly vs creating a mock. We don't use test doubles because as classicists we only use doubles for awkward dependencies like APIs or third party services, but use real objects for logic functions.

### Notice that we changed the implementation (added rounding), but our tests still pass because we used toBeCloseTo. This is what Kent C. Dodds means by "not testing implementation details." What would a test that does test implementation details look like?
We changed the implementation by adding rounding but tests still pass because we used toBeCloseTo. This is what Kent C. Dodds means by "not testing implementation details." A test that checks implementation details would check for exact answers or formula use bu the function rather than just checking the output is correct.

### How did TDD change the way you approached implementing calculateTotal?
Writing tests first for calculateTotal made me think about problem/edge cases before writing code. I was able to go through and use the tests to write out a skeleton for the function and what it should return before implementing it, which made the implementation straightforward.

### Which of Fowler's test double types (dummy, stub, fake, spy, mock) did you need for this lab? Why or why not?
We didn't need any of Fowler's test double types for this lab because all functions are pure logic with no third party services or API calls

### WWhat's one thing that would have been different if you wrote the implementation first?
If I wrote the implementation first, I might have missed edge cases like empty carts or tax-exempt items. TDD forced me to think about these scenerios beforehand through the tests.