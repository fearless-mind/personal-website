export enum SkillType {
	Language = 'Language',
	Framework = 'Framework',
	Runtime = 'Runtime',
	Database = 'Database',
	DevOps = 'DevOps',
	Cloud = 'Cloud',
}

export enum SkillLayer {
	Backend = 'Backend',
	Frontend = 'Frontend',
	Platform = 'Platform',
}

export const AllSkillTypes: SkillType[] = [
	SkillType.Language,
	SkillType.Framework,
	SkillType.Runtime,
	SkillType.Database,
	SkillType.DevOps,
];

export type Skill = {
	name: string;
	experience: number;
	type: SkillType;
	layer: SkillLayer[];
	jobs?: string[];
	description?: string;
};

export const AllSkills: Skill[] = [
	{
		name: 'TypeScript/JavaScript',
		experience: 4,
		type: SkillType.Language,
		layer: [SkillLayer.Backend, SkillLayer.Frontend],
		jobs: ['Kainos', 'Nude', 'Ovo'],
	},
	{
		name: 'React',
		experience: 3,
		type: SkillType.Framework,
		layer: [SkillLayer.Frontend],
		jobs: ['Kainos', 'Nude', 'Ovo'],
	},
	{
		name: 'NextJS',
		experience: 1,
		type: SkillType.Framework,
		layer: [SkillLayer.Frontend],
		jobs: ['Personal projects'],
	},
	{
		name: 'React Native',
		experience: 1,
		type: SkillType.Framework,
		layer: [SkillLayer.Frontend],
		jobs: ['Nude'],
	},
	{
		name: 'VueJS',
		experience: 1,
		type: SkillType.Framework,
		layer: [SkillLayer.Frontend],
		jobs: ['Kainos'],
	},
	{
		name: 'NodeJS',
		experience: 3,
		type: SkillType.Runtime,
		layer: [SkillLayer.Backend],
		jobs: ['Kainos', 'Nude', 'Ovo'],
	},
	{
		name: 'JVM',
		experience: 4,
		type: SkillType.Runtime,
		layer: [SkillLayer.Backend],
		jobs: ['Kainos', 'Ovo'],
	},
	{
		name: 'Java',
		experience: 5,
		type: SkillType.Language,
		layer: [SkillLayer.Backend],
		jobs: ['Kainos', 'Ovo'],
	},
	{
		name: 'SpringBoot',
		experience: 1,
		type: SkillType.Framework,
		layer: [SkillLayer.Backend],
		jobs: ['Kainos', 'Ovo'],
	},
	{
		name: 'Scala',
		experience: 2,
		type: SkillType.Language,
		layer: [SkillLayer.Backend],
		jobs: ['Kainos', 'Ovo'],
	},
	{
		name: 'Kotlin',
		experience: 1.5,
		type: SkillType.Language,
		layer: [SkillLayer.Backend],
		jobs: ['Kainos', 'Ovo'],
	},
	{
		name: 'C#',
		experience: 1,
		type: SkillType.Language,
		layer: [SkillLayer.Backend],
		jobs: ['Kainos', 'Nude'],
	},
	{
		name: 'ASP.NET',
		experience: 1,
		type: SkillType.Framework,
		layer: [SkillLayer.Backend],
		jobs: ['Kainos', 'Nude'],
	},
	{
		name: 'AWS',
		experience: 3,
		type: SkillType.Cloud,
		layer: [SkillLayer.Platform],
		jobs: ['Kainos', 'Ovo'],
	},
	{
		name: 'Azure',
		experience: 1,
		type: SkillType.Cloud,
		layer: [SkillLayer.Platform],
		jobs: ['Kainos', 'Nude'],
	},
	{
		name: 'Terraform',
		experience: 1,
		type: SkillType.DevOps,
		layer: [SkillLayer.Platform],
		jobs: ['Ovo'],
	},
	{
		name: 'CDK',
		experience: 1,
		type: SkillType.DevOps,
		layer: [SkillLayer.Platform],
		jobs: ['Kainos', 'Ovo'],
	},
	{
		name: 'Kubernetes',
		experience: 1,
		type: SkillType.DevOps,
		layer: [SkillLayer.Platform],
		jobs: ['Ovo'],
	},
	{
		name: 'ArgoCD',
		experience: 1,
		type: SkillType.DevOps,
		layer: [SkillLayer.Platform],
		jobs: ['Ovo'],
	},
	{
		name: 'FluxCD',
		experience: 1,
		type: SkillType.DevOps,
		layer: [SkillLayer.Platform],
		jobs: ['Ovo'],
	},
	{
		name: 'CircleCI',
		experience: 1,
		type: SkillType.DevOps,
		layer: [SkillLayer.Platform],
		jobs: ['Nude', 'Ovo'],
	},
	{
		name: 'Github Actions',
		experience: 1,
		type: SkillType.DevOps,
		layer: [SkillLayer.Platform],
		jobs: ['Ovo'],
	},
	{
		name: 'AWS Serverless',
		experience: 1,
		type: SkillType.DevOps,
		layer: [SkillLayer.Platform],
		jobs: ['Kainos', 'Ovo'],
	},
];

export const BackendSkills: Skill[] = [];
