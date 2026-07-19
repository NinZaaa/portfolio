import type { SkillCategory } from "@/types"

export const skillCategories: SkillCategory[] = [
	{
		id: "programming",
		label: "Programming",
		icon: "code",
		items: ["Python", "C", "C++", "HTML", "CSS", "JavaScript (Learning)", "Git (Learning)"],
	},
	{
		id: "cybersecurity",
		label: "Cybersecurity",
		icon: "shield",
		items: ["Linux", "Networking", "OWASP", "Wireshark", "Burp Suite", "Nmap"],
	},
	{
		id: "electronics",
		label: "Electronics",
		icon: "cpu",
		items: ["Circuit Fundamentals", "Embedded Basics", "Signal Concepts"],
	},
	{
		id: "problem-solving",
		label: "Problem Solving",
		icon: "brain",
		items: ["Analytical Thinking", "Debugging", "Systematic Approach"],
	},
]
