import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing orders using Cash on Delivery (COD)
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Order সফলভাবে প্লেস হলে ইউজারের কার্ট খালি করে দেওয়া
        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.json({ success: true, message: "Order Placed Successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: true, message: error.message });
    }
}

// User orders data for frontend ("My Orders" page)
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({ userId });
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { placeOrder, userOrders };