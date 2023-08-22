import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './assets/scss/App.scss'

const App = () => {

return (
        <>

            <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        </>
    )
}

export default App
