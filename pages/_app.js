import '../styles/globals.css';
import { AuthProvider } from '../contexts/Auth';
import ErrorBoundary from '../components/ErrorBoundary';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ErrorBoundary>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ErrorBoundary>
    </>
  )

}

export default MyApp
