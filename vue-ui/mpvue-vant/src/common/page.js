export default function(options = {}) {
  return Page({
    onShareAppMessage() {
      return {
        title: 'Van hh'
      };
    },
    ...options
  });
}
