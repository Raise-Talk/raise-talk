// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

import Typography from '@mui/material/Typography'

const FooterContent = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, Feito com `}
        <Box component='span' sx={{ color: 'error.main' }}>
          ❤️
        </Box>
        {` por `}
        <Link target='_blank' href='https://pixinvent.com/'>
          Raise Talk
        </Link>
      </Typography>
      {/* {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          <Link target='_blank' href='https://themeforest.net/licenses/standard'>
            License
          </Link>
          <Link target='_blank' href='https://1.envato.market/pixinvent_portfolio'>
            More Themes
          </Link>
          <Link
            target='_blank'
            href='https://pixinvent.com/demo/materialize-mui-react-nextjs-admin-template/documentation'
          >
            Documentation
          </Link>
          <Link target='_blank' href='https://pixinvent.ticksy.com/'>
            Support
          </Link>
        </Box>
      )} */}
    </Box>
  )
}

export default FooterContent
