import '../styles/globals.css';
import { AuthProvider } from '../contexts/Auth';
import ErrorBoundary from '../components/ErrorBoundary';
import { ThemeProvider } from '../contexts/theme';
import { StepperContext } from '../contexts/StepperContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ErrorBoundary>
        <StepperContext>
          <ThemeProvider>
            <AuthProvider>
              <Component {...pageProps} />
            </AuthProvider>
          </ThemeProvider>
        </StepperContext>
      </ErrorBoundary>
    </>
  )

}

export default MyApp
