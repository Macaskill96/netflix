import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt={'Netflix'} src={logo} />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sing In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}
console.log('header')