import React from "react";
import Card from "../Card";
import PaymentIcon from "@mui/icons-material/Payment";
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import Person4Icon from '@mui/icons-material/Person4';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
const Hero = () => {
	return (
		<div className="md:h-screen md:p-28 p-12 hero  text-center md:text-left">
			<div>
				<div className="text-2xl md:text-4xl  text-bold text-white p-2">BULLISH GREEN ACADEMY</div>
				<div className="text-sm md:text-bold text-green-700 px-6">
					{" "}
					We Learn to Earn
				</div>
				<button class="bg-transparent hover:scale-110 mx-8 my-6 hover:bg-green-700 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded">
				<a href="https://wa.link/29383j"><PaymentIcon /> BUY/SELL CRYPTO</a>
				</button>
			</div>
			<div className='md:grid grid-cols-3 gap-6'>
				<Card  icon={<StickyNote2Icon sx={{ fontSize: 100 }} className='text-white'/>} text='Certified courses'/>
				<Card icon={<Person4Icon sx={{ fontSize: 100 }} className='text-white'/>} text='Certified Instructors'/>
				<Card icon={<DriveFileRenameOutlineIcon sx={{ fontSize: 100  }} className='text-white'/>} text='Top classes & materials'/>
				
			</div>
		</div>
	);
};

export default Hero;
