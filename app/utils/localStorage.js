export const localStorageUtil = {
  saveLoginInfo: data => {
    localStorage.setItem('VNH-Login', JSON.stringify(data));
  },
  removeLoginInfo: () => {
    localStorage.removeItem('VNH-Login');
  },
  getAuthInfo: () => JSON.parse(localStorage.getItem('VNH-Login')),
};
