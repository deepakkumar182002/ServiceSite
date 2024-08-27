import Footer from "@/components/Footer";
import Homepage from "@/components/Homepage";
import Navigation from "@/components/Navigation";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="container">
        <div className="px-4">
          <Navigation />
        </div>
        <Homepage />
        <Footer />
      </main>
    </>
  );
}
