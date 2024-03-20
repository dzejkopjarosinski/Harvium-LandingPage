import Reveal from "@/components/animations/reveal/reveal.jsx";
import ServiceCard from "@/components/Routes/services/servicesDescription/serviceCard/serviceCard.jsx";


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
                <div className='flex flex-wrap justify-center gap-48 pt-24'>
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>
        </div>
    );
};

export default ServicesDescription;
