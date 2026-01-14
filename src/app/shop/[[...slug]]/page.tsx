export default async function Shop({
    params
}: {
    params: {
        slug: string[]
    }
}) {
    const shoping = await params;
    if (shoping.slug?.length === 2) {
        return (
            <h1>Viewing shop {shoping.slug[0]} - {shoping.slug[1]}</h1>
        )
    } else if (shoping.slug?.length === 1) {
        return (
            <h1>Viewing shop {shoping.slug[0]}</h1>
        )
    } else {
        return (
            <h1>Shoping home</h1>
        )
    }
}