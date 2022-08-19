import ListOfStudents from 'components/ListOfStudends';

export default function TableOfStudents({ students, deleteStudent }) {
  return (
    <section className='table-container'>
      <table className='table'>
        <thead className='table--head'>
          <tr className='table--row'>
            <th className='table--header'>Id</th>
            <th className='table--header'>Nombre</th>
            <th className='table--header'>Apellidos</th>
            <th className='table--header'>Email</th>
            <th className='table--header'>Género</th>
            <th className='table--header'>Fech. de nacimiento</th>
            <th className='table--header'>Grado</th>
            <th className='table--header'>Action</th>
          </tr>
        </thead>
        <tbody className='table--body'>
          <ListOfStudents students={students} deleteStudent={deleteStudent} />
        </tbody>
      </table>
    </section>
  );
}
