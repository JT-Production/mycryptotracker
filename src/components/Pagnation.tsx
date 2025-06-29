import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PagnationProps {
  page: number;
  setPage: (page: number) => void;
}

const Pagnation = ({page, setPage} : PagnationProps) => {
  

  return (
    <Pagination className="flex justify-center items-center my-3 ">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={() => setPage(page - 1)}/>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive={page === 0} onClick={() => setPage(0)}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive={page === 1} onClick={() => setPage(1)}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive={page === 2} onClick={() => setPage(2)}>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive={page === 3} onClick={() => setPage(3)}>4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive={page === 4} onClick={() => setPage(4)}>5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" onClick={() => setPage(page + 1)}/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default Pagnation
