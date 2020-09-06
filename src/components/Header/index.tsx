import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const includesImport = window.location.href.includes('/import');
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/" className={includesImport ? '' : 'isActive'}>Listagem</Link>
          <Link to="/import" className={includesImport ? 'isActive' : ''}>Importar</Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
