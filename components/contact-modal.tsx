"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ContactForm } from "@/components/contact-form"

export function ContactModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>Fill out the form below and we'll get back to you as soon as possible.</DialogDescription>
        </DialogHeader>
        <ContactForm
          onSuccess={() => {
            // Keep the modal open to show the confirmation message
            setTimeout(() => setOpen(false), 5000) // Close the modal after 5 seconds
          }}
        />
      </DialogContent>
    </Dialog>
  )
}
