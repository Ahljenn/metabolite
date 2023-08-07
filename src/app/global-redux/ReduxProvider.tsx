'use client';

import { Provider } from 'react-redux';
import { store } from './store';

interface AppProps {
  children: any;
}

export function ReduxProvider({ children }: AppProps) {
  return <Provider store={store}>{children}</Provider>;
}
