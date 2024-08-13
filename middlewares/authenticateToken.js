const jwt = require('jsonwebtoken');
const secret = 'a7442f950bcc72eff60f31062998a1da24dd45f4041583000832abe13bdb0e8a4b729b157fb15608b4840ecc18fd49a53c94c16c1bcb3f5fd8fd87a67efc1e8b';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
  
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Access denied. Invalid token.' });
    }
    
    const token = authHeader.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'Access denied. Invalid token format.' });
    }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      console.error('JWT verification error:', err);
      return res.status(403).json({ error: 'Access denied. Invalid token.' });
    }
    req.user = decoded; 
    console.log(req.user);
    next(); 
  });
};

module.exports = authenticateToken;

