import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com', 
  headers: { 
    Authorization: 'Client-ID quj-volBDIxtkJe3NLmh8jei4bpuagX3Tno1bNiktQ8'  
} 
});
