


export default function handler(req, res) {
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;


    // Respond with the IP address
    res.status(200).json({ ip: ipAddress });
}
