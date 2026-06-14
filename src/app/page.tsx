import ProductList from "@/features/products/components/ProductList";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-4  md:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Stripe Payment Gateway Demo
        </h1>

        <p>
          Browse products and complete secure payments using Stripe Checkout.
        </p>

      </div>

      <ProductList
        title="Explore & Learn Your Courses"
      />
    </main>
  );
}