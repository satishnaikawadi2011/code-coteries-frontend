import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EducationItem from './EducationItem';
import { Education } from 'src/generated/graphql';
import EducationIcon from 'src/icons/EducationIcon';

interface Props {
	educationItems?: Education[];
}

const EducationItemsAccordion: React.FC<Props> = ({ educationItems = [] }) => {
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
			{educationItems.map((e) => {
				return (
					<Accordion key={e.id} expanded={expanded === e.id} onChange={handleChange(e.id)}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls={`${e.id}-content`}
							id={`${e.id}-header`}
						>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<EducationIcon height={40} width={40} style={{ marginRight: 20 }} />
								<Typography variant="h6" color="GrayText">
									{e.school}
								</Typography>
							</div>
						</AccordionSummary>
						<AccordionDetails>
							<EducationItem withActions educationItem={e} />
						</AccordionDetails>
					</Accordion>
				);
			})}
		</div>
	);
};

export default EducationItemsAccordion;
