import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { VscMail } from "react-icons/vsc";
export function Hero() {
    return (
        <section className="bg-gradient-to-tr from-black to-gray-900 text-white">
            <div className="container mx-auto max-w-4xl p-2 py-12 flex flex-col">
                <div className=" basis-1/2">
                    <h1 className="mb-6 text-center md:text-left">
                        <span className="block font-handwriting text-3xl text-center md:text-left">
                            Olá, me chamo
                        </span>
                        <span className="mr-2 font-headline text-5xl font-semibold">
                            Kelvin
                        </span>
                        <span className="font-headline text-5xl font-light text-blue-400">
                            Clenderson
                        </span>
                    </h1>
                    <h2 className="mb-6 flex items-center justify-center gap-2 font-semibold md:justify-start">
                        <div className="h-1 w-12 rounded-full bg-blue-800" />
                        Desenvolvedor React.js Front-end
                        {/* <span className="block">
                            Back-End: .NET | C# | SQL |
                        </span>
                        <span className="block">
                            Front-End: IONIC FRAMEWORK |React.js | JAVASCRIPT |
                            TYPESCRIPT | ANGULAR
                        </span> */}
                    </h2>
                    <p className="text-gray-400 my-6">
                        Minha jornada no mundo da programação começou com uma
                        curiosidade e uma vontade de aprender. Desde então,
                        aprimorei minha habilidade em diversas linguagens de
                        programação, bancos de dados e frameworks. Isso me
                        permite oferecer soluções completas e personalizadas,
                        desde o front-end até o back-end.
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <a
                            href="#"
                            className="button text-gray-600 hover:text-gray-900 flex items-center gap-2"
                        >
                            <VscMail />
                            Entre em contato
                        </a>
                        <span className="italic text-gray-500">ou</span>
                        <a
                            href="#"
                            className="button text-gray-600 hover:text-gray-900 flex items-center gap-2"
                        >
                            <HiOutlineArrowDownTray />
                            Clique para baixar o meu curriculo
                        </a>
                    </div>
                </div>
                <div className="basis-1/2"></div>
            </div>
        </section>
    );
}
