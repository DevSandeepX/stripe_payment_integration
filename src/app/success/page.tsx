import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <div className="w-full max-w-md rounded-lg border bg-white p-6 shadow">
                <div className="space-y-4 text-center">
                    <h1 className="text-3xl font-bold text-green-600">
                        Payment Successful 🎉
                    </h1>

                    <p className="text-muted-foreground">
                        Thank you for your purchase. Your payment has been received and is being processed.
                    </p>

                    <div className="flex gap-3 justify-center">
                        <Link href="/">
                            <button className="rounded bg-green-600 px-4 py-2 text-white">
                                Go Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}