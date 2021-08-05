import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalIsOpen, setIsNewTransactionModalIsOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalIsOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalIsOpen(false)
  }

  return (
    <>
      <Header onOpenTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModalIsOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </>
  );
}
