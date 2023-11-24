export function About() {
    return (
        <section className="container mx-auto my-4 max-w-5xl p-4">
            <div className="relative p-4 text-center">
                <h2 className="relative z-50 mb-2 font-bold text-blue-900">
                    <span className="mr-2 font-headline text-3xl">Sobre</span>
                    <span className="font-handwriting text-4xl">Mim</span>
                </h2>
                <p className="relative text-sm text-gray-600">
                    Tenho alguns projetos executados com ASP.NET, REACT.JS e
                    IONIC FRAMEWORK
                </p>
                <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40" />
            </div>

            <div className="mx-auto mt-20 max-w-lg">
                <div className="relative w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48">
                    <div className="relative h-full w-full rounded-lg bg-gray-50 p-2">
                        <p className="font-handwriting text-lg font-bold">
                            Olá,
                        </p>
                        <p>
                            <span className="mr-1">Meu nome é</span>
                            <span className="font-headline font-bold uppercase text-blue-900">
                                Kelvin Clenderson
                            </span>
                        </p>

                        <table className="mt-4 w-full text-sm">
                            <tbody>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Idade:
                                    </td>
                                    <td>24</td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Celular:
                                    </td>
                                    <td>
                                        <a
                                            href="tel:+5531983552544"
                                            className="underline hover:text-blue-800"
                                        >
                                            +55 31 9.98355-2544
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Email:
                                    </td>
                                    <td>
                                        <a
                                            href="mailto:kelvinclenderson95@gmail.com"
                                            className="underline hover:text-blue-800"
                                        >
                                            kelvinclenderson95@gmail.com
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Endereço:
                                    </td>
                                    <td>
                                        <a
                                            href="https://www.google.com/maps/place/R.+Maria+da+Matta+Castro,+994+-+Conj.+Confisco,+Contagem+-+MG,+32113-585/@-19.866046,-44.021547,17z/data=!3m1!4b1!4m6!3m5!1s0xa693dfd8f8c9f9:0x7dff4d65516bf7ab!8m2!3d-19.866046!4d-44.021547!16s%2Fg%2F11f3nk1dgm?entry=ttu"
                                            target="_blank"
                                            className="underline hover:text-blue-800"
                                        >
                                            R. Maria da Matta Castro, 994 -
                                            Confisco, Belo Horizonte - MG,
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Disponível:
                                    </td>
                                    <td>
                                        <span className="relative flex h-3 w-3">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-[url(https://images.unsplash.com/photo-1698263557999-674c3003d66e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56"></div>
                </div>
            </div>
        </section>
    );
}
