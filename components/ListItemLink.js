import { useMemo, forwardRef } from 'react'
import Link from 'next/link'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

function ListItemLink(props) {
  const { icon, primary, href, rel = null, target = null } = props

  const CustomLink = useMemo(
    () =>
      forwardRef((linkProps, ref) => (
        <Link ref={ref} href={href} {...linkProps}>
          <a rel={rel} target={target}>
            <ListItem button>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={primary} />
            </ListItem>
          </a>
        </Link>
      )),
    [href]
  );

  return (
    <CustomLink />
  )
}

export default ListItemLink
