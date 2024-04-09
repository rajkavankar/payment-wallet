import React from "react"
import { db } from "@repo/database"

const HomePage = async () => {
  const data = await db.user.findMany()

  console.log(data)

  return (
    <div>
      <h1 className='text-5xl text-red-300'>Hello</h1>
      <h1 className='text-5xl'>{JSON.stringify(data)}</h1>
    </div>
  )
}

export default HomePage
