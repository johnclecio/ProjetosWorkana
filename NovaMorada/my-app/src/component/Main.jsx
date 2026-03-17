

function Main(){
    return(

        <div>


        <section className="bg-linear-to-r from-rose-400 to-blue-500 py-20">
                <h1 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">Nova Morada</h1>
               <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">

                   
                   <div className="md:w-1/2 text-center md:text-left">
                   <p className="text-4xl md:text-4xl font-extrabold text-gray-800 leading-tight">
                        O lugar perfeito para começar sua nova história.
                   </p>

                   <p className="mt-6 text-lg text-gray-600">
                       Descubra imóveis exclusivos pensados para oferecer conforto,
                       segurança e qualidade de vida para você e sua família.
                   </p>

                   
                   <div className="mt-8 flex justify-center md:justify-start gap-4">
                    <a className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300" href="#contato">Fala Conosco!</a>
                   </div>
                   </div>

               
                   <div className="overflow-hidden rounded-3xl shadow-xl">
                   <img src="https://i.pinimg.com/1200x/89/3b/53/893b5382b9d48e7990a9a4e293b0f562.jpg"
                       alt="Casa moderna disponível para venda"
                       className="w-full transition-transform duration-500 hover:scale-110"/>
                   </div>

                </div>
           </section>
        </div>
        
        
            
   )
       
}

export default Main;