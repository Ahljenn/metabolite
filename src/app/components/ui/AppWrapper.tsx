'use client';
import Footer from './Footer';

interface AppWrapperProps {
  children: any;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <section className="mb-20">{children}</section>
      <Footer />
    </div>
  );
};
export default AppWrapper;
