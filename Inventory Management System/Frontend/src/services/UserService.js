import { myAxios } from "./helper";

export const signUp = (user) => {
    return myAxios.post('/api/users/Register', user).then((response) => response.data)
}

export const contact = (data) => {
    return myAxios.post('/api/contact/saveContact', data).then((response) => response.data)
}

// export const logIn = (email, password, accountType) => {

//    return myAxios.post('/api/users/login', email, password, accountType)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// };


