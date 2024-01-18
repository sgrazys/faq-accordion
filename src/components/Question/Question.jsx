import { Minus, Plus } from '../Icons';
import './Question.css';

const Question = function ({ question, currOpen, handleToggle, handleKeyPress }) {
	const isOpen = currOpen === question.id;
	return (
		<div
			onClick={() => handleToggle(question.id)}
			onKeyDown={(e) => handleKeyPress(e, question.id)}
			role='button'
			tabIndex={0}
			className='question'>
			<div className='question-header'>
				<h2
					className='question-title'
					style={isOpen ? { paddingBottom: '1.5em' } : null}>
					{question.title}{' '}
				</h2>
				<div
					role='button'
					className='btn'>
					{isOpen ? <Minus /> : <Plus />}
				</div>
			</div>
			{isOpen && <p className='answer'>{question.answer}</p>}
		</div>
	);
};

export default Question;
