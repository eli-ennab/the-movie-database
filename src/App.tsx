import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'
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
                        <Route path="/test" element={<TestPage />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Container>

                <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
            </>
        )
}

export default App
