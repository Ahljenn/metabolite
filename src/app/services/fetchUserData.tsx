import { UserScreeningType } from '@/tools/diet-rank/rank.utils';

interface FetchUserDataProps {
  userEmail: string;
  setUserData: React.Dispatch<React.SetStateAction<UserScreeningType | undefined>>;
  setIsEffectRun: React.Dispatch<React.SetStateAction<boolean>>;
}

// Fetch user screening data from Mongo.
// - Sets use effect run for loading animation in front end
// - Sets user data only if data exists
const fetchUserData = async ({ userEmail, setUserData, setIsEffectRun }: FetchUserDataProps) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  if (userEmail) {
    headers.append('user-email', userEmail);
  }

  (async () => {
    const response = await fetch('/api/user_api', {
      method: 'GET',
      headers: headers,
    });

    const data = await response.json();

    if (data.message !== 'User data not found') {
      setUserData(data);
    }
    setIsEffectRun(true);
  })();
};

export default fetchUserData;
