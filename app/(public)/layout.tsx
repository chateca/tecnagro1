import Footer from "@/components/Footer";
import NavMenu from "@/components/NavMenu";

export default function PublicLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <>
        <NavMenu/>
     <main className="">
        {children}
     </main>
     <footer>
        <Footer/>
     </footer>
     </>
    );
  }