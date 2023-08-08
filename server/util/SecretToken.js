const jwt = require('jsonwebtoken');

module.exports.createSecretToken = (id) => {
  // Load the secret key from environment variables
const secretKey = process.env.TOKEN_KEY;

if (!secretKey) {
    throw new Error('No secret key found. Make sure to set the TOKEN_KEY environment variable.');
}

return jwt.sign({ id }, secretKey, {
    expiresIn: '3d', // Example: Token will expire in 3 days
});
};