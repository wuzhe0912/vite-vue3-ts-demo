import axios from 'axios';

let result = ''
let loading = true
let error = ''

const getBeautyImg = async (url: string) => {
  await axios.get(url).then((response) => {
    loading = false;
    result = response.data;
  }).catch(err => {
    error = err;
    loading = false;
  })

  return { result, loading, error }
}

const getYouTubeVideo = async (url: string) => {
  await axios.get(url).then((response) => {
    loading = false;
    result = response.data.items;
    console.log('api', result);
  }).catch(err => {
    console.log(err);
  })

  return { result, loading }
}

export { getBeautyImg, getYouTubeVideo }