import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()
  return <>{t('First line translated')}</>
}

export default App
