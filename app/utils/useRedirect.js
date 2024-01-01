
'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const useRedirect = (redirectPath) => {
  const router = useRouter()

  useEffect(() => {
    if (redirectPath) {
      router.push(redirectPath)
    }
  }, [redirectPath, router])

  return null
}

export default useRedirect
