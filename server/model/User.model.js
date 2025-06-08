const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@gmail\.com$/, "Only Gmail addresses are allowed"],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    authority: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    blog: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Blog",
        },
    ],
}, { timestamps: true });

userSchema.pre("save", async (next)=> {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.comparePassword = async  (candidatePassword)=> {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
