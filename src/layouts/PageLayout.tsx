import Footer from "@/commponents/footer/Fotter";
import Navbar from "@/commponents/navbar/Header";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
