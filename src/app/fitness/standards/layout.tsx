import StandardsButtons from './StandardsButtons';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <StandardsButtons />
    {children}
  </>
);

export default RootLayout;
