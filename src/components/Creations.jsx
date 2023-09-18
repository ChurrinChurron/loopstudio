import CreationCard from "./CreationCard"

const Creations = () => {
  return (
    <section className="mb-28 md:mx-auto" style={{maxWidth: '80em'}}>
        <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-center uppercase text-4xl font-light ms-4">Our creations</h2>
            <a href="#" className="hidden border border-black uppercase block mx-auto text-center w-32 py-2 font-medium tracking-widest transition duration-300 hover:bg-black hover:text-white md:block md:me-10">See All</a>
        </div>
        <CreationCard/>
        <a href="#" className="border border-black uppercase block mx-auto text-center w-32 py-2 font-medium tracking-widest transition duration-300 hover:bg-black hover:text-white
            md:hidden">See All</a>
    </section>
  )
}

export default Creations