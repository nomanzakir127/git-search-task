"use client"
import { CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation'

const Home = () => {

  const router = useRouter()

  const handleClick = () =>{
    router.push('/search')
  }

  return (
    <div className="container">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <Typography variant="h5" className="container" color="text.primary"  gutterBottom>
          Search App
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" onClick={handleClick}>Go to search</Button>
        </CardActions>
      </Card>
  </div>
   )
}

export default Home;
