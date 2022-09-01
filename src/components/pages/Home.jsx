import React, { useState } from 'react';
import Buttons from '../buttons/Buttons';
import Input from '../inputs/Input';
import Layout from '../layout/Layout';

const Home = () => {
  const [count, setCount] = useState(0);
  const [incress, setIncress] = useState(1);
  const [decress, setDecress] = useState(1);

  function incressHandler(e) {
    setIncress(parseInt(e.target.value));
  }
  function decressHandler(e) {
    setDecress(e.target.value);
  }

  function incButtonHandler() {
    setCount(count + incress);
  }
  function decButtonHandler() {
    setCount(count - decress);
  }
  return (
    <Layout>
      <div
        style={{
          padding: '1rem',
        }}
      >
        <h1>This is Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          voluptatum recusandae libero harum asperiores ex eveniet? Debitis
        </p>
        <h1>Count:{count}</h1>
        <Input
          incress={incress}
          incressHandler={incressHandler}
          decress={decress}
          decressHandler={decressHandler}
        />
        <Buttons title="Increase" onClick={incButtonHandler} />
        <Buttons title="Decrease" onClick={decButtonHandler} />
      </div>
    </Layout>
  );
};

export default Home;
