const storageType = sessionStorage;

export const storage = {
  setItem: function(k, v) {
    storageType.setItem(k, v);
  },
  getItem: function(k) {
    return storageType.getItem(k);
  },
  removeItem: function(k) {
    storageType.removeItem(k);
  },
  clear: function() {
    storageType.clear();
  }
};
