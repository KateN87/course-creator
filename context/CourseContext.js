import { createContext, useReducer, useState } from 'react';
import courseData from '../courseData';

const CourseContext = createContext();

export const courseReducer = (state = courseData, action) => {
    switch (action.type) {
        /*         case 'SET_COURSES':
            return {
                courses: action.payload,
            }; */
        case 'EDIT_DONE':
            return state.map((c) => {
                console.log(action.payload);
                /*                 if (c.key === action.payload.id) {
                    if (c.parts.title === action.payload.title)
                        return { ...c, ...parts, done: true };
                    else {
                        return c;
                    }
                } else {
                    return c;
                } */
            });
        default:
            return state;
    }
};

const CourseContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(courseReducer, {
        courseData: courseData,
    });

    return (
        <CourseContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CourseContext.Provider>
    );
};

export { CourseContextProvider, CourseContext };
