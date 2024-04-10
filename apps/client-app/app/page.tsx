import React from "react"
import { Button } from "@repo/ui/button"
import Image from "next/image"
import Link from "next/link"
import { FaLongArrowAltRight } from "react-icons/fa"

const HomePage = async () => {
  return (
    <div className='bg-primary-foreground h-20 min-h-[85vh]'>
      <div className='flex justify-center items-center'>
        <section className='w-full px-36 space-y-8'>
          <h1 className='text-7xl'>Fast and easy way to pay</h1>
          <Button asChild>
            <Link href='/login'>
              Start here &nbsp; <FaLongArrowAltRight />
            </Link>
          </Button>
        </section>
        <section className='w-full h-[85vh] '>
          <Image
            className='w-full h-full'
            src='/cover.webp'
            alt='cover'
            height={500}
            width={500}
          />
        </section>
      </div>
    </div>
  )
}

export default HomePage
