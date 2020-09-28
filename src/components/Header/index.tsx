import * as React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { StyleSheet, css } from 'aphrodite';

interface HeaderProps {
  title?: string
};

const Header: React.FC<HeaderProps> = ({title = 'App header'}) => {
  return (
    <header className={css(styles.header)} >
        <GithubOutlined className={css(styles.icon)} />
        <span>{title}</span>
    </header>
  );
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

export default Header;
