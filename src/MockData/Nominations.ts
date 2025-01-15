import { ICategory } from "../types/Category";

export const nominations: ICategory[] = [
	{
		title: "Best Picture",
		nominees: [
			{
				title: "Gladiator",
				subtitle: "Ridley Scott",
            },
            {
                title: "The Avengers",
                subtitle: "Joss Whedon",
            },
            {
                title: "The Dark Knight",
                subtitle: "Christopher Nolan",
            },
            {
                title: "Inception",
                subtitle: "Christopher Nolan",
            },
            {
                title: "The Social Network",
				subtitle: "David Fincher",
			},
		],
	},
	{
		title: "Best Director",
		nominees: [
			{
				title: "Ridley Scott",
				subtitle: "Gladiator",
			},
			{
				title: "Joss Whedon",
				subtitle: "The Avengers",
			},
			{
				title: "Christopher Nolan",
				subtitle: "The Dark Knight",
			},
			{
				title: "Christopher Nolan",
				subtitle: "Inception",
			},
			{
				title: "David Fincher",
				subtitle: "The Social Network",
			},
		],
	},
];

