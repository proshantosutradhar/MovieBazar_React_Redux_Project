import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2NhNTIyMDk5MGQxYjAwYjI3YjE2MmVlOWNiOWJjMSIsIm5iZiI6MTczNzEyNjUzMi4zMTEsInN1YiI6IjY3OGE3Mjg0M2E0MzA3NWY0MzFkNmRkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4GYmm5cTNRT6mP5QTWnHOqO1yVKrpTY9adrgksqpgTA'
      }
})

export default instance;