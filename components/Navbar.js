import React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
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
		<div onClick={handleDrawerToggle} className="text-center">
			<div className="cursor-pointer p-2">
				<Link href="/" className="m-2 cursor-pointer">
					<a>
						<Image src="/bugacedemy.png" alt="Buga" width={100} height={40} />
					</a>
				</Link>
			</div>

			<Divider />
			<div>
				<ListItem>
					<ListItemButton sx={{ textAlign: "center" }}>
						<Link href="/" className="m-2">
							<a>Home</a>
						</Link>
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton sx={{ textAlign: "center" }}>
						<Link href="/About" className="m-2">
							<a>About Us</a>
						</Link>
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton sx={{ textAlign: "center" }}>
						<Link href="/Contact" className="m-2">
							<a>Contact Us</a>
						</Link>
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton sx={{ textAlign: "center" }}>
						<Link href="/Courses" className="m-2">
							<a>Online Courses</a>
						</Link>
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton sx={{ textAlign: "center" }}>
						<Link href="/Testimonials" className="m-2">
							<a>Testimonials</a>
						</Link>
					</ListItemButton>
				</ListItem>
			</div>
		</div>
	);
	return (
		<div className="w-full">
			<div component="nav" className="md:bg-gray-700 py-4 px-16 ">
				<div className="flex justify-between py-2">
					<div className="cursor-pointer flex items-center justify-between">
						<IconButton
							aria-label="open drawer"
							edge="start"
							size="large"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { md: "none" } }}>
							<MenuIcon />
						</IconButton>
						<div className="flex items-center w-72 md:w-auto md:hidden">
							<Link href="/">
								<a>
									<Image src="/logo2.png" alt="Buga" width={200} height={50} />
								</a>
							</Link>
						</div>
						<div className="hidden md:block">
							<Link href="/" className="m-2 ">
								<a>
									<Image src="/bugacedemy.png" alt="Buga" width={120} height={40} />
								</a>
							</Link>
						</div>
					</div>

					<div className="hidden md:block">
						<Button sx={{ px: 3, color: "#fff" }}>
							<Link href="/" className="m-2 text-3xl hover:text-red font-bold">
								<a>Home</a>
							</Link>
						</Button>
						<Button sx={{ px: 3, color: "#fff" }}>
							<Link href="/About" className="m-2 text-3xl hover:text-red font-bold">
								<a>About Us</a>
							</Link>
						</Button>
						<Button sx={{ px: 3, color: "#fff" }}>
							<Link href="/Contact" className="m-2 text-3xl hover:text-red font-bold">
								<a>Contact Us</a>
							</Link>
						</Button>
						<Button sx={{ px: 3, color: "#fff" }}>
							<Link href="/Courses" className="m-2 text-3xl hover:text-red font-bold">
								<a>Online Courses</a>
							</Link>
						</Button>
						<Button sx={{ px: 3, color: "#fff" }}>
							<Link
								href="/Testimonials"
								className="m-2 text-3xl hover:text-red font-bold">
								<a>Testimonials</a>
							</Link>
						</Button>
					</div>
				</div>
			</div>
			<div component="nav">
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": { divSizing: "border-div", width: drawerWidth },
					}}>
					{drawer}
				</Drawer>
			</div>
		</div>
	);
};

export default Navbar;
