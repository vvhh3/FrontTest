import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { Provider } from 'react-redux'

import { Theme, ThemePanel } from "@radix-ui/themes";

import { PersistGate } from 'redux-persist/integration/react'
import { store, persitor } from './Components/RTK/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persitor}> {/* PersistGate говорит "Не рендерь App, пока Store полностью не восстановится." */}
        <Theme>
          <App />

        </Theme>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
