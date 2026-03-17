import emailjs from "@emailjs/browser";
import { useRef } from "react";

  
  
  function Form(){

    const form = useRef();

        const enviarEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm(
            "service_t5k371q",
            "template_pbo1toz",
            form.current,
            "qi4Jtkd6LDqCtXjin"
            ).then(
            () => {
                alert("Mensagem enviada!");
                form.current.reset();
            },
            () => {
                alert("Erro ao enviar.");
            }
            );
        };

    return(
   <>
<section id="contato" className="py-20 bg-gray-100">
  <div className="max-w-3xl mx-auto px-6">

   
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Fale Conosco
      </h2>
      <p className="text-gray-600 mt-4">
        Tem alguma dúvida ou sugestão? Envie uma mensagem!
      </p>
    </div>

    
    <form ref={form} onSubmit={enviarEmail} className="flex flex-col gap-3">

      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
          Nome
        </label>
        <input 
            type="text"
            name="user_name"
            id="nome"
            placeholder="seunome"
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"/>
      </div>

      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input 
            type="email"
            name="user_email"
            id="email"
            placeholder="seuemail@email.com"
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"/>
      </div>

     
      <div>
        <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
          Telefone
        </label>
        <input 
            type="tel"
            name="telefone"
            id="telefone"
            placeholder="(21) 91234-5678"
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"/>
      </div>

   
      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">
          Mensagem
        </label>
        <textarea 
            name="message"
            id="mensagem"
            rows="5"
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition resize-none">
        </textarea>
      </div>

     
      <button 
        type="submit"
        className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300">
        Enviar Mensagem
      </button>


      <div className="flex flex-col items-center gap-2 mt-6">

        <span>Ou fale direto com o corretor</span>

        <a 
            href="https://wa.me/5585999999999?text=Olá,%20tenho%20interesse%20no%20imóvel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="35" height="35">
            <path fill="#25D366" d="M16 .396C7.163.396 0 7.559 0 16.396c0 2.893.757 5.716 2.197 8.196L0 32l7.602-2.158a15.94 15.94 0 0 0 8.398 2.347c8.837 0 16-7.163 16-16S24.837.396 16 .396z"/>
            <path fill="#fff" d="M24.48 19.58c-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.53-.56-2.91-1.79-1.08-.96-1.81-2.15-2.02-2.51-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61h-.69c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3s1.29 3.48 1.47 3.72c.18.24 2.54 3.88 6.16 5.44.86.37 1.53.59 2.05.76.86.27 1.64.23 2.26.14.69-.1 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42z"/>
            </svg>
        </a>

      </div>
      
      

    </form>

  </div>
</section>
   </>     
    )
  }

  export default Form;