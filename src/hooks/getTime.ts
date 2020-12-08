import { ref } from 'vue';

const currentTime = ref('00:00:00');
const getCurrentTime = () => {
  const now = new Date();
  const hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
  const min = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
  const sec = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
  currentTime.value = `${hour}:${min}:${sec}`;
  setTimeout(getCurrentTime, 500);
};

export { currentTime, getCurrentTime }