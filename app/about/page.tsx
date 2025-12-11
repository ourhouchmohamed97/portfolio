import Navbar from "../components/Navbar";

export default function Homepage() {
    return (
        <>
        <header className="fixed top-2.5 z-50 w-full md:top-4">
            <Navbar />
        </header>
        <main className="p-20">
            <h1>Hello this is test!</h1>
        </main>
        </>
    );
}