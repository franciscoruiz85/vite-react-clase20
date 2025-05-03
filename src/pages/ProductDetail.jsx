import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";

const ProductDetail = () => {
  const location = useLocation();
  const recipe = location.state?.recipe;

  return (
    <Container>
      <Typography
        variant='h4'
        gutterBottom
        sx={{ marginTop: 2, textAlign: 'center' }}
      >
        {recipe.strMeal} - {recipe.strCategory}
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
        Origen: {recipe.strArea}
      </Typography>
      <Typography
        variant="h6"
        gutterBottom 
        sx={{ marginTop: 2 }}
      >
        Ingredientes:
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{ marginBottom: '20px', gap: '50px' }}
      >
        <ul>
          {Object.keys(recipe).map((key) => {
            if (key.startsWith("strIngredient") && recipe[key]) {
              let measure = recipe[`strMeasure${key.slice(13)}`];
              return <li key={key}>{measure} {recipe[key]} </li>;
            }
            return null;
          })}
        </ul>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '100%', maxWidth: '200px', borderRadius: '8px' }} />
      </Grid>
      <Typography variant="h5" gutterBottom sx={{ marginTop: 2 }}>
        Instrucciones:
      </Typography>
      <p>{recipe.strInstructions}</p>
    </Container>
  );
};

export default ProductDetail;
