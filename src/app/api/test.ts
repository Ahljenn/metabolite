import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({ message: 'TEST API call successful!' });
  } catch (err) {
    res.status(400).json({ message: 'TEST Not able to send screening data to MongoDB. ' });
  }
}
