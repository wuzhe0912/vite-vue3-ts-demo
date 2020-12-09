import axios from 'axios';

const getBeautyImg = async(url: string) => {
  let result = ''
  let loading = true
  let error = ''

  await axios.get(url).then((response) => {
    loading = false;
    result = response.data;
  }).catch(error => {
    error = error;
    loading = false;
  })

  return { result, loading, error }
}

export { getBeautyImg }