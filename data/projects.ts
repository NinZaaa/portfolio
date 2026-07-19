import type { ProjectItem } from "@/types"

export const projects: ProjectItem[] = [
	{
		id: "library-management-system",
		title: "Library Management System",
		summary: "Python system for managing books, members, and borrowing records.",
		description:
			"A Python-based management tool that focuses on clean record handling, search flows, and basic automation for library operations.",
		technologies: ["Python"],
		tags: ["CLI", "Management", "Learning Project"],
		status: "Completed",
		image: "/images/placeholders/library-project.svg",
		featured: true,
	},
	{
		id: "student-management-system",
		title: "Student Management System",
		summary: "C++ project for handling student records and workflows.",
		description:
			"A C++ project built to strengthen programming fundamentals, data handling, and structured problem-solving through a practical use case.",
		technologies: ["C++"],
		tags: ["DSA", "Management", "Learning Project"],
		status: "Completed",
		image: "/images/placeholders/student-project.svg",
		featured: true,
	},
]

export const projectStatuses = ["All", "Completed", "In Progress", "Planned"] as const
