import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/PageNotFound'

import './assets/scss/App.scss'

const App = () => {
    return (
            <>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>

                <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
            </>
        )
}

export default App
