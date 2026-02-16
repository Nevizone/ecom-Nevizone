"use client"

export default function AdminChart() {
    // Mock chart visualization using CSS/HTML for simplicity without external chart libraries
    const data = [40, 65, 45, 80, 55, 90, 70]
    const max = Math.max(...data)

    return (
        <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Sales Overview</h3>
                <select className="text-sm border border-border rounded-md px-2 py-1 bg-background">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                </select>
            </div>

            <div className="h-64 flex items-end justify-between gap-2">
                {data.map((value, index) => (
                    <div key={index} className="w-full flex flex-col items-center gap-2 group">
                        <div
                            className="w-full bg-primary/20 hover:bg-primary/40 transition-all rounded-t-md relative group"
                            style={{ height: `${(value / max) * 100}%` }}
                        >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                {value}
                            </div>
                        </div>
                        <span className="text-xs text-muted-foreground">
                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
