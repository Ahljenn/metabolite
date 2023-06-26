import Image from 'next/image';
import { TopGradient } from '../components/ui/TopGradient';
import Header from '../components/ui/Header';

export default function Fitness() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header h1="Fitness" />

      <TopGradient fromColor={'to-emerald-200'} toColor={'from-green-600'} />
    </main>
  );
}
