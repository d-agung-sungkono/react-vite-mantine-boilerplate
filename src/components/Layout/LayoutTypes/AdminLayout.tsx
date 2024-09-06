import { AppShell } from '@mantine/core'
import { useDocumentTitle } from '@mantine/hooks'
import { User } from '../../../@types/user'
import appConfig from '../../../configs/app.config'
import RouteApp from '../../../routes/route'
import HeaderComponent from '../../Header/Header'
import SidebarComponent from '../../Sidebar/Sidebar'

const AdminLayout = ({ isAuthenticated, user } : { isAuthenticated: boolean, user: User | null }) => {
  useDocumentTitle(`Admin | ${appConfig.appName}`);

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: isAuthenticated ? 300 : 0,
        breakpoint: 'xs',
      }}
    >
      <AppShell.Header>
        <HeaderComponent />
      </AppShell.Header>
      <AppShell.Navbar>
        <SidebarComponent />
      </AppShell.Navbar>
      <AppShell.Main>
        <RouteApp isAuthenticated={isAuthenticated} user={user} />
      </AppShell.Main>
    </AppShell>
  )
}

export default AdminLayout