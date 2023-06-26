import Image from 'next/image';
import { TopGradient } from '../components/ui/TopGradient';
import Header from '../components/ui/Header';

export default function UserGuide() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header h1="User Guide" />

      <TopGradient fromColor={'to-emerald-600'} toColor={'from-lime-200'} />
    </main>
  );
}
