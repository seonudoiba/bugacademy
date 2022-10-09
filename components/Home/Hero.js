import React from "react";
import Button from "@mui/material/Button";
import PaymentIcon from "@mui/icons-material/Payment";
const Hero = () => {
	return (
		<div className="h-screen p-28 hero">
			<div className="text-6xl  text-bold text-white p-2">BUGA ACADEMY</div>
			<div className="text-bold text-green-700 px-3"> Knowledge To Change The World</div>
			<Button
				className=" text-white rounded-xl m-3 px-3 border-green-700"
				variant="outlined"
				startIcon={<PaymentIcon />}>
				BUY/SELL CRYPTO
			</Button>
		</div>
	);
};

export default Hero;
