import { ref, onMounted, onUnmounted } from 'vue';

const useMousePosition = () => {
  // 頁面座標追蹤
  const x = ref(0);
  const y = ref(0);
  const trackingMouse = (node: MouseEvent) => {
    x.value = node.pageX
    y.value = node.pageY
  }
  onMounted(() => {
    document.addEventListener('click', trackingMouse);
  })
  onUnmounted(() => {
    document.removeEventListener('click', trackingMouse);
  })
  return { x, y }
}

export { useMousePosition }