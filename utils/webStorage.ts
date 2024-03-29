export default {
  set(key: string, value: string) {
    const data = typeof value === 'string' ? value : JSON.stringify(value);
    const base64 = btoa(encodeURIComponent(data));

    localStorage.setItem(key, base64);
  },

  get(key: string) {
    const base64 = localStorage.getItem(key);
    // debugger;
    if (base64 === null) return null;

    let data;

    try {
      // decode Base64 to string
      data = decodeURIComponent(atob(base64));
    } catch {
      return null;
    }

    try {
      return JSON.parse(data);
    } catch {
      return data;
    }
  },

  remove(key: string) {
    localStorage.removeItem(key);
  },

  removeAll() {
    localStorage.clear();
  },
};
