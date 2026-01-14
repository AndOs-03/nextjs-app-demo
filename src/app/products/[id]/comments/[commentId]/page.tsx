import { notFound } from "next/navigation";

export default async function ProductComment({
    params
}: {
    params: {
        id: string,
        commentId: string
    }
}) {
    const product = await params;
    
    if (parseInt(product.id) > 50) {
        notFound();
    }

    return (
        <h1>Comment {product.commentId} for Product {product.id}</h1>
    )
}