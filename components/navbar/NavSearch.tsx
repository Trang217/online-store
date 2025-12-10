"use client"
import { useSearchParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '../ui/input'

function NavSearch() {
  const searchParams = useSearchParams();
  console.log("searchParams", searchParams)
  const { replace } = useRouter();
  const [ search, setSearch ] = useState(searchParams.get("search")?.toString() || "")

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if(value){
      params.set("search", value);
    }else{
      params.delete("search");
    }

    replace(`/products?${params.toString()}`)

  }, 500);

  useEffect(() => {
    if(!searchParams.get("search")){
      setSearch("");
    }
  }, [searchParams.get("search")])

  return (
    <Input 
      placeholder='Search product...' 
      className='max-w-xs dark:bg-gray-400'
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }} />
  )
}

export default NavSearch