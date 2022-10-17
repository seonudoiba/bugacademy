import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
	return (
		<Card sx={{ minWidth: 205 }}>
			<CardContent>
				<div className="text-3xl font-bold text-italic">WHO WE ARE</div>
				<div className="h-1 bg-red-700 w-12 ml-2 my-2"></div>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					We Learn to Earn
				</Typography>
				<div variant="body2">
					<p>
						This academy was first known as
						cryptospin academy in September, 2021 now known as the bullish green academy
						August , 2022 There has been a rebrand for those that are early to joined are
						lucky because they joined on discount prices
					</p>
					<p>
						BUGA is an online academy that educates students on the blockchain technology
						, #DEFI , crypto trading and supply of crypto signal.
					</p>
				</div>
			</CardContent>
			<CardActions>
				<Button size="small"><a href='http://t.me/bugacademy'>Learn more</a></Button>
			</CardActions>
		</Card>
	);
}
