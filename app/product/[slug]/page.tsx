'use client';

import { useParams } from 'next/navigation';
import ProductItem from '@/components/ProductItem';
import { products } from '@/app/data/products';

export default function ProductPage() {
    const params = useParams();
    const slug = params?.slug;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return <div className="text-white text-center mt-40">Product not found</div>;
    }

    return (
        <div className="w-full bg-black items-center">
            <div className="w-full">
                <ProductItem product={product} />
            </div>
        </div>
    );
}
