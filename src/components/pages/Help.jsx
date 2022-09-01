import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';

const Help = () => {
  const [name, setName] = useState();

  useEffect(() => {
    setTimeout(() => {
      setName('Mafijul Alam');
    }, 3000);
    console.log('hook');
  }, []);

  return (
    <Layout>
      <h1>Hi {name ? name : 'Guest'}, This is Help Center</h1>
    </Layout>
  );
};

export default Help;
