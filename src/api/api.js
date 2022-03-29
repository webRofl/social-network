import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'f8b897e5-590a-4b60-8009-3b2dd890f26e',
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unfollow(userId) {
    return instance
      .delete('follow/' + userId)
      .then((response) => response.data);
  },
  follow(userId) {
    return instance.post('follow/' + userId).then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get('profile/' + userId).then((response) => response.data);
  },
  getStatus(userId) {
    return instance
      .get('profile/status/' + userId)
      .then((response) => response.data);
  },
  setStatus(status) {
    return instance
      .put('profile/status', { status })
      .then((response) => response.data);
  },
  sendPhoto(photo) {
    const formData = new FormData();
    formData.append('image', photo);
    return instance
      .put('profile/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data);
  },
  updateProfile(profile, contacts) {
    return instance
      .put('profile', { ...profile, contacts })
      .then((response) => response.data);
  },
};

export const authAPI = {
  getMyProfile() {
    return instance.get('auth/me/').then((response) => response.data);
  },
  login(email, password, rememberMe, captcha) {
    return instance
      .post('auth/login', { email, password, rememberMe, captcha })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete('auth/login').then((response) => response.data);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get('security/get-captcha-url').then((data) => data.data);
  },
};
