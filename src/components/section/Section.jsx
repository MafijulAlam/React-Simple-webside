import React from 'react';

const Section = ({ title, items }) => {
  return (
    <section>
      <div>
        <h2>{title}</h2>
        <ul>
          {items.map((item) => (
            <li style={{ margin: '1rem 0rem', listStyle: 'none' }}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Section;
