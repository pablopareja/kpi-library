'use client'

import { Button } from '@/components/ui/Button'
import { LoadingText } from '@/components/ui/Loading'
import { sendAccessRequest } from '@/lib/endpoints/sendAccessRequest'
import { AccessRequest, Asset } from '@/types'
import { useState } from 'react'
import { Dialog } from '../../ui/Modal'

interface RequestAccessModal {
  onClose?: () => void
  asset: Asset | undefined
}

export const RequestAccessModal = ({ onClose, asset }: RequestAccessModal) => {
  const [message, setMessage] = useState('')
  const [confirmationReceived, setConfirmationReceived] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleClose = () => {
    onClose?.()
    // We need to clear this for the next time the modal is shown
    setConfirmationReceived(false)
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }

  const handleSubmit = () => {
    setLoading(true)
    console.log('assset', asset)
    sendAccessRequest({ description: message, ...(asset && { assetId: asset.id }) }).then(
      (response: AccessRequest) => {
        setLoading(false)
        if (response.accessRequestSent) {
          setConfirmationReceived(true)
        } else {
          // This should be handled in a different way but I kept it this way for the
          // sake of simplicity
          console.error('There was an error when sending the access request')
        }
      }
    )
  }

  return (
    <Dialog open={true} onClose={handleClose} showCopyLinkButton={false}>
      <div className="flex flex-col gap-8">
        <h2 className="flex justify-center w-full text-3xl font-bold">Request Access</h2>
        {!confirmationReceived && (
          <div className="flex flex-col gap-2">
            <h5 className="font-bold text-l">Message</h5>
            <textarea
              className="w-full h-[200px] p-2 border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-500"
              value={message}
              onChange={handleMessageChange}
            />
          </div>
        )}
        {loading && <LoadingText className="w-full" />}
        {confirmationReceived && (
          <div className="flex ">
            Your request has been sent. We'll send you an email as soon as it gets approved.
          </div>
        )}
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <Button variant="secondary" label="Cancel" onClick={handleClose} />
        {!confirmationReceived && !loading && (
          <Button variant="primary" label="Submit" onClick={handleSubmit} />
        )}
      </div>
    </Dialog>
  )
}
