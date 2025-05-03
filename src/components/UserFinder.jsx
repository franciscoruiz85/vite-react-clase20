import { Paper, Typography, TextField, Button, Avatar } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";

const UserFinder = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  })

  const fetchUsers = async () => {
    const userName = inputRef.current.value;
    try {
      const response = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}${userName}`);
      if (!response.ok) {
        throw new Error("Usuario no encontrado");
      }
      const data = await response.json();
      setUser(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setUser(null);
    }
  }

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 400,
        margin: 'auto',
        padding: 2,
        textAlign: 'center',
        marginTop: 2
      }}
    >
      <Typography>Buscar usuario de Github</Typography>
      <TextField
        inputRef={inputRef}
        fullWidth
        variant="outlined"
        label="Ingregse el nombre del usuario"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={fetchUsers}
        sx={{ marginTop: 2 }}
      >
        Buscar
      </Button>
      { error && <Typography variant="body1" color="error">{ error }</Typography> }
      { user && (
        <div style={{ marginTop: 20 }}>
          <Avatar
            src={user.avatar_url} alt={user.login} 
            style={{ 
              width: 50 * 2,
              height: 50 * 2,
              margin: '0 auto', 
            }}
          />
          <Typography variant="h6">Nombre: {user.name}</Typography>
          <Typography variant="body1">Seguidores: {user.followers}</Typography>
          <Typography variant="body1">Repositorios: {user.public_repos}</Typography>
        </div>
      )}
    </Paper>
  );
};

export default UserFinder;
