import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import React from 'react'

export default function PriceTable() {
  return (
  <div className="bg-background-primary pr-10 pl-10">
  <Table className='rounded-lg border-2 border-white mt-20'>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader className="bg-black">
    <TableRow>
      <TableHead className="w-[50px] text-white">Symbol</TableHead>
      <TableHead className="w-[50px] text-white">Data</TableHead>
      <TableHead className="w-[50px] text-white">Cena</TableHead>
      <TableHead className="w-[50px] text-white">Zmiana</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className="bg-transparent">
    <TableRow className="text-white">
      <TableCell className="font-medium text-white">CB.F</TableCell>
      <TableCell className="text-white">2024-02-16</TableCell>
      <TableCell className="text-white">$82.160</TableCell>
      <TableCell>+0.2%</TableCell>
    </TableRow>
    <TableRow className="text-white">
      <TableCell className="font-medium">CB.F</TableCell>
      <TableCell>2024-02-16</TableCell>
      <TableCell>$82.160</TableCell>
      <TableCell>+0.2%</TableCell>
    </TableRow>
    <TableRow className="text-white">
      <TableCell className="font-medium">CB.F</TableCell>
      <TableCell>2024-02-16</TableCell>
      <TableCell>$82.160</TableCell>
      <TableCell>+0.2%</TableCell>
    </TableRow>
    <TableRow className="text-white">
      <TableCell className="font-medium">CB.F</TableCell>
      <TableCell>2024-02-16</TableCell>
      <TableCell>$82.160</TableCell>
      <TableCell>+0.2%</TableCell>
    </TableRow>
    <TableRow className="text-white">
      <TableCell className="font-medium">CB.F</TableCell>
      <TableCell>2024-02-16</TableCell>
      <TableCell>$82.160</TableCell>
      <TableCell>+0.2%</TableCell>
    </TableRow>
    <TableRow className="text-white">
      <TableCell className="font-medium">CB.F</TableCell>
      <TableCell>2024-02-16</TableCell>
      <TableCell>$82.160</TableCell>
      <TableCell>+0.2%</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
  )
}
