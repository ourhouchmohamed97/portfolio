"use client"

import { ShinyButton } from "@/components/ui/interactive-hover-button"
import { useRouter } from "next/navigation"

export function ShinyButtonDemo() {
  const router = useRouter()
  return <ShinyButton onClick={() => router.push("/projects")}>See more projects</ShinyButton>
}
