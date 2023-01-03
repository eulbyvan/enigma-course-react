import api from "../config/api"
import store from "../store";

export const getCourseById = (id) => {
    const courseList = store.getState().courses?.courseList;

    return courseList.filter((course) => {
        return course.courseId === id;
    })?.[0];
}

export const getCourses = (page) => api.get("courses", {
    params: {
        page
    }
});