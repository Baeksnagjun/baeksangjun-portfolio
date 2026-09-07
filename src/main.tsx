import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux';
import { store } from './shared/store/store.ts';

const queryclient = new QueryClient();

ReactDom.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <QueryClientProvider client={queryclient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>
  </Provider>

)
