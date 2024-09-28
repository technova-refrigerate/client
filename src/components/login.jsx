
import { withAuthInfo } from '@propelauth/react'

const Login = withAuthInfo((props) => {
    // isLoggedIn and user are injected automatically from withAuthInfo
    if (props.isLoggedIn) {
        return <p>You are logged in as {props.user.email}</p>
    } else {
        return <p>You are not logged in</p>
    }
})

export default Login
