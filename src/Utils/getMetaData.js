import axios from 'axios';

export const getMetaData = async() =>{

const options = {
  method: 'GET',
  url: 'https://spotify-web2.p.rapidapi.com/album_metadata/',
  params: {
    id: '3IBcauSj5M2A6lTeffJzdv'
  },
  headers: {
    'X-RapidAPI-Key': 'ab068aa3e5msh136b8c92674a555p19b1d9jsnc415c24e8404',
    'X-RapidAPI-Host': 'spotify-web2.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}