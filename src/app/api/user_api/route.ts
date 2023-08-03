import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '%/mongo/client';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    // let { db } = await clientPromise;
    // let bodyContent = JSON.parse(req.body);
    // console.log(bodyContent);
    res.status(200).json({ message: 'API call successful!' });
  } catch (err) {
    res.status(400).json({ message: 'Not able to send screening data to MongoDB. ' });
  }
}
