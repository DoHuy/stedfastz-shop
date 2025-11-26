import ProductDescription from "@/components/ProductDescription";
import ProductDetails from "@/components/ProductDetails";
import { productDummyData } from "@/assets/assets";

export async function generateMetadata({ params }) {
    const { productId } = params;
    const product = productDummyData.find((p) => p.id === productId);

    if (!product) {
        return {
            title: "Product Not Found",
            description: "The product you are looking for does not exist.",
        };
    }

    return {
        title: `${product.name} - Xe điện chất`,
        description: product.description,
        openGraph: {
            title: `${product.name} - Xe điện chất`,
            description: product.description,
            images: [
                {
                    url: product.image,
                    width: 800,
                    height: 600,
                    alt: product.name,
                },
            ],
            url: `/product/${product.id}`,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${product.name} - Xe điện chất`,
            description: product.description,
            images: [product.image],
        },
    };
}

export default function Product({ params }) {
    const { productId } = params;
    const product = productDummyData.find((p) => p.id === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="mx-6">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumbs */}
                <div className="text-gray-600 text-sm mt-8 mb-5">
                    Home / Products / {product?.category}
                </div>

                {/* Product Details */}
                <ProductDetails product={product} />

                {/* Description & Reviews */}
                <ProductDescription product={product} />
            </div>
        </div>
    );
}