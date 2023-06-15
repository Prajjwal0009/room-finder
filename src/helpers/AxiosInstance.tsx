//@ts-ignore
import Axios from "axios";
import { accessToken } from "./sessionKey";

const API_ROOT: string = "http://localhost:8000/api/v1/room/";

export default API_ROOT;
//create axios instance
export const instance = Axios.create({
  baseURL: `${API_ROOT}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `JWT ${accessToken()}`,
  },
});

const USER_MANAGEMENT_API_ROOT: string = "https://usermanagement.dibsolutions.com.au/api";
//create axios instance
export const userManangementInstance = Axios.create({
  baseURL: `${USER_MANAGEMENT_API_ROOT}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `JWT ${accessToken()}`,
  },
});

// create axios instance for form data to upload file
export const formDataInstance = Axios.create({
  baseURL: `${API_ROOT}`,
  headers: {
    "Content-Type": `multipart/form-data`,
  },
});

// create form data to upload files
export const postApiFormData = async (fileData: any) => {
  const { url, formData } = fileData;
  let response;
  try {
    response = await formDataInstance({
      method: "POST",
      url: `${url}`,
      headers: {
        Authorization: `JWT ${accessToken()}`,
      },
      data: formData,
      transformResponse: [
        function (responseData) {
          //Do what ever you want transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.log(e.response);
    return e.response;
  }
  return response;
};

// update form data to upload files
export const patchApiFormData = async (fileData: any) => {
  const { url, formData } = fileData;
  let response;
  try {
    response = await formDataInstance({
      method: "PATCH",
      url: `${url}`,
      headers: {
        Authorization: `JWT ${accessToken()}`,
      },
      data: formData,
      transformResponse: [
        function (responseData) {
          //Do what ever you want transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.log(e.response);
    return e.response;
  }
  return response;
};

//get data from api
export const getApiData = async (url: any, param = null) => {
  let response;
  try {
    response = await instance({
      method: "GET",
      url: `${url}`,
      params: param,
      // headers: {
      //   Authorization: `JWT ${accessToken()}`,
      // },
      transformResponse: [
        function (responseData) {
          // Do whatever you want to transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e: any) {
    return e.response;
  }
  return response;
};

export const userManagementGetApiData = async (url: any, param = null) => {
  let response;
  try {
    response = await userManangementInstance({
      method: "GET",
      url: `${url}`,
      params: param,
      // headers: {
      //   Authorization: `JWT ${accessToken()}`,
      // },
      transformResponse: [
        function (responseData) {
          // Do whatever you want to transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e: any) {
    return e.response;
  }
  return response;
};
//post data to api
export const postApiData = async (data: any) => {
  const { url, formData, setError } = data;
  console.log(setError)
  let response;
  try {
    response = await instance({
      method: "POST",
      url: `${url}`,
      data: formData,
      headers: {
        Authorization: `JWT ${accessToken()}`,
      },
      transformResponse: [
        function (responseData) {
          //Do whatever you want to transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e: any) {
    for (const key in e.response?.data) {
      if (e.response?.data.hasOwnProperty(key)) {
        setError(key, { type: 'custom', message: e.response?.data[key] });
      }
    }
    return e.response;
  }
  return response;
};

//post data to api
export const postApiDataNoAuth = async (data: any) => {
  const { url, formData } = data;
  let response;
  try {
    response = await instance({
      method: "POST",
      url: `${url}`,
      data: formData,
      headers: {
        // Authorization: `JWT ${accessToken()}`,
      },
      transformResponse: [
        function (responseData) {
          //Do whatever you want to transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e: any) {
    return e.response;
  }
  return response;
};

//update data
export const putApiData = async (data: any) => {
  const { url, formData, formikProps } = data;

  // eslint-disable-next-line no-console
  let response;
  try {
    response = await instance({
      method: "PUT",
      url: `${url}`,
      data: formData,
      headers: {
        Authorization: `JWT ${accessToken()}`,
      },
      transformResponse: [
        function (responseData) {
          //Do whatever you want to transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e: any) {
    formikProps.setErrors(e.response.data);
    return e.response;
  }
  return response;
};

//delete data
export const deleteApiData = async (url: any) => {
  let response;
  response = await instance({
    method: "DELETE",
    url: url,
    // params: param,
    headers: {
      Authorization: `JWT ${accessToken()}`,
    },
  });
  return response;
};

//delete bulk data
export const bulkDeleteApiData = async (data: any) => {
  const { url, formData } = data;
  let response;
  response = await instance({
    method: "DELETE",
    url: `${url}`,
    data: formData,
    // params: param,
    headers: {
      Authorization: `JWT ${accessToken()}`,
    },
  });
  return response;
};

//update data
export const patchApiData = async (data: any) => {
  const { url, formData } = data;
  let response;
  try {
    response = await instance({
      method: "PATCH",
      url: `${url}`,
      data: formData,
      headers: {
        Authorization: `JWT ${accessToken()}`,
      },
      transformResponse: [
        function (responseData) {
          //Do whatever you want to transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e: any) {
    // formikProps.setErrors(e.response.data);
    return e.response;
  }
  return response;
};

export const downloadApiDataGET = async (data: any) => {
  const { url, fileName, formData } = data
  let response: any;
  try {
    response = await instance({
      method: "POST",
      url: url,
      data: formData,
      responseType: "blob",
      headers: {
        Authorization: `JWT ${accessToken()}`,
      },
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      link.click();
    });
  } catch (error: any) {
    // eslint-disable-next-line no-console
    return error.response;
  }
  return response;
};
export const useFileDownloadApiData = async (data: any) => {
  const { url, formData, formikProps } = data;
  let response;
  try {
    response = await Axios.create({
      method: "POST",
      url: `${url}`,
      data: formData,
      headers: {
        Authorization: `JWT ${accessToken()}`,
        // "Content-Type": "application/x-zip-compressed",
        "Content-Type": `multipart/form-data`,
      },
      transformResponse: [
        function (responseData) {
          //Do whatever you want to transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e: any) {
    formikProps.setErrors(e.response.data);
    return e.response;
  }
  return response;
};


export { API_ROOT };
