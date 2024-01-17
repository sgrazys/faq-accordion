import './Card.css';
import { Star } from '../Icons';
import Question from '../Question/Question';

const Card = function ({ questions }) {
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
				/>
			))}
		</div>
	);
};

export default Card;
