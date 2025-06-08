import jwt from "jsonwebtoken";
import User from "../models/User.js";

const getUserFromToken = async (token) => {
  if (!token) throw new Error("No token provided");
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);
  if (!user) throw new Error("User not found");
  return user;
};

export const checkAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const user = await getUserFromToken(token);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const checkAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const user = await getUserFromToken(token);
    if (user.role !== "admin") {
      return res.status(403).json({ message: "Forbidden" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
