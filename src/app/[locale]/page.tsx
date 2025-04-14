import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <div className="lg:min-h-screen overflow-hidden flex flex-col">
        <Navbar />

        <div className="flex flex-1">
          <div className="md:bg-clr3 bg-clr2 border-r-4 border-black p-2 lg:w-12"></div>

          <div className="flex-1 z-10">
            <MainContent />
          </div>

          <div className="bg-clr1 border-l-4 border-black p-2 lg:w-12"></div>
        </div>
        {/* moldura bottom */}
        <div className="md:bg-clr2 bg-clr3 border-t-4 border-black w-full z-50 p-4 lg:h-10"></div>
      </div>
    </>
  );
}
