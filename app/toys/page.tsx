import { redirect } from 'next/navigation'

export default function ToysPage() {
    redirect('/products?category=Toys')
}
