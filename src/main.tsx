import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDom from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryclient = new QueryClient();

ReactDom.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryclient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>

)
