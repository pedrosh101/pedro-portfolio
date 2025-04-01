import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <div className="lg:min-h-screen overflow-hidden flex flex-col">
        <Navbar />

        <div className="flex flex-1">
          <div className="bg-clr1 border-r-4 border-black p-5 lg:p-4 lg:w-20"></div>

          <div className="flex-1 z-10">
            <MainContent />
          </div>

          <div className="bg-clr1 border-l-4 border-black p-5 lg:p-4 lg:w-20"></div>
        </div>
        {/* moldura bottom */}
        <div className="bg-clr1 border-t-4 border-black w-full z-50 p-5 lg:p-4 lg:h-16"></div>
      </div>
    </>
  );
}
