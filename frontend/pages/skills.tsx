import { Chip, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { AllSkills, Skill, SkillType, AllSkillTypes } from '@/src/data/skills';

function SkillItem({ name, experience, type, description }: Skill) {
	return (
		<div className="flex flex-row my-4 w-full">
			<div className="basis-3/4">
				<Typography variant="h5">{name}</Typography>
				<Typography variant="paragraph">
					{experience}-{experience === 1 ? 'year' : 'years'}
				</Typography>
				<Typography variant="paragraph">{description}</Typography>
			</div>
			<div
				className={`basis-1/4 flex justify-center items-center align-middle w-full`}
			>
				<div>
					<Chip size="sm" variant="outlined" value={type} />
				</div>
			</div>
		</div>
	);
}

type SkillTypeSelectorProps = {
	skills: SkillType[];
	selected: SkillType[];
	onTap: (skillType: SkillType) => void;
};

type SkillTypeItem = {
	skill: SkillType;
	isSelected: boolean;
	onItemTap: () => void;
};

function SkillTypeItem({ skill, isSelected, onItemTap }: SkillTypeItem) {
	const variant = isSelected ? 'filled' : 'outlined';

	return (
		<Chip
			size="sm"
			variant={variant}
			key={skill}
			value={skill}
			onTap={onItemTap}
		/>
	);
}

function SkillTypeSelector({
	skills,
	selected,
	onTap,
}: SkillTypeSelectorProps) {
	return (
		<div className="flex flex-wrap h-12 items-center w-full">
			{skills.map((item) => {
				const isSelected = selected.includes(item);
				return (
					<div key={item} className="m-1">
						<SkillTypeItem
							skill={item}
							isSelected={isSelected}
							onItemTap={() => onTap(item)}
						></SkillTypeItem>
					</div>
				);
			})}
		</div>
	);
}

export default function Skills() {
	const [selected, setSelected] = useState<SkillType[]>(AllSkillTypes);

	function handleOnTap(skillType: SkillType) {
		if (selected.includes(skillType)) {
			const index = selected.findIndex((x) => x === skillType);
			const left = selected.slice(0, index);
			const right = selected.slice(index + 1, selected.length);
			setSelected([...left, ...right]);
		} else {
			setSelected([...selected, skillType]);
		}
	}

	return (
		<div className="mx-6 md:mx-12 my-4 md:my-8">
			<Typography variant="h1">Skills</Typography>
			<Typography variant="paragraph" className="mb-2 text-gray-600">
				Tap on the categories to filter through
			</Typography>
			<SkillTypeSelector
				skills={AllSkillTypes}
				selected={selected}
				onTap={handleOnTap}
			></SkillTypeSelector>

			<div className="mt-10 md:mt-6">
				{AllSkills.filter((item) => selected.includes(item.type)).map(
					(item) => (
						<SkillItem key={item.name} {...item} />
					),
				)}
			</div>
		</div>
	);
}

export function getStaticProps() {
	return {
		props: {
			title: 'Skills',
		},
	};
}
