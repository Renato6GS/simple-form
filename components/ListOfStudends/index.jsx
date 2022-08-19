import styles from './styles.module.css';

export default function ListOfStudents({ students, deleteStudent }) {
  return (
    <>
      {students.map(({ id, name, lastName, email, gender, grade, date_birth }) => {
        if (!email) return null; // Esto lo hacemos porque a veces el navegador mete basura
        return (
          <tr className='table--row' id={id} key={id}>
            <td className='table--data'>{id}</td>
            <td className='table--data'>{name}</td>
            <td className='table--data'>{lastName}</td>
            <td className='table--data'>{email}</td>
            <td className='table--data'>{gender}</td>
            <td className='table--data'>{grade}</td>
            <td className='table--data'>{date_birth}</td>
            <td className='table--data'>
              <button className={styles.btnDelete} onClick={() => deleteStudent({ id })}>
                Eliminar
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
}
