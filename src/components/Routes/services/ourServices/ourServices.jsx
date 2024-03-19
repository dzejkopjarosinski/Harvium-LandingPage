import Service from "@/components/Routes/services/ourServices/service/service.jsx";
import serviceIcon from "@/assets/services/serviceDefaultIcon.png"
const OurServices = () => {

    return (
        <div className='bg-background-primary flex flex-col justify-center items-center gap-16 font-roboto text-white font-bold'>
            <h1 className='text-[40px] mt-12'>Nasze Usługi</h1>
            <div className='flex flex-wrap justify-center mb-32 p-5 gap-28'>
                <Service
                    logo={serviceIcon}
                    serviceHeading={'Long heading is what you see here in this feature section'}
                    serviceDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'}
                    serviceRoute={'/Harvium-LandingPage/'}
                />
                <Service
                    logo={serviceIcon}
                    serviceHeading={'Long heading is what you see here in this feature section'}
                    serviceDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'}
                    serviceRoute={'/Harvium-LandingPage/'}
                />
                <Service
                    logo={serviceIcon}
                    serviceHeading={'Long heading is what you see here in this feature section'}
                    serviceDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'}
                    serviceRoute={'/Harvium-LandingPage/'}
                />
            </div>
        </div>
    );
};

export default OurServices;
