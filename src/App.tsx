import { useState } from 'react'
import Landing from './pages/Landing'
import RegistrationForm, {
  type RegistrationData,
  type RegistrationFormState,
} from './pages/RegistrationForm'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RegistrationComplete from './pages/RegistrationComplete'

type Screen = 'landing' | 'registration-form' | 'privacy-policy' | 'registration-complete'

const emptyRegistrationForm: RegistrationFormState = {
  name: '',
  phone: '',
  email: '',
  organization: '',
  agreed: false,
}

function App() {
  const [screen, setScreen] = useState<Screen>('landing')
  const [formState, setFormState] = useState<RegistrationFormState>(emptyRegistrationForm)
  const [registration, setRegistration] = useState<RegistrationData | null>(null)

  const handleSubmit = (data: RegistrationData) => {
    setRegistration(data)
    setScreen('registration-complete')
  }

  const handleHome = () => {
    setFormState(emptyRegistrationForm)
    setScreen('landing')
  }

  switch (screen) {
    case 'registration-form':
      return (
        <RegistrationForm
          value={formState}
          onChange={setFormState}
          onBack={() => setScreen('landing')}
          onViewPrivacyPolicy={() => setScreen('privacy-policy')}
          onSubmit={handleSubmit}
        />
      )
    case 'privacy-policy':
      return (
        <PrivacyPolicy
          onBack={() => setScreen('registration-form')}
          onAgree={() => {
            setFormState({ ...formState, agreed: true })
            setScreen('registration-form')
          }}
        />
      )
    case 'registration-complete':
      return registration ? (
        <RegistrationComplete data={registration} onHome={handleHome} />
      ) : (
        <Landing onRegister={() => setScreen('registration-form')} />
      )
    case 'landing':
    default:
      return <Landing onRegister={() => setScreen('registration-form')} />
  }
}

export default App
