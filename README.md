# Lab 2: Test-Driven Development with Vitest

## Overview
This lab implements a shopping cart price calculator using Test-Driven Development (TDD). Functions calculate discounts, taxes, and totals for shopping cart items.

## Setup Instructions
```bash
npm install
npm test
npm run test:coverage
```

## Functions Implemented
- `applyDiscount` - Applies percentage discount to a price
- `calculateTax` - Calculates sales tax with support for tax-exempt items
- `calculateTotal` - Calculates final cart totals with discounts and taxes

## Reflection

### Why write a failing test first?
We intentionally write a failing test to verify the behavior of the function without setting a baseline. This relates to Fowler's "state verification" because we're checking the state of the output. Developer confidence is higher when tests fail first then pass, rather than tests that always pass.

### Mockist vs. Classicist approach
We are using the classicist approach as we are using real objects by testing `applyDiscount` directly vs creating a mock. We don't use test doubles because as classicists we only use doubles for awkward dependencies like APIs or third party services, but use real objects for logic functions.

### Testing implementation vs. behavior
We changed the implementation (added rounding) but tests still pass because we used `toBeCloseTo`. This is what Kent C. Dodds means by "not testing implementation details." A test that checks implementation details would verify that `Math.round` was called, or check the exact formula used internally, rather than just checking the output is correct.

### How TDD changed my approach
Writing tests first for `calculateTotal` made me think about edge cases (empty cart, tax-exempt items) before writing code. I had to clearly define what the function should return before implementing it, which made the implementation clearer.

### Test doubles in this lab
We didn't need any of Fowler's test double types (dummy, stub, fake, spy, mock) for this lab because all functions are pure logic with no external dependencies. We use real implementations of `applyDiscount` and `calculateTax` within `calculateTotal` rather than mocking them.

### What would be different without TDD
If I wrote the implementation first, I might have missed edge cases like empty carts or tax-exempt items. TDD forced me to think about these cases upfront through the tests.
