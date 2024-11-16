const express = require("express");
const app = express();


app.use(express.json());


let animes = [];



module.exports = app;

const { v4: uuidv4 } = require("uuid");

app.post("/animes", (req, res) => {
  const { name, genre, studio } = req.body;

  if (!name || !genre || !studio) {
    return res.status(400).json({ error: "Os campos sao obrigatorios" });
  }

  const newAnime = {
    id: uuidv4(), 
    name,
    genre,
    studio,
  };

  animes.push(newAnime);
  res.status(201).json(newAnime);
});

  app.get("/animes", (req, res) => {
    res.json(animes);
  });

  app.get("/animes/:id", (req, res) => {
    const { id } = req.params; 
    const anime = animes.find((a) => a.id === id); 
  
    if (!anime) {
      return res.status(404).json({ error: "anime nao encontrado" });
    }
  
    res.json(anime);
  });

  app.put("/animes/:id", (req, res) => {
    const { id } = req.params;
    const { name, genre, studio } = req.body;
  
    const anime = animes.find((a) => a.id === id); 
  
    if (!anime) {
      return res.status(404).json({ error: "anime nao encontrado" });
    }
  

    if (!name || !genre || !studio) {
      return res.status(400).json({ error: "Os campos são obrigatorios" });
    }
  

    anime.name = name;
    anime.genre = genre;
    anime.studio = studio;
  
    res.json(anime);
  });

  app.delete("/animes/:id", (req, res) => {
    const { id } = req.params;
    const index = animes.find((a) => a.id === id); 
  
    if (index === -1) {
      return res.status(404).json({ error: "anime nao encontrado" });
    }
  
    animes.splice(index, 1);
    res.status(200).send(); 
  });