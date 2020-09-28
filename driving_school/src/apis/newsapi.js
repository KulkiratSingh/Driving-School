import axios from 'axios';

export default axios.create({
  baseURL: 'https://gnews.io/api', 
  headers: { 
    token: '56c165908a5d272d33c95d6c1293b1d8'  
} 
});
