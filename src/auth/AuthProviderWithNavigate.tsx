import {AppState, Auth0Provider, User} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";
import React from "react";

type Props = {
    children: React.ReactNode;
}

const AuthProviderWithNavigate = ({children}: Props) => {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
    const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
    const navigate = useNavigate();
    if (!domain || !clientId || !redirectUri || !audience){
        throw new Error('unable to initialize auth')
    }

    const onRedirectCallback=(appState?: AppState, user?:User)=>{
       navigate('/auth-callback', {state: {appState, user}});
    }
    return (
        <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{
            redirect_uri: redirectUri,
            audience,
        }}
        onRedirectCallback={onRedirectCallback}>
            {children}
        </Auth0Provider>
    )
};


export default AuthProviderWithNavigate;