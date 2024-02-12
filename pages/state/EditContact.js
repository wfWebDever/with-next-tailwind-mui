import { useState } from 'react'

export default function EditContact({ savedContact, onSave }) {
  const [name, setName] = useState(savedContact.name)
  const [email, setEmail] = useState(savedContact.email)

  return (
    <section>
      <label className=" block">
        Name:{' '}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-solid border-black"
        />
      </label>
      <label className=" block">
        Email:{' '}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-solid border-black"
        />
      </label>
      <button
        className="m-1 border border-solid border-black"
        onClick={() => {
          const updatedData = {
            id: savedContact.id,
            name: name,
            email: email
          }
          onSave(updatedData)
        }}
      >
        Save
      </button>
      <button
        className="m-1 border border-solid border-black"
        onClick={() => {
          setName(savedContact.name)
          setEmail(savedContact.email)
        }}
      >
        Reset
      </button>
    </section>
  )
}
