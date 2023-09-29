'use client';
import ReduxProvider from '&/ReduxProvider';
// import FadeWrapper from './FadeWrapper';
import Footer from './Footer';

interface AppWrapperProps {
  children: any;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <ReduxProvider>
      <div className="flex flex-col justify-between min-h-screen">
        <section className="mb-20">{children}</section>
        <Footer />
      </div>
    </ReduxProvider>
  );
};
export default AppWrapper;
