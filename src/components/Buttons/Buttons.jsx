/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react"
import { useNavigate } from "react-router-dom"
export const Button1 = ({ children, variant, color, size, role, href, className }) => {
    const navigate = useNavigate()
    const OnClick = () => {
        if (role === "link") {
           navigate(href) 
        }
    }
   return <Button className={className} onClick={OnClick} variant={variant} color={color} size={size}>
        {children}
    </Button>
}