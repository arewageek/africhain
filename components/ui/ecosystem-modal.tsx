"use client"

import { motion, AnimatePresence } from "framer-motion"
import { EcosystemModalHeader } from "@/components/ecosystem/ecosystem-modal-header"
import { EcosystemModalContent } from "@/components/ecosystem/ecosystem-modal-content"
import { EcosystemModalFooter } from "@/components/ecosystem/ecosystem-modal-footer"
import type { LucideIcon } from "lucide-react"

interface EcosystemModalProps {
  tool: {
    icon: LucideIcon
    title: string
    description: string
    features: string[]
    category?: string
    comingSoon?: boolean
    benefits?: string[]
    techStack?: string[]
    popularity?: number
    userCount?: string
    launchDate?: string
  } | null
  isOpen: boolean
  onClose: () => void
}

export function EcosystemModal({ tool, isOpen, onClose }: EcosystemModalProps) {
  if (!tool) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 sm:inset-8 md:inset-16 lg:inset-24 bg-white rounded-3xl z-50 overflow-hidden shadow-2xl"
          >
            <div className="h-full flex flex-col">
              <EcosystemModalHeader tool={tool} onClose={onClose} />
              <EcosystemModalContent tool={tool} />
              <EcosystemModalFooter tool={tool} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
