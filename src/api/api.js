import axios from 'axios'

const instance = axios.create({
  // withCredentials: true,
  baseURL: 'https://6458f8e24eb3f674df82db75.mockapi.io/',
  header: {
    // "API-KEY": process.env.REACT_APP_API_KEY,
    // "API-KEY": process.env.REACT_APP_API_KEY + '123',
  },
})

export const itemsAPI = {
  async getItems() {
    try {
      const response = await instance.get(`items`)
      // console.log(response.data)
      return response.data
    } catch (error) {
      if (axios.isCancel(error)) return
    }
  },

  async filter(platform, sort, order) {
    const sortBy = sort ? `sortBy=${sort}` : ''
    const orderBy = order ? `order=${order}` : ''
    try {
      const response = await instance.get(`items?${sortBy}${orderBy}`)
      // console.log(response.data)
      return response.data
    } catch (error) {
      if (axios.isCancel(error)) return
    }
  },
}

// export const settingsAPI = {
//   getUserInfo(userId = 2) {
//     return instance.get(`profile/${userId}`);
//   },
//   getUserStatus(userId = 2) {
//     return instance.get(`profile/status/${userId}`);
//   },
//   updateUserStatus(status) {
//     console.log("put", status);
//     return instance.put(`profile/status`, { status });
//   },
//   savePhoto(file) {
//     console.log("put", file);
//     const formData = new FormData();
//     formData.append("image", file);
//     return instance.put(`profile/photo`, formData, {
//       "Content-Type": "multipart/form-data",
//     });
//   },
//   saveProfile(profile) {
//     console.log("put", profile);
//     return instance.put(`profile`, profile);
//   },
// };

// export const authAPI = {
//   me() {
//     return instance.get("auth/me");
//   },
//   login(email, password, rememberMe, captcha) {
//     return instance.post("auth/login", {
//       email,
//       password,
//       rememberMe,
//       captcha,
//     });
//   },
//   logout() {
//     return instance.delete("auth/login");
//   },
// };

// export const securityAPI = {
//   getCaptcha() {
//     return instance.get("security/get-captcha-url");
//   },
// }
