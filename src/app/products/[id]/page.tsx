export default async function ProductDetails({
    params
}: {
    params: {id: string}
}) {
    const { id } = await params;
    return (
        <>
            <h1>Product details {id}</h1>
        </>
    )
}