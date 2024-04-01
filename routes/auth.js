import express from 'express';
import { Admin } from '../models/Admin.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.json({ message: "Admin not found" });
        }

        const validPassword = await bcrypt.compare(password, admin.password);
        if (!validPassword) {
            return res.json({ message: "Incorrect Password" });
        }

        const token = jwt.sign({ email: admin.email }, process.env.Admin_Key)
        res.cookie('token', token, { httpOnly: true, secure: true })
        return res.json({ login: true });
        
    } catch (error) {
        console.error("Error during admin login:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

export { router as AdminRouter };
