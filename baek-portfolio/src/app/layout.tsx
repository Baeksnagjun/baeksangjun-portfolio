import type { ReactNode } from 'react';
import Gnb from '../components/common/Gnb';
import ScrollTopButton from '../components/common/ScrollTopButton';
import './globals.css';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Gnb />
      {children}
      <ScrollTopButton />
    </>
  );
}
