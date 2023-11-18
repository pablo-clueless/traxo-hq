import {
	Bell,
	Book,
	Books,
	CreditCard,
	DiscordLogo,
	FacebookLogo,
	Gear,
	LinkedinLogo,
	SealCheck,
	Tray,
	TwitterLogo,
	User,
} from "@phosphor-icons/react"

export const DashboardLinks = [
	{ icon: <User weight="duotone" />, label: "profile", url: "/dashboard" },
	{ icon: <Book weight="duotone" />, label: "courses", url: "/dashboard" },
	{ icon: <SealCheck weight="duotone" />, label: "badges", url: "/dashboard" },
	{ icon: <Books weight="duotone" />, label: "library", url: "/dashboard" },
	{ icon: <Tray weight="duotone" />, label: "inbox", url: "/dashboard" },
	{ icon: <Bell weight="duotone" />, label: "notifications", url: "/dashboard" },
	{ icon: <CreditCard weight="duotone" />, label: "billing", url: "/dashboard" },
	{ icon: <Gear weight="duotone" />, label: "settings", url: "/dashboard" },
]

export const footerLinks = [
	{
		heading: "Company",
		links: [
			{ label: "About TraxoHQ", url: "/about" },
			{ label: "Contact", url: "/contact" },
			{ label: "Career", url: "/" },
			{ label: "Hire", url: "/" },
			{ label: "Partner", url: "/" },
			{ label: "Scholarships", url: "/" },
		],
	},
	{
		heading: "Tracks",
		links: [
			{
				label: "Engineering",
				url: "/tracks/abb79999-6b6a-4010-bf94-517137967f4e",
			},
			{ label: "Data", url: "/tracks/bf87ecb4-d84b-4ad8-b72b-17fa76b16673" },
			{ label: "Design", url: "/tracks/dc2919d5-44ea-4882-89b9-b18f3504f4a7" },
		],
	},
	{
		heading: "Programs",
		links: [
			{ label: "Backend Engineering", url: "/" },
			{ label: "Cloud Engineering", url: "/" },
			{ label: "Frontend Engineering", url: "/" },
			{ label: "Ui/Ux Design", url: "/" },
			{ label: "Graphics Design", url: "/" },
			{ label: "Data Analysis", url: "/" },
			{ label: "Data Engineering", url: "/" },
			{ label: "Data Science", url: "/" },
		],
	},
	{
		heading: "Resources",
		links: [
			{ label: "Blog", url: "/blog" },
			{ label: "Privacy Policy", url: "/" },
			{ label: "Terms of Service", url: "/" },
			{ label: "Cookie Policy", url: "/" },
			{ label: "FAQs", url: "/" },
		],
	},
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
