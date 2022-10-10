
import Image from 'next/image'
import Card from '@mui/material/Card';
import AboutCard from './AboutCard'
const AboutHero = () => {
	return (
		<div className="md:grid grid-cols-2 md:p-24  m-8 md:m-4 gap-6 drop-shadow-lg bg-white">
			<AboutCard/>
			<div className="rounded-3xl py-8 md:py-0"> 
                <Image src='/AboutBuga.jpeg' alt='About Us' width={700} height={500} />
            </div>
		</div>
	);
};

export default AboutHero;
