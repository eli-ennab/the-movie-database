import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GenresPage from './pages/GenresPage'
import PageNotFound from './pages/PageNotFound'
import Navigation from './components/Navigation'
import Container from 'react-bootstrap/Container'

import './assets/scss/App.scss'

const App = () => {
    return (
            <>
                <Navigation />

                <Container>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/genres" element={<GenresPage />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Container>

                <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
            </>
        )
}

export default App
