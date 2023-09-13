import express, { Router, Request, Response } from "express";

const router: Router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const createSource = async (tokenId: string) => {
  try {
    const source = await stripe.sources.create({
      type:"card",
      token: tokenId,
    });
    return source;
  } catch (error) {
    throw error;
  }
};

router.post("/payment", async (req: Request, res: Response) => {
  const tokenId = req.body.tokenId; // Use the correct field name for the source ID


  try {
    const source = await createSource(tokenId);

    const paymentIntent = await stripe.paymentIntents.create({
      source: source.id,
      amount: req.body.amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    res.status(200).json(paymentIntent);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;


// Stripe::PaymentIntent.create(
//   :customer => customer.id,
//   :amount => params[:amount],
//   :description => 'Rails Stripe transaction',
//   :currency => 'usd',
// )

// stripe.PaymentIntent.create({
//   source: req.body.tokenId,
//   amount: req.body.amount,
//   currency: "usd",
//   automatic_payment_methods: {enabled: true},
// })