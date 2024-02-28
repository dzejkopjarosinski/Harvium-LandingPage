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
  <div className="bg-[#080E2D] pr-10 pl-10">
  <Table className='bg-[#141725] rounded-lg border-black border-1'>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[50px] text-white">Symbol</TableHead>
      <TableHead className="w-[50px] text-white">Data</TableHead>
      <TableHead className="w-[50px] text-white">Cena</TableHead>
      <TableHead className="w-[50px] text-white">Zmiana</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
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
  </TableBody>
</Table>
</div>
  )
}
