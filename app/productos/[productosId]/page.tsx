"use client";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { Carousel } from "../../components/Carousel";
import { getDownloadURL, ref } from "firebase/storage";
import { LoadingSpinner } from "@/app/components/LoadingSpinner";
import Link from "next/link";

type Producto = {
  nombreProducto: string | null;
  categoriaProducto: string | null;
  descripcionProducto: string | null;
  marcaProducto: string | null;
  subcategoriaProducto: string | null;
  urlImagen: string | null;
  urlImagenSecundaria: string | null;
  urlPdf: string | null;
};

interface ParamsType {
  productosId: string;
}

const Producto = ({ params }: { params: ParamsType }) => {
  const { productosId } = params;
  const [producto, setProducto] = useState<Producto | null>(null);
  const [mobile, setMobile] = useState<boolean>();

  useEffect(() => {
    const fetchProducts = async () => {
      const docRef = doc(db, "productos", productosId);
      try {
        const querySnapshot = await getDoc(docRef);

        setProducto(querySnapshot.data() as Producto);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [productosId]);

  const handleDownloadPdf = async () => {
    if (producto && producto.urlPdf) {
      try {
        const pdfRef = ref(storage, producto.urlPdf);
        const url = await getDownloadURL(pdfRef);

        // Check if the user is on a mobile device
        if (
          navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.indexOf("Mobile") !== -1
        ) {
          // If on a mobile device, open the PDF in a new tab
          setMobile(true);
          window.open(producto.urlPdf, "_blank");
        } else {
          // If on a desktop, trigger the download as before
          const a = document.createElement("a");
          a.href = url;
          a.target = "_blank"; // Opens in a new tab (optional)

          a.style.display = "none";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      } catch (error) {
        console.error("Error al descargar el archivo PDF:", error);
      }
    }
  };

  if (producto === null) {
    return <LoadingSpinner />;
  }

  return (
    <div className="mx-auto px-4 max-w-screen-lg">
      <div className="pt-4">
        <Link href="/">
          <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="#048C88" d="M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293l-1.414-1.414L4.586 12l6.707 6.707z" /></svg>
        </Link>
      </div>
      <div className="flex flex-wrap my-4 shadow-2xl rounded-lg">
        <div className="w-full md:w-1/2 p-4 pl-10">
          {producto.urlImagen ? (
            <Carousel
              imageUrl1={producto.urlImagen}
              imageUrl2={producto.urlImagenSecundaria || ""}
            />
          ) : (
            <div>No existe imagen</div>
          )}
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-[#202020] font-bold text-3xl my-4">
            {producto.nombreProducto || ""}
          </h1>
          <h2 className="text-xl my-4">
            {producto.descripcionProducto || "Producto vendido por INGELMECO"}
          </h2>
          <p className="text-[#202020] font-semibold text-lg">
            Categoría:{" "}
            <span className="font-normal text-base">
              {producto.categoriaProducto || ""}
            </span>
          </p>
          <h3 className="text-[#202020] font-semibold text-lg">
            Marca:{" "}
            <span className="font-normal text-base">
              {producto.marcaProducto || ""}
            </span>
          </h3>
          {producto.subcategoriaProducto && (
            <p className="text-[#202020] font-semibold text-lg">
              Subcategoría:{" "}
              <span className="font-normal text-base">
                {producto.subcategoriaProducto}
              </span>
            </p>
          )}
          <div className="flex flex-col max-w-[250px]">
            <Link
              href={`https://api.whatsapp.com/send?phone=${94987477}`}
              target="_blank"
            >
              <button className="bg-[#048C88] rounded-lg p-2 text-white w-full hover:scale-105 transition-all duration-100 my-4 flex">
                <svg
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                <span className="pl-2 pt-1">Escribenos a Whatsapp</span>
              </button>
            </Link>
            {producto.urlPdf ? (
              <button
                className="bg-[#048C88] rounded-lg p-2 text-white w-full hover:scale-105 transition-all duration-100 mt-1 flex"
                onClick={handleDownloadPdf}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" />
                </svg>
                <span className="pl-2 pt-1">Descargar Ficha Tecnica</span>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;
