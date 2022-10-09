import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";

const drawerWidth = 240;

const Navbar = () => {
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Box className="cursor-pointer p-2">
				<Link href="/" className="m-2 cursor-pointer">
					<Image src="/../public/bugacedemy.png" alt="Buga" width={100} height={40} />
				</Link>
			</Box>

			<Divider />
			<List>
				<ListItem>
					<ListItemButton sx={{ textAlign: "center" }}>
						<Link href="/" className="m-2">
							Home
						</Link>
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton sx={{ textAlign: "center" }}>
						<Link href="/About" className="m-2">
							About Us
						</Link>
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton sx={{ textAlign: "center" }}>
						<Link href="/Contact" className="m-2">
							Contact Us
						</Link>
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton sx={{ textAlign: "center" }}>
						<Link href="/Courses" className="m-2">
							Online Courses
						</Link>
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton sx={{ textAlign: "center" }}>
						<Link href="/Testimonials" className="m-2">
							Testimonials
						</Link>
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);
	return (
		<div>
			<Box>
				<AppBar component="nav" className="bg-green-700 px-16 ">
					<Toolbar className="flex justify-between">
						<div className="cursor-pointer flex items-center justify-between">
							<IconButton
								aria-label="open drawer"
								edge="start"
								onClick={handleDrawerToggle}
								sx={{ mr: 2, display: { sm: "none" } }}>
								<MenuIcon />
							</IconButton>

							<Link href="/" className="m-2">
								<Image
									src="/../public/bugacedemy.png"
									alt="Buga"
									width={100}
									height={40}
								/>
							</Link>
						</div>

						<Box sx={{ display: { xs: "none", sm: "block" } }}>
							<Button sx={{ px: 3, color: "#fff" }}>
								<Link href="/" className="m-2">
									Home
								</Link>
							</Button>
							<Button sx={{ px: 3, color: "#fff" }}>
								<Link href="/About" className="m-2">
									About Us
								</Link>
							</Button>
							<Button sx={{ px: 3, color: "#fff" }}>
								<Link href="/Contact" className="m-2">
									Contact Us
								</Link>
							</Button>
							<Button sx={{ px: 3, color: "#fff" }}>
								<Link href="/Courses" className="m-2">
									Online Courses
								</Link>
							</Button>
							<Button sx={{ px: 3, color: "#fff" }}>
								<Link href="/Testimonials" className="m-2">
									Testimonials
								</Link>
							</Button>
						</Box>
					</Toolbar>
				</AppBar>
				<Box component="nav">
					<Drawer
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: { xs: "block", sm: "none" },
							"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
						}}>
						{drawer}
					</Drawer>
				</Box>
			</Box>
		</div>
	);
};

export default Navbar;
