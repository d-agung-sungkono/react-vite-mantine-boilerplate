import { AppShell } from '@mantine/core'
import RouteApp from '../../../routes/route'
import FooterComponent from '../../Footer/Footer'
import HeaderComponent from '../../Header/Header'

const AuthLayout = () => {
  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
    >
      <AppShell.Header>
        <HeaderComponent />
      </AppShell.Header>
      <AppShell.Main>
        <RouteApp />
      </AppShell.Main>
      <AppShell.Footer>
        <FooterComponent />
      </AppShell.Footer>
    </AppShell>
  )
}

export default AuthLayout