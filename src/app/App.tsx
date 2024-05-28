import { RouterProvider } from 'react-router-dom'
import { router } from './router'

const App = () => {
	const appRouter = router()
	return <RouterProvider router={appRouter} />
}

export default App
