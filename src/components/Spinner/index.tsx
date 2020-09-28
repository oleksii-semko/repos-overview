import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Spin } from 'antd';
import 'antd/dist/antd.css';

interface SpinnerProps {
  message?: string
};

const Spinner: React.FC<SpinnerProps> = ({message = ''}) => {
  return (
    <div className={css(styles.spiner)}>
      <Spin {...(message ? {tip: message} : {})} />
    </div>
  )
};

const styles = StyleSheet.create({
  spiner: {
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: '4px',
    padding: '30px 50px',
    margin: '20px 0',
  }
});

export default Spinner;
