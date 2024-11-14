// pages/api/signup.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, email, password } = req.body;

        // Perform backend operations here, such as saving user to a database
        console.log('Received signup data:', { username, email, password });

        // Example: Respond with a success message
        res.status(200).json({ message: 'Signup successful' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
