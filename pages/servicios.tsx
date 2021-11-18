import {motion} from 'framer-motion'
import Navbar from '../components/components/Navbar'
import ServiceCard from '../components/sections/servicesPage/ServiceCard'
function Servicios() {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="bg-primary-500">
            <Navbar/>
            <main className="layout">
                <ServiceCard title="Descarga de Contenedores" descripcion=""/>
                <ServiceCard title="Maquilas" descripcion=""/>
                <ServiceCard title="Limpieza" descripcion=""/>
                <ServiceCard title="Piqueadores" descripcion=""/>
                <ServiceCard title="Empacadores" descripcion=""/>
                <ServiceCard title="Distribucion de mercancias" descripcion=""/>
                <ServiceCard title="Mantenimiento de Flotas" descripcion=""/>
                <ServiceCard title="Supervisor de Bodega" descripcion=""/>
            </main>
        </motion.div>
    )
}

export default Servicios
