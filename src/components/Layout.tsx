import Footer from "./Footer";
import Header from "./Header";

const Layout = ({
  children,
  banner,
}: {
  children: React.ReactNode;
  banner?: React.ReactNode;
}) => {
  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <div className="relative min-h-screen overflow-x-hidden w-full">
        {banner && banner}
        <div className="flex justify-center w-full px-3 md:px-6 lg:px-16">
          <div className="w-full max-w-7xl z-10">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
