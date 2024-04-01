import express from 'express';
import bcrypt from 'bcrypt';
import { Admin } from './models/admin.js';
import "./db.js";

async function seedAdminAccount() {
    try {
        const adminCount = await Admin.countDocuments();
        if (adminCount === 0) {
            const hashPassword = await bcrypt.hash('adminPassword', 10); // Replace 'adminPassword' with your desired password
            const newAdmin = new Admin({
                email: 'admin@example.com', // Specify the email of the admin
                password: hashPassword
            });

            await newAdmin.save();
            console.log("Admin account created");
        } else {
            console.log("Admin account already exists");
        }
    } catch (err) {
        console.log("Error:", err);
    }
}

seedAdminAccount();
