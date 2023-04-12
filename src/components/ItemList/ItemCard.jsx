import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material"

const ItemCard = ({item}) => {
  return (
    <Card sx={{ width: 345, height: 550 }} >
    <CardMedia
      sx={{ height: 140 }}
      image={item.img}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.description}
      </Typography>
      <Typography variant="body2" color="primary">
        {tem.price}
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" size="small">view details</Button>
    </CardActions>
  </Card>
  )
}

export default ItemCard
