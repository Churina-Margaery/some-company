import { type JSX } from 'react'

import AppHeader from '../../components/header/header'
import MainSection from '../../components/main-section/main-section'

export default function MainPage(): JSX.Element {
  return (
    <div>
      <AppHeader />
      <MainSection />
    </div>
  )
}
