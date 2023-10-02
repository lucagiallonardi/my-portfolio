import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const handleClick = (link)=>{
    const [exit, setExit] = useState(false);
    const navigate = useNavigate();

    setExit(true);
    setTimeout(() => {
        navigate(link);
      }, 800);
}

export default handleClick();