import Footer from "@/components/Footer";
import NavMenu from "@/components/NavMenu";

export default function PublicLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     
        <main className="flex flex-col w-full h-full">
        <NavMenu/>
     <div className="flex flex-col  overflow-x-hidden bg-green-950">
        {children}
        </div>
        <Footer/>
     </main>
     
     
     
    );
  }