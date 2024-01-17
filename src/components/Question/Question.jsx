import { Minus, Plus } from '../Icons';
import './Question.css';

const Question = function ({ question }) {
	return (
		<div className='question'>
			<div className='question-header'>
				<h2 className='question-title'>{question.title}</h2>
				<button className='btn'>
					<Minus />
				</button>
			</div>

			<p className='answer'>{question.answer}</p>
		</div>
	);
};

export default Question;
