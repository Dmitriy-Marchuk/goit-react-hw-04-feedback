import PropTypes from 'prop-types';
import React from 'react';
import '../../index.scss';

const Section = ({ title, children }) => {
  return (
    <section className="container-for-element">
      <h1>{title}</h1>
      <div>{children}</div>
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
