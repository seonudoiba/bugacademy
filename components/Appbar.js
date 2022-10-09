import React from "react";
import Image from "next/image";
import Link from "next/link";
const Appbar = () => {
  
	return (
		<div className=' pt-24'>
			<div class="topnav" id="myTopnav">
				
				<Link href="/" className="m-2 active cursor-pointer">
					<Image src="/../public/bugacedemy.png" alt="Buga" width={100} height={40} />
				</Link>
				<a href="#news">News</a>
				<a href="#contact">Contact</a>
				<a href="#about">About</a>
				{/* <a href="javascript:void(0);" class="icon" onClick={navHandle}>
					<i class="fa fa-bars"></i>
				</a> */}
			</div>
		</div>
	);
};

export default Appbar;
