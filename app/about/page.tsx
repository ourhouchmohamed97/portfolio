import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Homepage() {
  return (
    <>
      <header className="fixed top-2.5 z-50 w-full md:top-4">
        <div className="container mx-auto px-6">
          <Navbar />
        </div>
      </header>
      <main className="dark:bg-black w-full mt-24">
        <section
          className="relative flex w-full flex flex-col items-center justify-center dark:bg-black overflow-hidden py-pagebuilder"
          id="hero-section"
        >
          <div className="mx-auto mt-16 flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:gap-x-24">
            <div className="flex w-full flex-col gap-6 md:w-1/2 md:mr-12">
              <h2 className="text-center text-sm tracking-widest opacity-70 md:text-left">
                MORE ABOUT ME
              </h2>

              <h1 className="text-center font-instrument-serif text-4xl leading-tight text-zinc-700 md:text-left md:text-5xl lg:text-6xl dark:text-zinc-100">
                I'm Mohamed, a software{" "}
                <span className="text-[#432dd7]">engineer</span>
              </h1>
            </div>
            <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-xl border-4 border-gray-800 md:w-1/2">
              <Image
                src="/images/profile.jpeg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
