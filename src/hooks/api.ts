import { ref } from 'vue';
import axios from 'axios';

const getBeautyImg = (url: string) => {
  const result = ref(null)
  const loading = ref(true)
  const error = ref(null)

  axios.get(url).then((response) => {
    loading.value = false;
    result.value = response.data;
  }).catch(error => {
    error.value = error;
    loading.value = false;
  })

  return { result, loading, error }
}

export { getBeautyImg }