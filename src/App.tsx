import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GenrePage from './pages/GenrePage'
import GenresPage from './pages/GenresPage'
import MoviePage from './pages/MoviePage'
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
                        <Route path="/genres/:id" element={<GenrePage />} />
                        <Route path="/movies/:id" element={<MoviePage />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Container>

                <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
            </>
        )
}

export default App
