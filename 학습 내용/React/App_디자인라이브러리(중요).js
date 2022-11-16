// https://react-bootstrap.github.io/ 개인적인 경험으로는 https://ant.design/ 괜찮았어요.
// React + Tailwind도 좋았습니다.
// https://react-bootstrap.github.io/ 을 추천받았습니다.

// https://mui.com/material-ui/react-card/
// npm install @mui/material @emotion/react @emotion/styled
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <>
      <Button variant="contained">Hello World</Button>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="http://test.api.weniv.co.kr/asset/img/1/thumbnailImg.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>
  );
}

export default App;