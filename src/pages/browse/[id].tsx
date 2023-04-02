import { useRouter } from 'next/router'

export default function BrowseItem() {
  const router = useRouter()
  const { id } = router.query

  return <div></div>
}
