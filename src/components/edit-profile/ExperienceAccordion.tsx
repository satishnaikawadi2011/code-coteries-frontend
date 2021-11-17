import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Experience } from 'src/generated/graphql';
import ExperienceItem from './ExperienceItem';
import JobIcon from 'src/icons/JobIcon';

interface Props {
	experienceItems?: Experience[];
}

const ExperienceItemsAccordion: React.FC<Props> = ({ experienceItems = [] }) => {
	const [
		expanded,
		setExpanded
	] = React.useState<string | false>(false);

	const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		setExpanded(

				isExpanded ? panel :
				false
		);
	};

	return (
		<div>
			{experienceItems.map((e) => {
				return (
					<Accordion key={e.id} expanded={expanded === e.id} onChange={handleChange(e.id)}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls={`${e.id}-content`}
							id={`${e.id}-header`}
						>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<JobIcon height={40} width={40} style={{ marginRight: 20 }} />
								<Typography variant="h6" color="GrayText">
									{e.title}
								</Typography>
							</div>
						</AccordionSummary>
						<AccordionDetails>
							<ExperienceItem withActions experienceItem={e} />
						</AccordionDetails>
					</Accordion>
				);
			})}
		</div>
	);
};

export default ExperienceItemsAccordion;
