'use client'

import { ReactNode } from 'react'
import ClearIcon from '../icons/ClearIcon'
import { LinkIcon } from '../icons/LinkIcon'

interface DialogProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  showCopyLinkButton?: boolean
}

/**
 * This generic dialog can be closed by both clicking in the cross icon and by clicking outside of the modal
 */
export const Dialog = ({ open, onClose, children, showCopyLinkButton = false }: DialogProps) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
  }

  // Do not render if not open
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8"
      onClick={onClose} // I close the modal when clicking outside the modal (it works well thanks to stopping the propagation below)
    >
      <div
        className="relative bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl transition-all duration-300"
        onClick={e => e.stopPropagation()} // I need to prevent inner clicks from closing the modal here
      >
        <div className="flex items-center gap-1 absolute top-4 right-4">
          {showCopyLinkButton && (
            <button
              onClick={handleCopyLink}
              className="text-gray-400 hover:text-gray-600 text-xl"
              aria-label="Copy link"
              title="Copy link"
            >
              <LinkIcon className="w-5 h-5 cursor-pointer" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl"
            aria-label="Close"
          >
            <ClearIcon className="w-6 h-6 cursor-pointer" />
          </button>
        </div>
        <div className="p-6 mt-6">{children}</div>
      </div>
    </div>
  )
}
