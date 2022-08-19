import { useState } from 'react';

import { saveDataForm } from 'utils/saveDataForm';
import styles from './styles.module.css';

export default function Form({ newStudent }) {
  const [nameStudent, setNameStudent] = useState('');
  const [lastNameStudent, setLastNameStudent] = useState('');
  const [emailStudent, setEmailStudent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userObj } = saveDataForm({ form: e.target });
    newStudent(userObj);
  };

  const handleName = (e) => {
    const value = e.target.value;
    setNameStudent(value);

    const firstValue = value.split(' ', 1).join(' ');
    const email = `${firstValue}${lastNameStudent.split(' ', 1).join(' ')}@school.edu.gt`;
    setEmailStudent(email);
  };

  const handleLastName = (e) => {
    const value = e.target.value;
    setLastNameStudent(value);

    const firstValue = value.split(' ', 1).join(' ');
    const email = `${nameStudent.split(' ', 1).join(' ')}${firstValue}@school.edu.gt`;
    setEmailStudent(email);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Formulario de registro de Alumnos</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor='name'>
            Nombre
          </label>
          <input
            className={styles.inputText}
            type='text'
            id='name'
            name='user[name]'
            placeholder='Ej: Luis Fernando'
            onChange={handleName}
            value={nameStudent}
            autoComplete='off'
            required
          />
        </div>
        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor='lastname'>
            Apellidos
          </label>
          <input
            className={styles.inputText}
            type='text'
            id='lastname'
            name='user[lastname]'
            placeholder='Ej: Gonzáles Álvarez'
            onChange={handleLastName}
            value={lastNameStudent}
            autoComplete='off'
            required
          />
        </div>
        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor='email'>
            Correo institucional
          </label>
          <input className={styles.inputText} type='text' id='email' name='user[email]' value={emailStudent} readOnly />
        </div>
        <div className={styles.containerInput}>
          <label className={styles.label}>Género</label>
          <div className={styles.radioContainer}>
            <input type='radio' name='user[Gender]' id='Male' value='Hombre' required />
            <label htmlFor='Male'>Hombre</label>
          </div>
          <div className={styles.radioContainer}>
            <input type='radio' name='user[Gender]' id='Female' value='Mujer' required />
            <label htmlFor='Female'>Mujer</label>
          </div>
        </div>
        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor='date_birth'>
            Fecha de nacimiento
          </label>
          <input className={styles.inputText} type='date' id='date_birth' name='user[date_birth]' required />
        </div>
        <div className={styles.containerInput}>
          <label className={styles.label}>Grado</label>
          <div className={styles.radioContainer}>
            <input type='radio' name='Grade' id='firstGrade' value='Primero' required />
            <label htmlFor='firstGrade'>Primero</label>
          </div>
          <div className={styles.radioContainer}>
            <input type='radio' name='Grade' id='secondGrade' value='Segundo' required />
            <label htmlFor='secondGrade'>Segundo</label>
          </div>
          <div className={styles.radioContainer}>
            <input type='radio' name='Grade' id='thirdGrade' value='Tercero' required />
            <label htmlFor='thirdGrade'>Tercero</label>
          </div>
          <div className={styles.radioContainer}>
            <input type='radio' name='Grade' id='fourthGrade' value='Cuarto' required />
            <label htmlFor='fourthGrade'>Cuarto</label>
          </div>
          <div className={styles.radioContainer}>
            <input type='radio' name='Grade' id='fifthGrade' value='Quinto' required />
            <label htmlFor='fifthGrade'>Quinto</label>
          </div>
          <div className={styles.radioContainer}>
            <input type='radio' name='Grade' id='sixthGrade' value='Sexto' required />
            <label htmlFor='sixthGrade'>Sexto</label>
          </div>
        </div>
        <button className={styles.btnSubmit} type='submit'>
          Guardar
        </button>
      </form>
    </div>
  );
}
