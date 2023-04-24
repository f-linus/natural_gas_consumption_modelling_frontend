import Head from "next/head";
import { NaturalGasConsumptionModelling } from "@/components/NaturalGasConsumptionModelling";

export default function Home() {
  return (
    <>
      <Head>
        <title>Linus Folkerts</title>
        <meta
          name="description"
          content="Linus Folkerts personal site."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col font-serif text-white">
        {/* Div with name and links at the right-side */}
        <div className="flex flex-row-reverse mb-40">
          <div className="flex flex-col">
            <a
              href="https://www.linkedin.com/in/linus-folkerts-3276841b7/"
              className="text-8xl md:text-9xl hover:text-gray-400"
            >
              Linus Folkerts
            </a>
          </div>
        </div>
        <div className="p-2 lg:p-28">
          <h2 className="text-5xl mb-20">Natural gas consumption in Germany</h2>
          <NaturalGasConsumptionModelling />
        </div>
      </main>
    </>
  );
}
