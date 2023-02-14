import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ThqX9KQSc6qtwsCBa7Jk6VHUvq3Pr4XlB9qX-N3cWDRwP8wupDQh1wCy_U16t4QMsgzlUyHE8GWTEBcxq6g0rTzDPGmm27QgfcVfWTyxrLXSOLPxF43DbCgtP1zrY3Yx'
    }
});

