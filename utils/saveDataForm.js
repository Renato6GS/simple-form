export const saveDataForm = ({ form }) => {
  const formData = new FormData(form);

  const data = [];
  for (const [, value] of formData) {
    data.push(value);
  }

  const [name, lastName, email, gender, date_birth, grade] = data;
  const id = Math.floor(Math.random() * 10000);
  const userObj = {
    id,
    name,
    lastName,
    email,
    gender,
    date_birth,
    grade,
  };

  localStorage.setItem(`user${id}`, JSON.stringify(userObj));

  return { userObj };
};
