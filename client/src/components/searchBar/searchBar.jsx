import { useState } from "react"

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch?.(value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full"
    >
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search for recipes..."
        className="flex-1 px-5 py-4 rounded-2xl border border-[#E0E0E0] bg-white outline-none focus:border-[#4CAF50]"
      />

      <button
        type="submit"
        className="px-7 py-4 rounded-2xl bg-[#4CAF50] hover:bg-[#2E7D32] text-white font-semibold transition"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar