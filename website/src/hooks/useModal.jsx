import React from 'react'
import { createContext, useContext, useState, useCallback } from 'react'

const ModalContext = createContext(null)

export function ModalProvider({ children }) {
  const [modals, setModals] = useState({
    privacy: false,
    terms: false,
    cookies: false,
  })

  const openModal = useCallback((modalName) => {
    setModals(prev => ({ ...prev, [modalName]: true }))
    document.body.style.overflow = 'hidden'
  }, [])

  const closeModal = useCallback((modalName) => {
    setModals(prev => ({ ...prev, [modalName]: false }))
    document.body.style.overflow = 'unset'
  }, [])

  const closeAllModals = useCallback(() => {
    setModals({ privacy: false, terms: false, cookies: false })
    document.body.style.overflow = 'unset'
  }, [])

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal, closeAllModals }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}

export default useModal