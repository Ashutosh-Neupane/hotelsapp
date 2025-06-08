const bookingModel = require("../model/Booking.model.js");

 export const listBookings = async (req, res) => {
    try {
        const bookings = await bookingModel.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const yourBooking = async (req,res) => {
    userId = req.cookies.userId
    if(!userId || userId === undefined){
        return res.status(401).json({ message: "Unauthorized" });
    }
    
    try {
        const bookings = await bookingModel.find({user: userId});
        if(!bookings || bookings ==[]){
            return res.status(404).json({ message: "Bookings not found" });
        }
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const cancelBooking = async (req,res) => {
    const id = req.params.id;
    try {
        const deletedBooking = await bookingModel.findByIdAndDelete(id);
        if(!deletedBooking){
            return res.status(404).json({ message: "Booking not found" });
        }
        res.status(200).json({ message: "Booking deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const doBooking = async (req,res) => {
    const {hotel,checkIn,checkOut,user} = req.body;
    try {
        const newBooking = new bookingModel({hotel,checkIn,checkOut,user});
        await newBooking.save();
        res.status(200).json(newBooking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const toggleBooking = async(req,res) => {
    const id = req.params.id;
    try {
        const booking = await bookingModel.findById(id);
        if(!booking){
            return res.status(404).json({ message: "Booking not found" });
        }
        booking.status = !booking.status;
        await booking.save();
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}