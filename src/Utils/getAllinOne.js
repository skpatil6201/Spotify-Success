import axios from 'axios';


export const getAllInOne = async (query) => {

    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/browse_all/',
      params: {
        q: query,
        type: 'multi',
        offset: '0',
        limit: '10',
        numberOfTopResults: '5'
      },
      headers: {
        'X-RapidAPI-Key': 'ab068aa3e5msh136b8c92674a555p19b1d9jsnc415c24e8404',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};
