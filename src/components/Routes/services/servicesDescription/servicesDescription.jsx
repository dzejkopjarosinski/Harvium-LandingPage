import Reveal from "@/components/animations/reveal/reveal.jsx";
import ServiceCard from "@/components/Routes/services/servicesDescription/serviceCard/serviceCard.jsx";
import serviceCardPhoto from "@/assets/services/serviceDescriptionImage.png"


const ServicesDescription = () => {

    return (
        <div className='bg-background-to-dark-gradient font-inter font-normal'>
            <div className='space-y-5 py-16'>
                <Reveal>
                    <h1 className='text-[40px] font-bold'>Lorem impsum</h1>
                </Reveal>
                <Reveal>
                    <span className='text-lg'>lorem ipsum</span>
                </Reveal>
                <div className='flex flex-wrap justify-center gap-48 pt-24 px-5'>
                    <ServiceCard
                        serviceHeader={'Lorem ipsum dolor sit amet ipsum dolor lorem'}
                        serviceDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.'}
                        servicePhoto={serviceCardPhoto}
                    />
                    <ServiceCard
                        serviceHeader={'Lorem ipsum dolor'}
                        serviceDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.'}
                        servicePhoto={serviceCardPhoto}
                    />
                    <ServiceCard
                        serviceHeader={'Lorem ipsum dolor'}
                        serviceDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.'}
                        servicePhoto={serviceCardPhoto}
                    />
                    <ServiceCard
                        serviceHeader={'Lorem ipsum dolor'}
                        serviceDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.'}
                        servicePhoto={serviceCardPhoto}
                    />
                </div>
            </div>
        </div>
    );
};

export default ServicesDescription;
