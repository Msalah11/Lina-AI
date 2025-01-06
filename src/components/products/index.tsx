import React from 'react'
import TabsMenu from '../tabs'
import { SideSheet } from '../sheet'
import { Plus, Package2 } from 'lucide-react'
import { CreateProductForm } from './product-form'
import { TabsContent } from '../ui/tabs'
import { DataTable } from '../table'
import { TableCell, TableRow } from '../ui/table'
import Image from 'next/image'
import { getMonthName } from '@/lib/utils'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'

type Props = {
  products: {
    id: string
    name: string
    price: number
    image: string
    createdAt: Date
    domainId: string | null
  }[]
  id: string
}

const ProductTable = ({ id, products }: Props) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Package2 className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold tracking-tight">Products</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Add products to your store and set them live to accept payments from customers.
        </p>
      </div>

      {/* Tabs and Add Product */}
      <TabsMenu
        className="w-full"
        triggers={[
          { label: 'All products' },
          { label: 'Live' },
          { label: 'Deactivated' },
        ]}
        button={
          <div className="flex-1 flex justify-end">
            <SideSheet
              description="Add products to your store and set them live to accept payments from customers."
              title="Add a product"
              trigger={
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add Product
                </Button>
              }
            >
              <CreateProductForm id={id} />
            </SideSheet>
          </div>
        }
      >
        <TabsContent value="All products">
          <DataTable 
            headers={['Featured Image', 'Name', 'Pricing', 'Created']}
            className="mt-4"
          >
            {products.map((product) => (
              <TableRow 
                key={product.id}
                className="hover:bg-muted/50 transition-colors"
              >
                <TableCell>
                  <div className="relative h-12 w-12 overflow-hidden rounded-md">
                    <Image
                      src={`https://ucarecdn.com/${product.image}/`}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">{product.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {product.id}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">
                    ${product.price.toFixed(2)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-muted-foreground">
                    {product.createdAt.getDate()}{' '}
                    {getMonthName(product.createdAt.getMonth())}{' '}
                    {product.createdAt.getFullYear()}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </DataTable>
        </TabsContent>
      </TabsMenu>
    </div>
  )
}

export default ProductTable
