import { z } from "zod";

export const MoneyV2Result = z.object({
    amount: z.string(),
    currencyCode: z.string(),
});

export const CartItemResult = z.object({
    id: z.string(),
    cost: z.object({
    //   amountPerQuantity: MoneyV2Result,
      subtotalAmount: MoneyV2Result,
    //   totalAmount: MoneyV2Result,
    }),
    quantity: z.number().positive().int(),
    imageUrl: z.string(),
    title: z.string(),
  });

export const CartResult = z
  .object({
    id: z.string(),
    cost: z.object({
      subtotalAmount: MoneyV2Result,
    }),
    checkoutUrl: z.string(),
    totalQuantity: z.number().int(),
    lines: z.object({
      nodes: z.array(CartItemResult),
    }),
})
.nullable();

