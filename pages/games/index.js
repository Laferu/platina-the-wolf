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
  const [expanded, setExpanded] = useState('panel1-0-2')

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
                label="Versão: 1.0.2"
                color="secondary"
              />
              <StyledSpacing />
              <div>
                <h3>Changelog</h3>
                <AccourdionComponent
                  summary='1.0.2'
                  list={[
                    'Versão para Android agora com os erros encontrados até o momento corrigidos',
                    'Agora é possível pular a introdução com o toque na tela do celular'
                  ]}
                  expanded={expanded === 'panel1-0-2'}
                  onChange={() => handleChange('panel1-0-2')}
                  ariaControls='panel1-0-2d-content'
                  id='panel1-0-2d-header'
                />
                <AccourdionComponent
                  summary='1.0.1'
                  list={[
                    'Correção de arquivos png que não estavam sendo carregados e impediam a progressão do game',
                    'Problemas no Android, esta versão será desativada até ter uma solução'
                  ]}
                  expanded={expanded === 'panel1-0-1'}
                  onChange={() => handleChange('panel1-0-1')}
                  ariaControls='panel1-0-1d-content'
                  id='panel1-0-1d-header'
                />
                <AccourdionComponent
                  summary='1.0.0'
                  list={[
                    'Final do game',
                    'Nova arma - Lâmina sagrada'
                  ]}
                  expanded={expanded === 'panel1-0-0'}
                  onChange={() => handleChange('panel1-0-0')}
                  ariaControls='panel1-0-0d-content'
                  id='panel1-0-0d-header'
                />
                <AccourdionComponent
                  summary='0.11.0'
                  list={[
                    'Continuação da história',
                    'Nova transformação combinada: Fallen Angel',
                  ]}
                  expanded={expanded === 'panel0-11-0'}
                  onChange={() => handleChange('panel0-11-0')}
                  ariaControls='panel0-11-0d-content'
                  id='panel0-11-0d-header'
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
                  expanded={expanded === 'pane0-10-0'}
                  onChange={() => handleChange('pane0-10-0')}
                  ariaControls='pane0-10-0d-content'
                  id='pane0-10-0d-header'
                />
                <AccourdionComponent
                  summary='0.9.0'
                  list={[
                    'Novo boss e máscara opcionais: Pyromancer',
                    'Missão paralela 1: Orochi'
                  ]}
                  expanded={expanded === 'panel0-9-0'}
                  onChange={() => handleChange('panel0-9-0')}
                  ariaControls='panel0-9-0d-content'
                  id='panel0-9-0d-header'
                />
                <AccourdionComponent
                  summary='0.8.0'
                  list={['Mudança de equipamento ao utilizar uma máscara']}
                  expanded={expanded === 'panel0-8-0'}
                  onChange={() => handleChange('panel0-8-0')}
                  ariaControls='panel0-8-0d-content'
                  id='panel0-8-0d-header'
                />
                <AccourdionComponent
                  summary='0.7.0'
                  list={['Remoção de alguns diálogos']}
                  expanded={expanded === 'panel0-7-0'}
                  onChange={() => handleChange('panel0-7-0')}
                  ariaControls='panel0-7-0d-content'
                  id='panel0-7-0d-header'
                />
              </div>
              
              <StyledSpacing />
              <h3>Download</h3>
              <div className='button-group'>
                <Button
                  variant="contained"
                  color="secondary"
                  href='https://mega.nz/file/y90SyATZ#i8zspngZvlAEG5jKouLCGUy5wabIn9xoi8xrTAhBTf8'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Windows
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  href='https://mega.nz/file/qoUXwCbb#JVOWw9JZqI2CC8G5x1suFMAwzbgXovGBL9qGYAfUyZU'
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
                  href='https://mega.nz/file/LpVEkZra#g3DiKX6mp2LCRBZ7cSFCssLSNfuNbdCWCiqlxynlkn0'
                  target='_blank'
                  rel='noopener noreferrer'
                  // disabled
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
