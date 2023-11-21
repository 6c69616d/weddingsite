import jwt from 'jsonwebtoken';

import dbConnect from '../../../../lib/dbConnect';
import Guest from '../../../../lib/models/Guest';

const SECRET_KEY = process.env.SECRET_KEY;

const opts = {
  expiresIn: '24h',
};

export default async function handler(req, res) {
  const {
    method,
    body: { rsvpCode },
  } = req;
  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const guest = await Guest.findOne({ rsvpCode });
        let token;

        if (guest) {
          token = jwt.sign({ user: rsvpCode }, SECRET_KEY, opts);
          res.status(200).json({ success: true, token, guest });
        } else {
          res.status(404).json({ success: false, message: 'Not found' });
        }
      } catch (err) {
        console.log('err', err);
        res.status(500).json({ success: false, message: 'Server error' });
      }
      break;
    default:
      res.status(400).json({
        success: false,
        message: 'Wrong HTTP method - only POST accepted',
      });
  }
}
