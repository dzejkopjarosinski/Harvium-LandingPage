import { Link } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Service = ({ logo, serviceHeading, serviceDescription, serviceRoute }) => {
    return (
        <div className='flex flex-col justify-center items-center max-w-[405px] text-center font-normal gap-6'>
            <img src={logo} className='size-12' alt='service logo'/>
            <div className='text-2xl font-bold'>{serviceHeading}</div>
            <p>{serviceDescription}</p>
            <Link to={serviceRoute} className='flex justify-center items-center gap-1'>
                <div>Sprawdź ofertę</div>
                <NavigateNextIcon />
            </Link>
        </div>
    );
};

export default Service;
