import React from 'react';
import { Experience, useRemoveExperienceMutation } from 'src/generated/graphql';
import classes from '../../styles/css/education-item.module.css';
import { format } from 'date-fns';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { confirmAlert } from 'src/utils/swal/confirmAlert';
import useDisplayError from 'src/hooks/useDisplayError';
import { removeExperienceItem } from 'src/utils/apollo-cache/me.query';

interface ExperienceItemProps {
	experienceItem: Experience;
	withActions?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experienceItem, withActions = false }) => {
	const { current, location, description, company, from, to, title, id } = experienceItem;
	const startTime = format(new Date(from), 'do LLLL uuuu');
	const endTime =
		current ? 'Now' :
		format(new Date(to), 'do LLLL uuuu');
	const timePeriod = `${startTime} To ${endTime}`;

	const [
		removeExperience,
		{ error, loading }
	] = useRemoveExperienceMutation();

	useDisplayError([
		error
	]);

	const handleRemove = async () => {
		const { isConfirmed } = await confirmAlert();
		if (isConfirmed) {
			await removeExperience({ variables: { id }, update: removeExperienceItem });
		}
	};

	const handleEdit = () => {};

	return (
		<React.Fragment>
			<div className={classes.course}>
				<div className={classes.course__preview}>
					<h6>Organization</h6>
					<h2>{company}</h2>
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
							<h6>Working Role At Organization</h6>
							<h4>{title}</h4>
						</div>
						<div className={classes.info__item}>
							<h6>Location</h6>
							<h4>{location}</h4>
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

export default ExperienceItem;
