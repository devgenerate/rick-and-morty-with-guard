// @vendors
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

// @pages
import {
  CharacterDetail,
  Characters,
  Login,
  Logout,
  Favourites
} from '@/pages'

// @components
import {
  Navbar,
  NotFound,
  PrivateGuard,
  PublicGuard
} from '@/components'

// @store
import { store } from '@/redux'

// @constants
import {
  PRIVATE_BASE_PATH,
  PRIVATE_ROUTES,
  PUBLIC_BASE_PATH,
  PUBLIC_ROUTES
} from '@/constants'

import './app.css'

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <section className="app__navbar">
            <Navbar />
          </section>
          <section className="app__content">
            <Routes>
              <Route path={PUBLIC_BASE_PATH} element={<PublicGuard />}>
                <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
              </Route>
              <Route path={PRIVATE_BASE_PATH} element={<PrivateGuard />}>
                <Route path={PRIVATE_ROUTES.FAVOURITES} element={<Favourites />} />
              </Route>
              <Route index element={<Navigate to={PUBLIC_ROUTES.CHARACTERS} replace />} />
              <Route path={PUBLIC_ROUTES.CHARACTERS} element={<Characters />} />
              <Route path={PUBLIC_ROUTES.CHARACTER_DETAIL} element={<CharacterDetail />} />
              <Route path={PUBLIC_ROUTES.LOGOUT} element={<Logout />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </section>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
