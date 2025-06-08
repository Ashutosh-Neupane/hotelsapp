import User from "../models/User.js";
import jwt from "jsonwebtoken";
import Blog from "../models/Blog.js";

// LOGIN
export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
    });

    res.status(200).json({ message: "Login successful", email: user.email });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// SIGNUP
export const Signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ name, email, password });
    await user.save();

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({ message: "Signup successful", email: user.email });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// LOGOUT
export const Logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "None",
  });

  res.status(200).json({ message: "Logout successful" });
};

export const addBlog = async (req, res) => {
  const { title, description, user, hotel, image } = req.body;

  try {
    // Validate required fields
    if (!title || !description || !user || !hotel) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newBlog = new Blog({ title, description, user, hotel, image });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error adding blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const getBlog = async (req,res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id).populate('user', 'name email')
      .populate('hotel', 'name rating');;
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error getting blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export const getBlogByHotel  = async (req,res) => {
    try {
        const id = req.params.id;
        const blog = await Blog.find({hotel:id}).populate('user', 'name email')
      .populate('hotel', 'name rating');
        if (!blog) {
          return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(blog);
      } catch (error) {
        console.error("Error getting blog:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, description, user, hotel, image } = req.body;

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Build update object, only update if new value exists, else keep old value
    const updatedData = {
      title: title || blog.title,
      description: description || blog.description,
      user: user || blog.user,
      hotel: hotel || blog.hotel,
      image: image || blog.image,
    };

    const updatedBlog = await Blog.findByIdAndUpdate(id, updatedData, { new: true });

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};