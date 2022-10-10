import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
	<Box
		component="span"
		sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
		•
	</Box>
);

export default function BasicCard({ icon, text }) {
	return (
		<div className="bg-gradient-to-b my-4 from-green-700 via-green-700 to-green-600">
			<CardContent>
				<div className="text-4xl text-center">{icon}</div>
			</CardContent>
			
				<div className="text-2xl text-white pb-4 text-center">{text}</div>
			
		</div>
	);
}
