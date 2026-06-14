"use client";

import { copyToClipboard } from "@/lib/copy-clipboard";
import { Copy } from "lucide-react";
import { toast } from "sonner";

export default function OrderCard({
    amount,
    createdAt,
    id,
}: {
    id: string;
    amount: number;
    createdAt: Date;
}) {
    const handleCopy = async () => {
        const success = await copyToClipboard(id);
        if (success) {
            toast.success("Copied");
        } else {
            toast.error("Failed to copy");
        }
    };

    return (
        <div className="rounded-xl border bg-card p-5 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-xs text-muted-foreground">
                        Order ID
                    </p>
                    <h3 className="font-mono text-sm font-semibold break-all">
                        {id}
                    </h3>
                </div>

                <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
                >
                    <Copy className="h-4 w-4" />
                    Copy
                </button>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 border-t pt-4">
                <div>
                    <p className="text-xs text-muted-foreground">
                        Amount
                    </p>
                    <p className="font-semibold text-green-600">
                        ₹{amount.toLocaleString()}
                    </p>
                </div>

                <div>
                    <p className="text-xs text-muted-foreground">
                        Order Date
                    </p>
                    <p className="font-medium">
                        {createdAt.toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    );
}