
import { RequiredAuthProvider, RedirectToLogin } from "@propelauth/react";
import Login from '../components/login'
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <RequiredAuthProvider
//         authUrl={process.env.REACT_APP_AUTH_URL}
//         displayWhileLoading={<Loading />}
//         displayIfLoggedOut={<RedirectToLogin />}
//     >
//         <Login />
//     </RequiredAuthProvider>,
//     document.getElementById("root")
// );

import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react'
import { useEffect, useState } from 'react'
async function whoAmI(accessToken) {
    return fetch('/api/whoami', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    }).then((res) => res.json())
}

const LoginPage = withAuthInfo((props) => {
    const logoutFunction = useLogoutFunction()
    const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions()
    // Or if you want to make links instead
    // const { getLoginPageUrl, getSignupPageUrl, getAccountPageUrl } = useHostedPageUrls()
    const [serverResponse, setServerResponse] = useState(undefined)

    useEffect(() => {
        whoAmI(props.accessToken).then(setServerResponse)
    }, [props.accessToken])

    if (props.isLoggedIn) {
        return (
            
            <div>
                <div>
            <b>Server Response:</b>
            <pre>{JSON.stringify(serverResponse, null, 2)}</pre>
        </div>
                <p>You are logged in as {props.user.email}</p>
                <button onClick={() => redirectToAccountPage()}>Account</button>
                <button onClick={() => logoutFunction(true)}>Logout</button>
            </div>
        )
    } else {
        return (
            <div>
                <div>
            <b>Server Response:</b>
            <pre>{JSON.stringify(serverResponse, null, 2)}</pre>
        </div>
                <p>You are not logged in</p>
                <button onClick={() => redirectToLoginPage()}>Login</button>
                <button onClick={() => redirectToSignupPage()}>Signup</button>
            </div>
        )
    }
})

export default LoginPage;
