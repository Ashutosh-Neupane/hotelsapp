const Hotel = require("../model/Hotels.model.js");

export const listHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    if (!hotels || hotels.length === 0) {
      return res.status(404).json({ message: "Hotels not found" });
    }
    res.status(200).json(hotels);
  } catch (error) {
    console.error("Error listing hotels:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getHotel = async (req, res) => {
  try {
    const id = req.params.id;
    const hotel = await Hotel.findById(id);

    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    res.status(200).json(hotel);
  } catch (error) {
    console.error("Error getting hotel:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const addHotel = async (req, res) => {
  const { name, location, rating, image, description } = req.body;
  try {
    if (await Hotel.findOne({ name })) {
      return res.status(400).json({ message: "Hotel already exists" });
    }
    const newHotel = new Hotel({
      name,
      location,
      rating: rating || 0,
      ratingCount: 0,
      image,
      description,
    });
    const savedHotel = await newHotel.save();
    res.status(201).json(savedHotel);
  } catch (error) {
    console.error("Error adding hotel:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteHotel = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedHotel = await Hotel.findByIdAndDelete(id);
    if (!deletedHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    res.status(200).json({ message: "Hotel deleted successfully" });
  } catch (error) {
    console.error("Error deleting hotel:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateHotel = async (req, res) => {
  try {
    const id = req.params.id;
    const hotel = await Hotel.findById(id);
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    // For each field, use new value if provided, else keep old value
    const updatedData = {
      name: req.body.name || hotel.name,
      location: req.body.location || hotel.location,
      image: req.body.image || hotel.image,
      description: req.body.description !== undefined ? req.body.description : hotel.description,
      // rating and ratingCount are not updated here; use UpdateRating for that
    };

    const updatedHotel = await Hotel.findByIdAndUpdate(id, updatedData, { new: true });

    res.status(200).json(updatedHotel);
  } catch (error) {
    console.error("Error updating hotel:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateRating = async (req, res) => {
  const { rating } = req.body;
  if (rating < 0 || rating > 5) {
    return res.status(400).json({ message: "Rating should be between 0 and 5" });
  }
  const id = req.params.id;
  try {
    const hotel = await Hotel.findById(id);
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    const ratingCount = hotel.ratingCount || 0;
    const currentRating = hotel.rating || 0;

    const newRating = (currentRating * ratingCount + rating) / (ratingCount + 1);

    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      { rating: newRating, ratingCount: ratingCount + 1 },
      { new: true }
    );

    res.status(200).json(updatedHotel);
  } catch (error) {
    console.error("Error updating hotel rating:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
