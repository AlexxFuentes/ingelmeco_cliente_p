import Card from "../components/Card";
import DisplayData from "../components/svgs/DisplayData";

const Nosotros: React.FC = () => {

  const textCard = [
    `Nuestros clientes son la piedra angular de nuestro negocio. Nos comprometemos a comprender sus necesidades, superar sus expectativas y construir relaciones a largo plazo basadas en la confianza.`,
    `Buscamos la excelencia en todo lo que hacemos. Desde la selección de productos hasta la ejecución de proyectos, nos esforzamos por alcanzar los más altos estándares.`,
    `Actuamos con integridad en todas nuestras interacciones. Mantenemos altos estándares éticos, siendo honestos y transparentes en cada decisión y acción.`,
  ]

  const historia = [
    `Historia`,
    `Con más de dos décadas de historia, Ingelmeco se estableció en San
    Pedro Sula, Honduras, para liderar la ingeniería y la tecnología.
    Desde el inicio, hemos sido proveedores oficiales de Siemens,
    ofreciendo productos avanzados como contactores, guardamotores y
    PLCs. A lo largo de los años, hemos ampliado nuestra presencia y
    participado en proyectos clave en Honduras, contribuyendo al
    desarrollo industrial. Nos destacamos por nuestra dedicación a la
    calidad, innovación y servicio al cliente.`,
  ]

  const valores = [
    `Nuestros Valores`,
    `En Ingelmeco, nuestros valores fundamentales son la brújula que guía
    nuestro actuar diario, tanto dentro como fuera de la empresa. Nos
    esforzamos por reflejar estos principios en cada aspecto de nuestro
    trabajo.`,
  ]

  const servicios = [
    `Nuestros Servicios en Ingelmeco`,
    `En Ingelmeco, nos dedicamos a proporcionar soluciones integrales en
    el campo de la ingeniería y la tecnología. Nuestra oferta de
    servicios abarca una amplia gama de áreas para satisfacer las
    necesidades cambiantes de nuestros clientes.`,	
  ]

  const textCard1 = [
    `Nos especializamos en la ejecución de proyectos de ingeniería, desde la conceptualización hasta la implementación, asegurando resultados exitosos y a medida para cada cliente.`,
    `Diseñamos y construimos paneles eléctricos a medida, garantizando la eficiencia y seguridad en el control de sistemas eléctricos.`,
    `Nuestro equipo altamente capacitado brinda un sólido soporte técnico para mantener el funcionamiento eficiente de los sistemas implementados.`,	
  ]

  return (
    <section>
      <div className="bg-[#202020] p-5 pt-8 lg:flex justify-evenly">
        <div className="w-full lg:w-1/2 mr-2 lg:mx-auto">
          <h2 className="text-[#048C88] text-4xl font-bold">{historia[0]}</h2>
          <p className="text-white pt-5 max-w-[600px] text-lg pb-3">
            {historia[1]}
          </p>
        </div>
        <div className="w-full max-w-[400px] mx-auto overflow-hidden">
          <DisplayData />
        </div>
      </div>

      {/* Sección de los valores */}
      <div className="bg-[#DDDDDD] pt-3 text-center pb-7">
        <div className="mx-auto max-w-full lg:max-w-[680px]">
          <h2 className="text-[#202020] text-2xl font-bold">
            {valores[0]}
          </h2>
          <p className="text-dark p-4 text-lg">
            {valores[1]}
          </p>
        </div>
        <div className="grid gap-10 px-14 2xl:gap-36 lg:gap-20 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            backgroundColor="#1E1E1E"
            imageSrc="/images/exito.webp"
            textColor="#FFFFFF"
            title="Compromiso con el Cliente"
            description={textCard[0]}
          />
          <Card
            backgroundColor="#1E1E1E"
            imageSrc="/images/exito.webp"
            textColor="#FFFFFF"
            title="Excelencia"
            description={textCard[1]}
          />
          <Card
            backgroundColor="#1E1E1E"
            imageSrc="/images/exito.webp"
            textColor="#FFFFFF"
            title="Integridad"
            description={textCard[2]}
          />
        </div>
      </div>

      {/* Sección de los Servicios */}
      <div className="bg-[#202020] pt-3 text-center pb-7 border-b-[30px]">
        <div className="mx-auto max-w-full lg:max-w-[680px]">
          <h2 className="text-white text-2xl font-bold px-3">
            {servicios[0]}
          </h2>
          <p className="text-white p-4 text-lg">
            {servicios[1]}
          </p>
        </div>
        <div className="grid gap-10 px-14 2xl:gap-36 lg:gap-20 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            backgroundColor="#DDDDDD"
            imageSrc="/images/edit-tools.webp"
            textColor="#202020"
            title="Proyectos de Ingeniería"
            description={textCard1[0]}
          />
          <Card
            backgroundColor="#DDDDDD"
            imageSrc="/images/edit-tools.webp"
            textColor="#202020"
            title="Elaboración de Paneles Eléctricos"
            description={textCard1[1]}
          />
          <Card
            backgroundColor="#DDDDDD"
            imageSrc="/images/edit-tools.webp"
            textColor="#202020"
            title="Soporte Técnico"
            description={textCard1[2]}
          />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
