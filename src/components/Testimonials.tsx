import { FaQuoteLeft } from "react-icons/fa";

export function Testimonials() {
    return (
        <section className="container mx-auto max-w-4xl p-4 py-8">
            <div className="relative mb-4 p-4 text-center">
                <h2 className="relative z-50 mb-2 font-bold">
                    <span className="mr-2 font-headline text-3xl text-gray-800">
                        Depoimentos e
                    </span>
                    <span className="font-handwriting text-4xl text-blue-800">
                        Recomendações
                    </span>
                </h2>
                <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
            </div>
            <figure>
                <FaQuoteLeft className="h-8 w-8 text-gray-600" />
                <blockquote className="mb-6">
                    <p className="text-2xl text-gray-900">
                        Kelvin é muito dedicado e ótimo de ambiente, sempre
                        prestativo e disposto a fazer o melhor para os colegas.
                        Tem muito potencial. E tem um ótimo coachability.
                        Recomendo o Kelvin, profissional de excelência.
                    </p>
                </blockquote>
                <figcaption className="flex items-center justify-center gap-2">
                    <img
                        className="h-6 w-6 rounded-full"
                        src="https://media.licdn.com/dms/image/D4D03AQE5cCkQf17zkg/profile-displayphoto-shrink_200_200/0/1687208166444?e=1703721600&v=beta&t=BjB0X824ti4zlliKapQ5Z_kV0R-GKid5f_jKh5mHads"
                        alt="Rafael Augusto"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-200">
                        <div className="pr-3 font-medium text-gray-900">
                            Rafael Augusto
                        </div>
                        <div className="pl-3 text-sm font-light text-gray-500">
                            Capys.com
                        </div>
                    </div>
                </figcaption>
            </figure>
        </section>
    );
}
