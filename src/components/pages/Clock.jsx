import React, { useEffect, useState } from 'react';
import * as DateFns from 'date-fns';
import Layout from '../layout/Layout';

function timeFun(date) {
  return {
    houre: DateFns.getHours(date),
    minuet: DateFns.getMinutes(date),
    second: DateFns.getSeconds(date),
  };
}

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  }, [date]);

  const hours = timeFun(date).houre;
  const minuets = timeFun(date).minuet;
  const seconds = timeFun(date).second;

  return (
    <Layout>
      <h1>Clock</h1>
      <h1>
        {hours > 10 ? hours : `0${hours}`}:
        {minuets > 10 ? minuets : `0${minuets}`}:
        {seconds > 10 ? seconds : `0${seconds}`}
      </h1>
    </Layout>
  );
};

export default Clock;
