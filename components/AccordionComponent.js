import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@material-ui/core'

const AccourdionComponent = ({
  summary,
  list,
  expanded,
  onChange,
  ariaControls,
  id
}) => {
  return (
    <Accordion square expanded={expanded} onChange={() => onChange()}>
      <AccordionSummary aria-controls={ariaControls} id={id}>
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
