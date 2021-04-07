import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

const AccourdionComponent = ({
  summary,
  list,
  expanded,
  onChange,
  ariaControls,
  id
}) => {
  return (
    <Accordion
      square
      expanded={expanded}
      onChange={() => onChange()}
      // style={{ width: '100%' }}
    >
      <AccordionSummary
        aria-controls={ariaControls}
        id={id}
        expandIcon={<ExpandMore />}
      >
        <Typography>{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <ul>
            {list.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
          </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default AccourdionComponent
