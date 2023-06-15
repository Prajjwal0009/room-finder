//  set session key
export function setKey(key:any, value:any) {
  window.sessionStorage.setItem(key, value);
}

//  get value from session storage
export const getKey = (key:any) => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key);
  } else {
    return false;
  }
};

//  remove key from session storage
export const removeKey = (key: any) => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(key);
  }
};

export const accessToken = () => {
  return getKey("token");
};

// export const permissions = () => {
//   const authToken = JSON.parse(getKey('userAuth'));
//   const {accessToken, refreshToken, permissions, user} = authToken;
//   return permissions
// }
