import { useState, useEffect } from 'react';

export const useStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    refreshStudents();
  }, []);

  const refreshStudents = () => {
    const archive = [],
      keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      archive.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    setStudents(archive);
  };

  const newStudent = (newStudent) => {
    setStudents([...students, { ...newStudent }]);
  };

  const deleteStudent = ({ id }) => {
    localStorage.removeItem(`user${id}`);
    refreshStudents();
  };

  return { students, newStudent, deleteStudent };
};

export const deleteComment = ({ id }) => localStorage.removeItem(`user${id}`);
