import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteLayout from "@/components/app/SiteLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <SiteLayout>
      <div className="container grid min-h-[60dvh] place-items-center py-24">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-orange-600">
            404
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Oops! Halaman tidak ditemukan
          </p>
          <a
            href="/"
            className="mt-6 inline-block rounded-lg bg-primary px-4 py-2 text-primary-foreground"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </SiteLayout>
  );
};

export default NotFound;
