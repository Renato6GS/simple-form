import Head from 'next/head';

import { useStudents } from 'hooks/useStudents';
import Form from 'components/Form';
import TableOfStudents from 'components/TableOfStudents';

export default function HomePage() {
  const { students, newStudent, deleteStudent } = useStudents();

  return (
    <>
      <Head>
        <title>Create Student</title>
        <meta name='description' content='Create Student' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      </Head>

      <Form newStudent={newStudent} />

      <TableOfStudents students={students} deleteStudent={deleteStudent} />
    </>
  );
}
