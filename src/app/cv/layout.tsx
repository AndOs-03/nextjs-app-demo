export const metadata = {
    title: "CV AndOs",
};

export default function CVLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <h1>Layout CV</h1>
        </>
    );
}