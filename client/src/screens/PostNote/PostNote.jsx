import { useState } from 'react'

export default function PostNote() {
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  })
  return (
    <div>PostNote</div>
  )
}
