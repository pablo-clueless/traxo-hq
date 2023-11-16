import {
	DiscordLogo,
	FacebookLogo,
	LinkedinLogo,
	TwitterLogo,
} from "@phosphor-icons/react"

export const footerLinks = [
	{ heading: "Company", links: [
		{ label: "About TraxoHQ", url: "/about" },
		{ label: "Contact", url: "/contact" },
		{ label: "Hire", url: "/" },
		{ label: "Partner", url: "/" },
		{ label: "Scholarships", url: "/" },
	]},
	{ heading: "Tracks", links: [
		{ label: "Engineering", url: "/" },
		{ label: "Data", url: "/" },
		{ label: "Product", url: "/" },
	]},
	{ heading: "Programs", links: [
		{ label: "Backend Engineering", url: "/" },
		{ label: "Cloud Engineering", url: "/" },
		{ label: "Frontend Engineering", url: "/" },
		{ label: "Product Design", url: "/" },
		{ label: "Product Management", url: "/" },
		{ label: "Data Analysis", url: "/" },
		{ label: "Data Engineering", url: "/" },
		{ label: "Data Science", url: "/" },
	]},
	{ heading: "Resources", links: [
		{ label: "Blog", url: "/blog" },
		{ label: "Privacy Policy", url: "/" },
		{ label: "Terms of Service", url: "/" },
		{ label: "Cookie Policy", url: "/" },
		{ label: "FAQs", url: "/" },
	]},
]

export const navLinks = [
	{ label: "about", url: "/about" },
	{ label: "tracks", url: "/tracks" },
	{ label: "blog", url: "/blog" },
	{ label: "contact", url: "/contact" },
]

export const socialLinks = [
	{
		url: { href: "https://discord.gg/", target: "_blank" },
		icon: <DiscordLogo />,
	},
	{
		url: { href: "https://facebook.com/", target: "_blank" },
		icon: <FacebookLogo />,
	},
	{
		url: { href: "https://linkedin.com/com/", target: "_blank" },
		icon: <LinkedinLogo />,
	},
	{ url: { href: "https://x.com/", target: "_blank" }, icon: <TwitterLogo /> },
]
