import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import ThanksImg from '../../assets/branding/smokey 1 bg.png'

type Props = {}

const ThanksDialog = (_props: Props) => {
  return (
    <Card>
        <CardMedia component="img"
        height="300" image={ThanksImg}/>
        <CardContent>
            <Typography>Thank you for helping Smokey save the forest! </Typography>
        </CardContent>
    </Card>
  )
}

export default ThanksDialog