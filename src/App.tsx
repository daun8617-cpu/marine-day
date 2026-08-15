import { useState } from 'react'
import Landing from './pages/Landing'
import RegistrationForm, { type RegistrationData } from './pages/RegistrationForm'

type Screen = 'landing' | 'registration-form'

function App() {
  const [screen, setScreen] = useState<Screen>('landing')

  const handleSubmit = (data: RegistrationData) => {
    console.log('사전등록 제출', data)
  }

  switch (screen) {
    case 'registration-form':
      return (
        <RegistrationForm onBack={() => setScreen('landing')} onSubmit={handleSubmit} />
      )
    case 'landing':
    default:
      return <Landing onRegister={() => setScreen('registration-form')} />
  }
}

export default App
