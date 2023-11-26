"use client";
import algoliasearch from "algoliasearch";
import Image from "next/image";
import Link from "next/link";
import { InstantSearch, SearchBox, Hits, Pagination, RefinementList } from "react-instantsearch";
import { Panel } from "./Panel";
import { LoadingSpinner } from "./LoadingSpinner";
import { useEffect, useState } from "react";

const APPLICATION_ID = "II7IZ0BHLU";
const SEARCH_API_KEY = "e1c8eaa84d0b914b676608b0c858d5a7";
const searchClient = algoliasearch(APPLICATION_ID, SEARCH_API_KEY);

type HitType = {
  objectID: string;
  nombreProducto: string;
  descripcionProducto: string;
  categoriaProducto: string;
  marcaProducto: string;
  urlImagen: string;
};

function Hit({ hit }: { hit: HitType }) {
  return (
    <div className="bg-[#202020] rounded-lg shadow-md p-4 h-full text-white max-w-sm flex flex-col">

      <div className="flex justify-center">
        {/*max-w-full h-auto   recomendadas por firebase  w-full h-36 object-contain*/}
        <Image src={hit.urlImagen} className="max-w-full h-36 object-contain" alt="producto-img" width={900} height={100} loading="lazy" />
      </div>
      <p className="text-xl font-semibold pt-2">{hit.nombreProducto}</p>

      <div className="flex gap-2 py-2">
        <div className="flex justify-start">
          <span className="text-base">Categoria:</span>
        </div>
        <p className="flex justify-center items-center text-sm">
          {hit.categoriaProducto}
        </p>
      </div>

      <div className="flex items-center gap-3 py-2">
        <span className="text-base">Marca:</span>
        <p className="text-sm">
          {hit.marcaProducto}
        </p>
      </div>

      <div className="flex justify-center mt-auto">
        <Link href={`/productos/${hit.objectID}`}>
          <button className="bg-[#048C88] p-2 rounded-md transition-all duration-300 hover:scale-105 ">
            Ver Producto
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function Search() {

  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {
        showSpinner ?
          <LoadingSpinner /> :
          (
            <InstantSearch
              searchClient={searchClient}
              indexName="ingelmeco_web_productos"
              future={{ preserveSharedStateOnUnmount: true }}
            >
              <div className="text-center py-2 bg-[#202020]">
                <SearchBox placeholder="Busca tus productos" />
              </div>

              <div className="grid 2xl:flex xl:flex md:flex min-h-screen pt-5">

                <div className="flex flex-col ml-4 mr-6">
                  <Panel header="Marca">
                    {" "}
                    {/* Titulo de los selectores */}
                    <RefinementList
                      attribute="marcaProducto"
                      escapeFacetValues={false}
                      className=""
                    />
                  </Panel>

                  <Panel header="Categoría">
                    <RefinementList attribute="categoriaProducto" className="" />
                  </Panel>
                </div>

                <div className="w-full">
                  <Hits hitComponent={Hit} />
                </div>

              </div>

              <div className="pagination">
                <Pagination showFirst={true} />
              </div>
            </InstantSearch>
          )
      }
    </>
  );
}
