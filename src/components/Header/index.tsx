import * as React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { StyleSheet, css } from 'aphrodite';

export interface HeaderProps {
  title: string
};

export function Header({title = 'App header'}: HeaderProps) {
  return (
    <header className={css(styles.header)} >
        <GithubOutlined className={css(styles.icon)} />
        <span>{title}</span>
    </header>
  )
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#282c34',
      minHeight: '60px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      color: 'white',
    },
    icon: {
      marginRight: '10px'
    }
  });
