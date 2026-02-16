"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ChevronLeft, ChevronRight, Edit, Trash2, Eye } from "lucide-react"
import Link from "next/link"

interface Column {
    key: string
    label: string
    render?: (row: any) => React.ReactNode
}

interface AdminDataTableProps {
    columns: Column[]
    data: any[]
    searchKey?: string
    onSearch?: (term: string) => void
    onDelete?: (id: string | number) => void
    editLink?: (id: string | number) => string
    viewLink?: (id: string | number) => string
}

export default function AdminDataTable({
    columns,
    data,
    searchKey,
    onSearch,
    onDelete,
    editLink,
    viewLink,
}: AdminDataTableProps) {
    return (
        <div className="space-y-4">
            {/* Search and Filter */}
            <div className="flex items-center justify-between">
                <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search..."
                        className="pl-9"
                        onChange={(e) => onSearch?.(e.target.value)}
                    />
                </div>
            </div>

            {/* Table */}
            <div className="rounded-md border border-border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {columns.map((col) => (
                                <TableHead key={col.key}>{col.label}</TableHead>
                            ))}
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row, i) => (
                            <TableRow key={i}>
                                {columns.map((col) => (
                                    <TableCell key={col.key}>
                                        {col.render ? col.render(row) : row[col.key]}
                                    </TableCell>
                                ))}
                                <TableCell className="text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        {viewLink && (
                                            <Link href={viewLink(row.id)}>
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <Eye className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                        )}
                                        {editLink && (
                                            <Link href={editLink(row.id)}>
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <Edit className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                        )}
                                        {onDelete && (
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-destructive hover:text-destructive"
                                                onClick={() => onDelete(row.id)}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        )}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-end gap-2">
                <Button variant="outline" size="sm" disabled>
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                    Next
                    <ChevronRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}
