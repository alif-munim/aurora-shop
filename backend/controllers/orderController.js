import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// @desc    Create an order
// @route   Post /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {

    const {
        orderItems,
        paymentMethod,
        shippingAddress,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error("No order items");
        return;
    } else {
        const order = new Order({
            user: req.user._id,
            orderItems,
            paymentMethod,
            shippingAddress,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        });

        const createdOrder = await order.save();

        res.status(201).json(createdOrder);

    }

    const products = await Product.find({});
    res.json(products);
});

export { addOrderItems };