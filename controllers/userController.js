const axios = require('axios');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const secret = 'a7442f950bcc72eff60f31062998a1da24dd45f4041583000832abe13bdb0e8a4b729b157fb15608b4840ecc18fd49a53c94c16c1bcb3f5fd8fd87a67efc1e8b';

// create a user
async function createUser(req, res) {
    const { email, password } = req.body;
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await User.create({
            email,
            password: hashedPassword,
        });
        res.status(201).json(newUser);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({ error: 'Email address already exists' });
        }
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
}

// delete the user
async function deleteUser(req, res) {
    // get user id from the token
    const { id } = req.user;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        await user.destroy();
        res.status(201).send("Delete the user successfully");
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Failed to delete user' });
    }
}

// update user profile 
async function updateProfile(req, res) {
    const { username, avatar } = req.body;
    // also get the user id from the token
    const { userId } = req.user;

    try {
        let user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if(username){
            user.username = username;
        }
        if(avatar){
            user.avatar = avatar;
        }
        
        await user.save();
        res.json(user);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Failed to update user' });
    }
}

// get the profile 
async function getProfile(req, res) {
    const userId = req.user.userId; // get user id from token

    
    if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
    }
    try {
        const user = await User.findByPk(userId, {
            attributes: ['email', 'username', 'avatar'],
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'Failed to fetch user profile' });
    }
}

// verify the user when log in 
async function verifyUser(req, res) {
    console.log('Received login request:', req.body);

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            console.log('Missing email or password in request');
            return res.status(400).json({ error: 'Missing email or password' });
        }
        const user = await User.findOne({ where: { email } });
        console.log('Found user:', user);
        if (!user) {
            console.log('User not found');
            return res.status(400).json({ error: 'User not found' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Incorrect password' });
        }
        const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });
        // const userData = { id: user.id, username: user.username, email: user.email, avatar: user.avatar };
        // console.log('User data:', { id: user.id, username: user.username, email: user.email, avatar: user.avatar });
        // res.json({ token, user: userData });
        res.json({ token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Login failed', req: req.body });
    }
}

// update the password
// need further modify
async function updatePassword(req, res) {
    const { currentPassword, newPassword } = req.body;
    const { userId } = req.user;
    
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const passwordMatch = await bcrypt.compare(currentPassword, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Incorrect current password' });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).json({ error: 'Failed to update password' });
    }
}
module.exports = {
    createUser,
    deleteUser,
    updateProfile,
    verifyUser,
    updatePassword,
    getProfile
};
