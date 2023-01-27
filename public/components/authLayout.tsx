import { AuthLayoutStyles } from "./authStyles"
import loginBg from '../images/login-bg.png'
import Image from "next/image"
import { ReactNode } from "react"

interface authProps {
    children: ReactNode
}


const AuthLayout = ({ children }: authProps) => {
    return (
        <AuthLayoutStyles >
            <div className="side">
                <Image className="image" src={loginBg} alt='man pressing laptop'/>
            </div>
            <div className="box">{children}</div>
        </AuthLayoutStyles>
    )
}

export default AuthLayout