import axios from "axios";

/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Tue Jan 03 2023 14:05:34
 * Copyright (c) 2023
 */

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-type": "application/json"
    }
});

export default axiosInstance;