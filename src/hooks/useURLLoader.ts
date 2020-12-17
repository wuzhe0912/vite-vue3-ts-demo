import { reactive, toRefs, onMounted } from 'vue';
import axios from 'axios';

const useURLLoader = <T>(url: string) => {
  const state = reactive({
    formData: <T | null>null,
    loading: true,
    loaded: false,
    error: null,
  })

  onMounted(() => {
    axios.get(url).then((response) => {
      state.formData = response.data;
      state.loading = false;
      state.loaded = true;
    }).catch((e) => {
      console.log(e);
      state.error = e;
      state.loading = false;
    })
  })

  return { ...toRefs(state) }
}

export { useURLLoader }