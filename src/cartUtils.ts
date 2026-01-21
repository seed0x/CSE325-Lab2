export function applyDiscount(price: number, discountPercent: number): number {
  if (price < 0) {
    throw new Error("Price cannot be negative");
  }
  if (discountPercent < 0) {
    throw new Error("Discount cannot be negative");
  }
  if (discountPercent > 100) {
    throw new Error("Discount cannot exceed 100%");
  }

  const discountMultiplier = 1 - discountPercent / 100;
  return price * discountMultiplier;
} 



export function calculateTax(
  price: number,
  taxRate: number,
  isTaxExempt: boolean = false
): number {
  if (price < 0) {
    throw new Error("Price cannot be negative");
  }
  if (taxRate < 0) {
    throw new Error("Tax rate cannot be negative");
  }

  if (isTaxExempt) {
    return 0;
  }

  const tax = price * (taxRate / 100);
  return Math.round(tax * 100) / 100;
}



export interface CartItem {
  price: number;
  quantity: number;
  isTaxExempt?: boolean;
}

export interface CartTotals {
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
}

export function calculateTotal(items: CartItem[], discountPercent = 0, taxRate = 0): CartTotals {
  if (items.length === 0) {
    throw new Error("Total cannot be zero");
  }

  let sub = 0;
  let taxable = 0;

  for (const i of items) {
    if (i.price < 0) throw new Error("Price cannot be negative");
    if (!Number.isInteger(i.quantity) || i.quantity <= 0) {
      throw new Error("Quantity must be a positive integer");
    }

    const line = i.price * i.quantity;
    sub += line;

    if (i.isTaxExempt !== true) {
      taxable += line;
    }
  }

  const newSub = applyDiscount(sub, discountPercent);
  const disc = sub - newSub;

  const newTaxable = applyDiscount(taxable, discountPercent);
  const tax = calculateTax(newTaxable, taxRate, false);

  const total = newSub + tax;

  return {
    subtotal: sub,
    discount: disc,
    tax: tax,
    total: Math.round(total * 100) / 100,
  };
}

    
