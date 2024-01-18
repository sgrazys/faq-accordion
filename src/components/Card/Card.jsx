import './Card.css';

import { Star } from '../Icons';
import Question from '../Question/Question';
import { useState } from 'react';

const questions = [
	{
		id: 1,
		title: 'What is Frontend Mentor, and how will it help me?',
		answer: `Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
  all levels and ideal for portfolio building.`,
	},
	{
		id: 2,
		title: 'Is Frontend Mentor free?',
		answer: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.`,
	},
	{
		id: 3,
		title: 'Can I use Frontend Mentor projects in my portfolio?',
		answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!`,
	},
	{
		id: 4,
		title: 'Is Frontend Mentor free?',
		answer: `The best place to get help is inside Frontend Mentor's Discord community. There's a help
	channel where you can ask questions and seek support from other community members.`,
	},
];

const Card = function () {
	const [currOpen, setCurOpen] = useState(null);

	function handleToggle(id) {
		setCurOpen((pre) => (pre === id ? null : id));
	}

	function handleKeyPress(e, id) {
		const pressedKey = e.key;

		if (pressedKey === 'Enter') {
			handleToggle(id);
		}
	}

	return (
		<div className='card'>
			<div className='card-heading'>
				<div className='card-icon'>
					<Star />
				</div>
				<h1 className='card-title'>
					Faq<span>s</span>
				</h1>
			</div>
			{questions.map((q) => (
				<Question
					question={q}
					key={q.id}
					currOpen={currOpen}
					handleToggle={handleToggle}
					handleKeyPress={handleKeyPress}
				/>
			))}
		</div>
	);
};

export default Card;
