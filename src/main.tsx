import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import vi from './assets/i18n/vi.json'
import en from './assets/i18n/en.json'
import { AppProvider } from './contexts/app.context'
import App from './App'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})
// eslint-disable-next-line import/no-named-as-default-member
i18n.init({
  lng: localStorage.getItem('lng') || 'en',
  interpolation: { escapeValue: false },
  // detection:,
  resources: {
    en: {
      translation: en
    },
    vi: {
      translation: vi
    }
  }
})
ReactDOM.createRoot(document.getElementById('ecommerce-app') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <App />
          </AppProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
)
