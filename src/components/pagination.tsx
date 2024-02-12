import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

export interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
  onPageChange: (pageIndex: number) => Promise<void> | void
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className='flex item-center justify-between'>
      <span className='text-sm text-muted-foreground'>
        Total de {totalCount} item(s)
      </span>

      <div className='flex items-center gap-6 lg:gap-7'>
        <div className='text-sm font-medium'>
          Pagina {pageIndex + 1} de {pages}
        </div>
        <div className='flex items-center gap-2'>
          <Button
            variant='outline'
            className='h-8 w-8 p-0'
            onClick={() => onPageChange(0)}
            disabled={pageIndex === 0}
          >
            <ChevronsLeft className='h-4 w-4' />
            <span className='sr-only'>Primeira pagina</span>
          </Button>
          <Button
            variant='outline'
            className='h-8 w-8 p-0'
            onClick={() => onPageChange(pageIndex - 1)}
            disabled={pageIndex === 0}
          >
            <ChevronLeft className='h-4 w-4' />
            <span className='sr-only'>Pagina anterior</span>
          </Button>
          <Button
            variant='outline'
            className='h-8 w-8 p-0'
            onClick={() => onPageChange(pageIndex + 1)}
            disabled={pageIndex + 1 >= pages}
          >
            <ChevronRight className='h-4 w-4' />
            <span className='sr-only'>Proxima pagina</span>
          </Button>
          <Button
            variant='outline'
            className='h-8 w-8 p-0'
            onClick={() => onPageChange(pages - 1)}
            disabled={pageIndex + 1 === pages}
          >
            <ChevronsRight className='h-4 w-4' />
            <span className='sr-only'>Ultima pagina</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
