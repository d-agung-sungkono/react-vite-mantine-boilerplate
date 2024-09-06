import { AppShell } from '@mantine/core'
import { User } from '../../../@types/user'
import RouteApp from '../../../routes/route'
import HeaderComponent from '../../Header/Header'

const PublicLayout = ({ isAuthenticated, user } : { isAuthenticated: boolean, user: User | null }) => {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <HeaderComponent />
      </AppShell.Header>
      <AppShell.Main>
        <RouteApp isAuthenticated={isAuthenticated} user={user} />
      </AppShell.Main>
    </AppShell>
  )
}

export default PublicLayout