import React, {
  Fragment,
  useContext,
  useState,
  useCallback
} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import CssBaseline from '@material-ui/core/CssBaseline'
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Chip,
  Icon,
  Typography
} from '@material-ui/core'
import { NearMe } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { GlobalContext } from '../../utils/Context'
// import useScript from '../../utils/useScript';

// const Demo = props => {
//   importScript("/path/to/resource.js");
// }

// import "../../components/platinaGameOneComponents/js"
// import "../../components/platinaGameOneComponents/js/libs/pixi.js"
// import "../../components/platinaGameOneComponents/js/libs/pixi-tilemap.js" 
// import "../../components/platinaGameOneComponents/js/libs/pixi-picture.js"
// import "../../components/platinaGameOneComponents/js/libs/fpsmeter.js"

import {
  StyledSpacing,
  StyledScroll,
  StyledMain,
  StyledPaperText,
  StyledIframe
} from '../../utils/styles'
import AccourdionComponent from '../../components/AccordionComponent'

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

const Games = () => {
  const context = useContext(GlobalContext)
  const classes = useStyles()
  const [expanded, setExpanded] = useState('panel1')

  const handleChange = useCallback((panel) => {
    setExpanded(panel)
  }, [])

  return (
    <Fragment>
      <Head>
        <title>Platina the Wolf</title>

      </Head>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Sidebar />
        <Topbar />
        <StyledScroll>
          <div className={classes.toolbar} />
          <StyledMain>
            <StyledPaperText>
              <h2>Platina the Wolf - The Heir of the Light</h2>
              <Typography paragraph>
                Aliada à dois humanos, Platina parte para uma jornada em busca de poder para retomar o trono que é seu por direito.<br />
                Guie sua aventura pelos quatro cantos de Gaia e vivencie grandes batalhas, aventuras e emoções.
                
              </Typography>
              <Chip
                icon={<NearMe />}
                label="Versão: 0.11.0"
                color="secondary"
              />
              <StyledSpacing />
              <div>
                <h3>Changelog</h3>
                <AccourdionComponent
                  summary='0.10.0'
                  list={[
                    'Continuação da história',
                    'Nova transformação combinada: Fallen Angel',
                  ]}
                  expanded={expanded === 'panel1'}
                  onChange={() => handleChange('panel1')}
                  ariaControls='panel1d-content'
                  id='panel1d-header'
                />
                <AccourdionComponent
                  summary='0.10.0'
                  list={[
                    'Novo boss e máscara opcionais: Death',
                    'Ajustes em sprites shadow e rage',
                    'Ajustes nas categorias e elementos das habilidades',
                    'Ajustes nas fraquezas de classes e fraquezas individuais',
                    'Ajustes das habilidades das máscaras na forma rage e shadow',
                    'Agora é possível alcançar alguns locais através da natação'
                  ]}
                  expanded={expanded === 'panel2'}
                  onChange={() => handleChange('panel2')}
                  ariaControls='panel2d-content'
                  id='panel2d-header'
                />
                <AccourdionComponent
                  summary='0.9.0'
                  list={[
                    'Novo boss e máscara opcionais: Pyromancer',
                    'Missão paralela 1: Orochi'
                  ]}
                  expanded={expanded === 'panel3'}
                  onChange={() => handleChange('panel3')}
                  ariaControls='panel3d-content'
                  id='panel3d-header'
                />
                <AccourdionComponent
                  summary='0.8.0'
                  list={['Mudança de equipamento ao utilizar uma máscara']}
                  expanded={expanded === 'panel4'}
                  onChange={() => handleChange('panel4')}
                  ariaControls='panel4d-content'
                  id='panel4d-header'
                />
                <AccourdionComponent
                  summary='0.7.0'
                  list={['Remoção de alguns diálogos']}
                  expanded={expanded === 'panel5'}
                  onChange={() => handleChange('panel5')}
                  ariaControls='panel5d-content'
                  id='panel5d-header'
                />
              </div>
              
              <StyledSpacing />
              <h3>Download</h3>
              <div className='button-group'>
                <Button
                  variant="contained"
                  color="secondary"
                  href='https://mega.nz/file/WxUC3bqb#ROP1pO4eYzMc61ZilvalykxhbvFFQyss1joHoWIotso'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Windows
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  href='https://mega.nz/file/H9sxxYYL#_a0v03eMYmvexUo0O-lVfIy1MbVXUTLyXtk0ZFptM7I'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Linux
                </Button>
                <Link href='/games/platina-the-wolf-and-the-heir-of-the-light'>
                  <Button
                    variant="contained"
                    color="secondary"
                    component='a'
                  >
                    Web
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  color="secondary"
                  component='a'
                  disabled
                >
                  Android
                </Button>
              </div>
            </StyledPaperText>
          </StyledMain>
        </StyledScroll>
      </div>
    </Fragment>
  )
}

export default Games
