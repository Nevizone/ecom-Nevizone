interface ProductDetailsProps {
    description: string
    highlights: string[]
    specifications: { label: string; value: string }[]
}

export default function ProductDetails({
    description,
    highlights,
    specifications,
}: ProductDetailsProps) {
    return (
        <div className="space-y-12">
            {/* Description */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>{description}</p>
                </div>
            </section>

            {/* Highlights */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Highlights</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                    ))}
                </ul>
            </section>

            {/* Specifications */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Specifications</h2>
                <div className="border border-border rounded-lg overflow-hidden">
                    <table className="w-full text-sm text-left">
                        <tbody className="divide-y divide-border">
                            {specifications.map((spec, index) => (
                                <tr key={index} className="bg-card/50">
                                    <td className="px-6 py-4 font-medium text-muted-foreground w-1/3 bg-secondary/30">
                                        {spec.label}
                                    </td>
                                    <td className="px-6 py-4 text-foreground">{spec.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}
