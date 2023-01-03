import api from "../config/api"

export const getCourses = (page) => api.get("courses", {
    params: {
        page
    }
});