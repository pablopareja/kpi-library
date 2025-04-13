'use client'

import { ReactNode } from 'react'
import ClearIcon from '../icons/ClearIcon'

interface DialogProps {
  open: boolean
  onClose: () => void
  children: ReactNode
}

/**
 * This generic dialog can be closed by both clicking in the cross icon and by clicking outside of the modal
 */
export const Dialog = ({ open, onClose, children }: DialogProps) => {
  // Do not render if not open
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400 px-4 py-8"
      onClick={onClose} // I close the modal when clicking outside the modal (it works well thanks to stopping the propagation below)
    >
      <div
        className="relative bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl transition-all duration-300"
        onClick={e => e.stopPropagation()} // I need to prevent inner clicks from closing the modal here
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
          aria-label="Close"
        >
          <ClearIcon className="w-5 h-5" />
        </button>

        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
