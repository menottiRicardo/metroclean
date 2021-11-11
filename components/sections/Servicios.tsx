import ServiciosCard from "../components/ServiciosCard";

function Servicios() {
  return (
    <div className="mt-8 sm:mt-20 pb-20">
      {/* title */}
      <h1 className="text-primry-400 font-bold font-mono text-3xl p-2 flex items-center justify-center">
        Servicios Populares
      </h1>

      {/* servicios */}
      <div className="sm:grid sm:grid-cols-4 sm:overflow-hidden rounded-md">
        <div className="hover:scale-150">
          <ServiciosCard
            title="Descarga De contenedores"
            color="600"
            url="https://metrocleansite.s3.amazonaws.com/descarga-contenedor.webp"
            style="ml-16 sm:ml-14"
          />
        </div>
        <ServiciosCard
          title="Personal de Limpieza"
          color="900"
          url="https://metrocleansite.s3.amazonaws.com/limpieza-bodegas.webp"
          style="ml-20"
        />
        <ServiciosCard
          title="Pickiadores"
          color="600"
          url="https://metrocleansite.s3.amazonaws.com/pickeadores.webp"
          style="ml-32 sm:ml-20"
        />
        <ServiciosCard
          title="Maquilas"
          color="900"
          url="https://metrocleansite.s3.amazonaws.com/maquilas.webp"
          style="ml-32 pl-5 sm:ml-16"
        />
      </div>
    </div>
  );
}

export default Servicios;
