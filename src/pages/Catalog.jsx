import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import useFetch from '../hooks/useFetch';

//const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const Catalog = () => {
  // const [recipes, setRecipes] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(true);
  //   fetch(import.meta.env.VITE_RECIPES_API_URL)
  //     .then(response => response.json())
  //     .then(data => setRecipes(data.meals))
  //     .catch(error => console.error('Error fetching data:', error))
  //     .finally(() => setLoading(false));
  // }, []);

  const { data, loading } = useFetch(import.meta.env.VITE_RECIPES_API_URL);

  if (loading) {
    return (
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: '100vh' }}
      >
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <>
      <Container>
        <Typography
          variant='h3'
          gutterBottom
          sx={{ marginTop: 2 }}
        >
          Recetas
        </Typography>
        {
          <Grid
            container
            spacing={2}
          >
            {
              data?.meals.map(item => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={item.idMeal}
                >
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea
                      component={Link}
                      to={`/catalogo/${item.idMeal}`}
                      state={{ recipe: item }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.strMealThumb}
                        alt={item.strMeal}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5">
                          {item.strMeal}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {item.strCategory}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        }
      </Container>
    </>
  )
}

export default Catalog