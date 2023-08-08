import { ObjectId } from 'mongodb';
import clientPromise from './client';

let client: any;
let db: any;
let users: any;
const init = async () => {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    users = await db.collection('users');
  } catch (error) {
    throw new Error('Failed to establish connection to the database');
  }
};

/////////////
/// USERS ///
/////////////

const findUserById = async (userId: string) => {
  try {
    if (!users) await init();

    const user = await users.findOne({ _id: new ObjectId(userId) });

    if (!user) throw new Error();

    return { user: { ...user, _id: user._id.toString() } };
  } catch (error) {
    return { error: 'Failed to find the user.' };
  }
};

const findUserByEmail = async (email: string) => {
  try {
    if (!users) await init();

    const user = await users.findOne({ email });

    if (!user) throw new Error();

    return { user: { ...user, _id: user._id.toString() } };
  } catch (error) {
    return { error: 'Failed to find the user.' };
  }
};

const updateUser = async (email: string, update: string) => {
  try {
    if (!users) await init();

    await users.updateOne({ email }, { $set: update });

    return { success: true };
  } catch (error) {
    return { error: 'Failed to reset the password.' };
  }
};

export { init, findUserById, findUserByEmail, updateUser };
