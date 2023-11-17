import { Cpu, Database, Palette } from "@phosphor-icons/react"

import { TrackProps } from "types"

export const EducationLevel = [
	{ name: "Junior/Middle School", value: "junior-school" },
	{ name: "High School/Secondary", value: "high-school" },
	{ name: "Undergraduate", value: "undergrad" },
	{ name: "Diploma", value: "diploma" },
	{ name: "BSc", value: "bachelors-degree" },
	{ name: "MSc", value: "masters-degree" },
	{ name: "Post Graduate", value: "postgrad" },
	{ name: "Doctorate", value: "phd" },
]

export const EmploymentStatus = ["employed", "unemployed", "self-employed"]

export const LearningTracks: TrackProps[] = [
	{
		id: "abb79999-6b6a-4010-bf94-517137967f4e",
		name: "engineering",
		icon: <Cpu />,
		description:
			"Explore the world of engineering with our diverse set of courses. Whether you're interested in backend development, cloud solutions, or crafting seamless user interfaces, we've got the expertise to guide you through the intricacies of each domain.",
		courses: [
			{
				id: "890db345-4dd8-461e-ba3f-9c2f9840045b",
				name: "backend engineering",
				description:
					"Dive into the backend realm and master the skills needed to build robust and scalable server-side applications.",
				duration: 12,
				modules: [
					{
						id: "da2e328e-6f63-4ea2-bfd7-f434977aa7c2",
						name: "Introduction to Backend Development",
						duration: 4,
					},
					{
						id: "3508b364-4b91-4b3b-9d46-69f50cf21c44",
						name: "Database Management",
						duration: 6,
					},
					{
						id: "d4be825c-2ab9-450c-a604-764aef92e160",
						name: "Server-side Scripting",
						duration: 5,
					},
					{
						id: "64ed5fca-5a97-413e-954f-4f113782a8f5",
						name: "Authentication and Authorization",
						duration: 7,
					},
					{
						id: "13d476b3-2c5f-4332-b9e6-a1013a459606",
						name: "RESTful API Design",
						duration: 6,
					},
					{
						id: "60a876c4-ce33-44f6-b533-0f64ff8cf56b",
						name: "Testing and Debugging in Backend",
						duration: 4,
					},
				],
			},
			{
				id: "bab675f0-40be-4f34-ba5c-061f787782eb",
				name: "cloud engineering",
				description:
					"Learn the ins and outs of cloud technologies, empowering you to architect and deploy applications on popular cloud platforms.",
				duration: 12,
				modules: [
					{
						id: "c06836b5-7d50-44d6-a42e-fc751f3b622b",
						name: "Cloud Computing Fundamentals",
						duration: 5,
					},
					{
						id: "ee2d9dc6-f403-4579-a2cf-e9101d8b1e50",
						name: "Deploying Applications on Cloud Platforms",
						duration: 8,
					},
					{
						id: "18bf3ac5-3c69-4286-8d8f-72cc71a74132",
						name: "Scalability and Performance in the Cloud",
						duration: 6,
					},
					{
						id: "1fe4441a-782c-477f-bb23-f792e61fcb1d",
						name: "Serverless Architecture",
						duration: 7,
					},
					{
						id: "815fb269-6000-4dda-84a3-cfd225cd1595",
						name: "Cloud Security Best Practices",
						duration: 5,
					},
					{
						id: "44c0fcb8-006c-4e8e-a91f-3fc4bf304c27",
						name: "Monitoring and Optimization in the Cloud",
						duration: 4,
					},
				],
			},
			{
				id: "3a5f10f5-8527-4a94-92b8-beb1a14d8ff4",
				name: "frontend engineering",
				description:
					"Unleash your creativity on the user interface. From responsive design to interactive user experiences, this course covers it all.",
				duration: 12,
				modules: [
					{
						id: "bee138a3-067d-4b80-823a-bea5e442e6ab",
						name: "HTML and CSS Basics",
						duration: 3,
					},
					{
						id: "2eae998f-72c2-46c8-bf10-0d6e611ac121",
						name: "JavaScript for Frontend Development",
						duration: 7,
					},
					{
						id: "0df139c1-2803-43d5-9949-2ac5c7763eac",
						name: "React Fundamentals",
						duration: 6,
					},
					{
						id: "ede5e945-09ac-40f6-960e-2778812e56c7",
						name: "Responsive Web Design",
						duration: 5,
					},
					{
						id: "c15598c7-5a43-40c5-812a-fc54cf844dde",
						name: "State Management with Redux",
						duration: 8,
					},
					{
						id: "ecbcaa65-682e-49ed-b631-da3f438fa7e1",
						name: "Advanced CSS Techniques",
						duration: 4,
					},
				],
			},
		],
	},
	{
		id: "bf87ecb4-d84b-4ad8-b72b-17fa76b16673",
		name: "data",
		icon: <Database />,
		description:
			"Immerse yourself in the world of data. Whether you're fascinated by analyzing data patterns, engineering data solutions, or delving into the intricacies of data science, our courses provide a comprehensive journey.",
		courses: [
			{
				id: "38519ddc-4b45-4212-987b-4cdfacd75f15",
				name: "data analysis",
				description:
					"Master the art of extracting meaningful insights from data through advanced analytics and visualization techniques.",
				duration: 12,
				modules: [
					{
						id: "fd39e455-0648-4336-96d5-1f4bd846c674",
						name: "Introduction to Data Analysis",
						duration: 4,
					},
					{
						id: "09ef7b91-12cb-4fb9-bccc-4b9f1c49252a",
						name: "Data Cleaning and Preprocessing",
						duration: 5,
					},
					{
						id: "00cdb0a5-e6c2-4c55-850b-ff0ca76a29ac",
						name: "Statistical Analysis",
						duration: 6,
					},
					{
						id: "707dc782-3b65-4c89-b66e-0bc229787394",
						name: "Data Visualization Techniques",
						duration: 7,
					},
					{
						id: "5d422025-9f5f-4165-b7c2-bfd78ddb993e",
						name: "Machine Learning for Data Analysis",
						duration: 8,
					},
					{
						id: "11917e0d-f5f7-4793-8adf-3215efe6a594",
						name: "Real-world Data Analysis Projects",
						duration: 6,
					},
				],
			},
			{
				id: "f44f02dc-12af-4570-9b27-54100a161ded",
				name: "data engineering",
				description:
					"Learn to design and implement robust data pipelines and infrastructure to support efficient data processing.",
				duration: 12,
				modules: [
					{
						id: "8a8a7785-6773-4cf7-a6c1-641e76f1862a",
						name: "Introduction to Data Engineering",
						duration: 5,
					},
					{
						id: "87bf0382-7e11-4ace-943a-569d745dd839",
						name: "Big Data Technologies",
						duration: 7,
					},
					{
						id: "56436135-bf81-4f15-8c6b-9bd34c906808",
						name: "Data Warehousing",
						duration: 6,
					},
					{
						id: "fadbc16f-9339-42fc-a1a4-1831158b0492",
						name: "ETL Processes",
						duration: 4,
					},
					{
						id: "102eac14-79ae-403a-a2e7-f5f5f88d6354",
						name: "Distributed Systems",
						duration: 8,
					},
					{
						id: "21fa2ff6-5456-4c06-9362-e74ff436c89f",
						name: "Real-time Data Processing",
						duration: 5,
					},
				],
			},
			{
				id: "92eb08be-5f1e-42e6-805c-f6cbe1e8bcef",
				name: "data science",
				description:
					"Explore the interdisciplinary field of data science, combining statistics, machine learning, and domain expertise to extract valuable insights.",
				duration: 12,
				modules: [
					{
						id: "ec912aab-ab01-4de7-ab4f-e042b7c7da6a",
						name: "Introduction to Data Science",
						duration: 4,
					},
					{
						id: "66df3e19-43f6-46b4-b8ed-80f294a61be0",
						name: "Data Exploration and Feature Engineering",
						duration: 6,
					},
					{
						id: "32c17327-5b73-40e1-8a8d-0fc19fbd8997",
						name: "Predictive Modeling",
						duration: 7,
					},
					{
						id: "6aa18e16-9f1c-4f4c-a198-1569dae13fc9",
						name: "Machine Learning Algorithms",
						duration: 8,
					},
					{
						id: "7960879f-c554-4687-b7bb-82d44b7793b1",
						name: "Deep Learning",
						duration: 5,
					},
					{
						id: "3c215926-d0ed-424c-b296-8ddcf05cee67",
						name: "Capstone Data Science Project",
						duration: 6,
					},
				],
			},
		],
	},
	{
		id: "dc2919d5-44ea-4882-89b9-b18f3504f4a7",
		name: "design",
		icon: <Palette />,
		description:
			"Unleash your creative potential in the design track. Whether you're inclined towards UI/UX design, graphics, or branding and logos, these courses will refine your artistic skills.",
		courses: [
			{
				id: "f1654cdc-9e2b-44dd-b068-134a0d7dcb6c",
				name: "ui/ux design",
				description:
					"Learn the principles of user interface and user experience design, creating visually appealing and user-friendly applications.",
				duration: 12,
				modules: [
					{
						id: "cf150f0e-b424-4d71-baf7-698c9732b6f4",
						name: "Introduction to UI/UX Design",
						duration: 4,
					},
					{
						id: "2c6ed6d4-8860-4769-a8e2-64d5a16e4e98",
						name: "User Research and Persona Creation",
						duration: 5,
					},
					{
						id: "93d8e700-be26-4530-81d7-169313960e82",
						name: "Wireframing and Prototyping",
						duration: 6,
					},
					{
						id: "c6a04bb9-a85f-42fe-8fcb-c49da6340849",
						name: "Visual Design Principles",
						duration: 7,
					},
					{
						id: "7c084c27-8001-418c-9f5e-ea65289f4732",
						name: "Interaction Design",
						duration: 8,
					},
					{
						id: "ca2fde2b-f8f8-4d60-bc03-7ad2176f15d2",
						name: "Usability Testing and Feedback",
						duration: 5,
					},
				],
			},
			{
				id: "17d9f796-a36d-44f6-90c3-b4ebbaf37362",
				name: "graphics design",
				description:
					"Dive into the world of visual communication, understanding how to convey messages effectively through graphic elements.",
				duration: 12,
				modules: [
					{
						id: "fb3a7ee2-4ed5-4ca2-be89-c0cd07371cf7",
						name: "Fundamentals of Graphics Design",
						duration: 3,
					},
					{
						id: "ec317a83-3065-454d-a45e-dd49743f3673",
						name: "Color Theory and Application",
						duration: 6,
					},
					{
						id: "395e0b58-3660-489d-8f7f-b15b245d802d",
						name: "Typography in Design",
						duration: 7,
					},
					{
						id: "05e65f7f-31b9-4e8e-86dc-b1183e52e7b2",
						name: "Digital Imaging and Illustration",
						duration: 8,
					},
					{
						id: "78fa4aa0-d4db-45f7-8497-3ec34a11b592",
						name: "Print and Digital Media Design",
						duration: 5,
					},
					{
						id: "332f6444-c2c1-414f-a4aa-aa9236aabc30",
						name: "Portfolio Development",
						duration: 4,
					},
				],
			},
			{
				id: "237ae59a-7a98-43fd-9bfb-54220e0401e2",
				name: "branding & logo",
				description:
					"Master the art of creating compelling brands and logos, establishing a strong visual identity for businesses and products.",
				duration: 12,
				modules: [
					{
						id: "d79e9636-0976-40b5-b11d-d17b2bb12282",
						name: "Introduction to Branding",
						duration: 5,
					},
					{
						id: "723676de-d554-4989-9f2b-c642b2c93468",
						name: "Logo Design Principles",
						duration: 7,
					},
					{
						id: "e00bdf19-0040-4455-93db-1fed6d7d430e",
						name: "Brand Identity Development",
						duration: 6,
					},
					{
						id: "819f65b9-29a5-4ad1-b630-0c003345b9c8",
						name: "Brand Strategy and Positioning",
						duration: 4,
					},
					{
						id: "a2553fc6-9a48-4756-ac70-d33154ba884c",
						name: "Trademark and Copyright in Branding",
						duration: 8,
					},
					{
						id: "16568679-b2e3-4294-9c07-0575bf376efa",
						name: "Branding Case Studies",
						duration: 5,
					},
				],
			},
		],
	},
]
