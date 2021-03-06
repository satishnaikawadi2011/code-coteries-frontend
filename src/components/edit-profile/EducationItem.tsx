import React from 'react';
import { Education, useRemoveEducationMutation } from 'src/generated/graphql';
import classes from '../../styles/css/education-item.module.css';
import { format } from 'date-fns';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { confirmAlert } from 'src/utils/swal/confirmAlert';
import useDisplayError from 'src/hooks/useDisplayError';
import { removeEducationItem } from 'src/utils/apollo-cache/me.query';

interface EducationItemProps {
	educationItem: Education;
	withActions?: boolean;
}

const EducationItem: React.FC<EducationItemProps> = ({ educationItem, withActions = false }) => {
	const { current, degree, description, field, from, to, school, id } = educationItem;
	const startTime = format(new Date(from), 'do LLLL uuuu');
	const endTime =
		current ? 'Now' :
		format(new Date(to), 'do LLLL uuuu');
	const timePeriod = `${startTime} To ${endTime}`;

	const [
		removeEducation,
		{ error, loading }
	] = useRemoveEducationMutation();

	useDisplayError([
		error
	]);

	const handleRemove = async () => {
		const { isConfirmed } = await confirmAlert();
		if (isConfirmed) {
			await removeEducation({ variables: { id }, update: removeEducationItem });
		}
	};

	const handleEdit = () => {};

	return (
		<React.Fragment>
			<div className={classes.course}>
				<div className={classes.course__preview}>
					<h6>School / College / University</h6>
					<h2>{school}</h2>
				</div>
				<div className={classes.course__info}>
					<div className={classes.progress__container}>
						<div className={classes.progress} />
						<span className={classes.progress__text}>{timePeriod}</span>
					</div>
					<div
						className={classes.info}
						style={{
							marginBottom:

									withActions ? 50 :
									0
						}}
					>
						<div className={classes.info__item}>
							<h6>Degree</h6>
							<h4>{degree}</h4>
						</div>
						<div className={classes.info__item}>
							<h6>Field Of Study</h6>
							<h4>{field}</h4>
						</div>
						<div className={classes.info__item}>
							<h6>Description</h6>
							<p>{description}</p>
						</div>
					</div>
					{withActions && (
						<div className={classes.actions}>
							<Button
								className={classes.action}
								variant="contained"
								color="error"
								startIcon={<DeleteIcon />}
								onClick={handleRemove}
								disabled={loading}
							>
								Remove
							</Button>
							<Button
								className={classes.action}
								variant="contained"
								color="info"
								startIcon={<EditIcon />}
								onClick={handleEdit}
								disabled={loading}
							>
								Edit
							</Button>
						</div>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default EducationItem;
