import Image from 'next/image';
import { TopGradient } from '../components/ui/TopGradient';
import Header from '../components/ui/Header';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header h1="About" />

      <TopGradient fromColor={'to-green-400'} toColor={'from-teal-400'} />
    </main>
  );
}
