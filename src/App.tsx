import { useState } from 'react'
import Landing from './pages/Landing'
import RegistrationForm, { type RegistrationData } from './pages/RegistrationForm'
import RegistrationComplete from './pages/RegistrationComplete'

type Screen = 'landing' | 'registration-form' | 'registration-complete'

function App() {
  const [screen, setScreen] = useState<Screen>('landing')
  const [registration, setRegistration] = useState<RegistrationData | null>(null)

  const handleSubmit = (data: RegistrationData) => {
    setRegistration(data)
    setScreen('registration-complete')
  }

  switch (screen) {
    case 'registration-form':
      return (
        <RegistrationForm onBack={() => setScreen('landing')} onSubmit={handleSubmit} />
      )
    case 'registration-complete':
      return registration ? (
        <RegistrationComplete data={registration} onHome={() => setScreen('landing')} />
      ) : (
        <Landing onRegister={() => setScreen('registration-form')} />
      )
    case 'landing':
    default:
      return <Landing onRegister={() => setScreen('registration-form')} />
  }
}

export default App
