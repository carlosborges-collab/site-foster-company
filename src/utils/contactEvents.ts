export const openContactModal = () => {
  window.dispatchEvent(new CustomEvent('open-foster-contact'));
};