import { Navigate, replace } from "react-router-dom";

interface ProtectedRoutesProps {
    isAuthenticated:boolean;
    children: React.ReactNode
}
const ProtectedRoutes: React.FC<ProtectedRoutesProps>=({isAuthenticated, children})=>{
    if(!isAuthenticated){
       <Navigate to='/' replace />
    }
return (
<>
{children}
</>
)
}
export default ProtectedRoutes