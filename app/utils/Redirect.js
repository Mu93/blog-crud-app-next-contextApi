'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Loading from '../loading'

export function Redirect({ to }) {
  const router = useRouter()

  useEffect(() => {
    router.replace(to)
    router.refresh()
  })

  return <Loading />
}
