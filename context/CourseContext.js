import { createContext, useState } from 'react';
import courseData from '../courseData';
import { tagsList } from '../courseData';

const CourseContext = createContext();

const CourseContextProvider = ({ children }) => {
    const [allCourses, setAllCourses] = useState(courseData);
    const [tags, setTags] = useState(tagsList);

    const partDone = (courseId, partId) => {
        setAllCourses((prev) => {
            const updatedCourses = prev.map((course) => {
                if (course.key === courseId) {
                    const updatedParts = course.parts.map((part) => {
                        if (part.id === partId) {
                            return { ...part, done: true };
                        }
                        return part;
                    });
                    return { ...course, parts: updatedParts };
                }
                return course;
            });
            return updatedCourses;
        });
    };

    const value = {
        allCourses,
        tags,
        partDone,
    };

    return (
        <CourseContext.Provider value={value}>
            {children}
        </CourseContext.Provider>
    );
};

export { CourseContext, CourseContextProvider };
