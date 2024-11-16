class AnimeRepository {
    constructor() {
      this.animes = []; 
    }
  
    findAll() {
      return this.animes;
    }
  
    findById(id) {
      return this.animes.find((anime) => anime.id === id);
    }
  
    save(anime) {
      this.animes.push(anime);
      return anime;
    }
  
    update(id, updatedAnime) {
      const index = this.animes.findIndex((anime) => anime.id === id);
      if (index === -1) return null;
      this.animes[index] = { id, ...updatedAnime };
      return this.animes[index];
    }
  
    delete(id) {
      const index = this.animes.findIndex((anime) => anime.id === id);
      if (index === -1) return null;
      return this.animes.splice(index, 1)[0];
    }
  }
  
  module.exports = AnimeRepository;