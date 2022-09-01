import React from 'react';
import Layout from '../layout/Layout';
import Section from '../section/Section';

const experience = [
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Provident corrupti, expedita, beatae quisquam possimus dicta
    molestias voluptate incidunt reiciendis, fugiat rem odio fugit
    velit aliquam qui et voluptatum assumenda culpa.
`,
  ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Provident corrupti, expedita, beatae quisquam possimus dicta
    molestias voluptate incidunt reiciendis, fugiat rem odio fugit
    velit aliquam qui et voluptatum assumenda culpa.
`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Provident corrupti, expedita, beatae quisquam possimus dicta
    molestias voluptate incidunt reiciendis, fugiat rem odio fugit
    velit aliquam qui et voluptatum assumenda culpa.
`,
];
const projects = [
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Provident corrupti, expedita, beatae quisquam possimus dicta
    molestias voluptate incidunt reiciendis, fugiat rem odio fugit
    velit aliquam qui et voluptatum assumenda culpa.
`,
  ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Provident corrupti, expedita, beatae quisquam possimus dicta
    molestias voluptate incidunt reiciendis, fugiat rem odio fugit
    velit aliquam qui et voluptatum assumenda culpa.
`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Provident corrupti, expedita, beatae quisquam possimus dicta
    molestias voluptate incidunt reiciendis, fugiat rem odio fugit
    velit aliquam qui et voluptatum assumenda culpa.
`,
];

const About = () => {
  return (
    <Layout>
      <h1 style={{ marginBottom: '10px', color: '#a0a' }}>
        This is About Page
      </h1>
      <Section title="Experience" items={experience} />
      <Section title="Projects" items={projects} />
    </Layout>
  );
};

export default About;
