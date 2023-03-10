import Head from "next/head";

import { useEffect, useRef } from "react";
import Card from "../components/card";
import CTA from "../components/cta";
import Button from "../components/shared/button";
import HorizontalLine from "../components/shared/horizontal-line";
import useAnimatedBackground from "../hooks/useAnimatedBackground";
import ExternalLink from "../components/shared/external-link";

import semesterImage1 from "../public/images/semester-oppgave/homepage.png";
import semesterImage2 from "../public/images/semester-oppgave/navigationImage.png";
import semesterImage3 from "../public/images/semester-oppgave/sourcesImage.png";

import bingoImage1 from "../public/images/bingo-2/home.png";
import bingoImage2 from "../public/images/bingo-2/room.png";

import landingImage1 from "../public/images/landing-page/CTA.png";
import landingImage2 from "../public/images/landing-page/stats.png";
import landingImage3 from "../public/images/landing-page/register-email.png";
import landingImage4 from "../public/images/landing-page/offerings.png";

import monnImage1 from "../public/images/monn/monn-home.png";
import monnImage2 from "../public/images/monn/monn-values.png";
import monnImage3 from "../public/images/monn/monn-news.png";
import monnImage4 from "../public/images/monn/monn-blog.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eirik Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="mx-auto">
        <div className="relative flex justify-center overflow-hidden">
          <CTA />
        </div>
        <div className="h-14 bg-th-background"></div>
        <Card
          title="Gjenskapelse av Monn"
          description={
            <span>
              Jeg brukte{" "}
              <a className="hover:underline" href="https://monn.no/">
                Monn.no
              </a>{" "}
              som en high fidelity prototype for å gjenskape nettsiden.{" "}
              <a className="hover:underline" href="https://monn.no/">
                Monn.no
              </a>{" "}
              har flere tekniske triks som var en morsom utfordring å løse.
            </span>
          }
          tags={["Next.js", "Tailwind", "HeadlessUI"]}
          github="https://github.com/201549BL/CopyOfMonn"
          link="https://copy-of-monn.vercel.app/"
          popoverContent={
            <>
              <div className="flex flex-col gap-2 xs:gap-4">
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, (max-width: 1536px) 50vw, 33vw"
                  src={monnImage1}
                  alt="bilde av forsiden til nettsiden"
                  // width="1448"
                  // height="783"
                  placeholder="blur"
                  className="rounded"
                />
                <p className="text-sm xs:text-base sm:text-lg">
                  Forsiden til nettsiden har en video som automatisk spiller i
                  backgrunnen.
                </p>
              </div>
              <div className="flex flex-col gap-2 xs:gap-4">
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, (max-width: 1536px) 50vw, 33vw"
                  src={monnImage2}
                  alt="Bildet viser en prosjekt side"
                  // width="1448"
                  // height="783"
                  placeholder="blur"
                  className="rounded"
                />
                <p className="text-sm xs:text-base sm:text-lg ">
                  Nedenfor forsiden er det seksjon med verdier som scroller over
                  forsideseksjonen.
                </p>
              </div>
              <div className="flex flex-col gap-2 xs:gap-4">
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, (max-width: 1536px) 50vw, 33vw"
                  src={monnImage3}
                  alt="Bildet viser en nyhets seksjon."
                  // width="1448"
                  // height="783"
                  placeholder="blur"
                  className="rounded"
                />
                <p className="text-sm xs:text-base sm:text-lg ">
                  En nyhets seksjon som automatisk viser de ferskeste nyhetene.
                  Nyhetene blir hentet på serveren og sendt til brukeren. Per nå
                  henter den bare de siste blog innleggene.
                </p>
              </div>
              <div className="flex flex-col gap-2 xs:gap-4">
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, (max-width: 1536px) 50vw, 33vw"
                  src={monnImage4}
                  alt="bilde av hjemesiden til semesteroppgaven"
                  // width="1448"
                  // height="783"
                  placeholder="blur"
                  className="rounded"
                />
                <p className="text-sm xs:text-base sm:text-lg ">
                  Prosjektet har et blog system som bruker Next.js sitt SSG
                  system.
                </p>
              </div>
            </>
          }
        />
        <Card
          title="Semesteroppgave i web- og systemutvikling"
          description="En semesteroppgave i faget web- og systemutvikling."
          tags={["Javascript", "CSS", "HTML"]}
          github="https://github.com/201549BL/semester-oppgave"
          link="https://sweet-melba-39fb82.netlify.app/"
          popoverContent={
            <>
              <div className="flex flex-col gap-2 xs:gap-4">
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, (max-width: 1536px) 50vw, 33vw"
                  src={semesterImage1}
                  alt="bilde av hjemesiden til semesteroppgaven"
                  // width="1448"
                  // height="783"
                  placeholder="blur"
                  className="rounded"
                />
                <p className="text-sm xs:text-base sm:text-lg">
                  Oppgavens mål er å fremvise fagets pensum i undersider.
                  Hovedsiden linker til hvert sitt underemne i faget.
                </p>
              </div>
              <div className="flex flex-col gap-2 xs:gap-4">
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, (max-width: 1536px) 50vw, 33vw"
                  src={semesterImage2}
                  alt="bilde av hjemesiden til semesteroppgaven"
                  // width="1448"
                  // height="783"
                  placeholder="blur"
                  className="rounded"
                />
                <p className="text-sm xs:text-base sm:text-lg ">
                  Alle undersidene har en sidebar for å navigere mellom hver
                  underside.
                </p>
              </div>
              <div className="flex flex-col gap-2 xs:gap-4">
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, (max-width: 1536px) 50vw, 33vw"
                  src={semesterImage3}
                  alt="bilde av hjemesiden til semesteroppgaven"
                  // width="1448"
                  // height="783"
                  placeholder="blur"
                  className="rounded"
                />
                <p className="text-sm xs:text-base sm:text-lg ">
                  Hver kilde i teksten tar deg til kildehenvisningen med med i
                  APA7 stil.
                </p>
              </div>
            </>
          }
        />
        <Card
          title="Videogame Bingo"
          description={
            <>
              Et flerspiller bingo brett med mål som må gjennomføres fra
              videospill. Dette er en klone av{" "}
              <ExternalLink style="borderless" href="https://bingosync.com/">
                Bingosync.com
              </ExternalLink>
              . Jeg lagde denne for å prøve meg på fullstack programmering.
            </>
          }
          tags={["Next.js", "Tailwind", "Express", "Socket.IO"]}
          github="https://github.com/201549BL/next-bingo-2"
          link="https://next-bingo-2.vercel.app"
          popoverContent={
            <>
              <div className="flex flex-col gap-2 xs:gap-4">
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, (max-width: 1536px) 50vw, 33vw"
                  src={bingoImage1}
                  alt="bilde av hjemesiden til semesteroppgaven"
                  width="1448"
                  height="783"
                  placeholder="blur"
                  className="rounded"
                />
                <p className="text-sm xs:text-base sm:text-lg ">
                  Hjem skjermen viser en liste over genererte rom og et skjema
                  for å genere et nytt. Rommene er passordbeskyttet.
                </p>
              </div>
              <div className="flex flex-col gap-2 xs:gap-4">
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, (max-width: 1536px) 50vw, 33vw"
                  src={bingoImage2}
                  alt="bilde av hjemesiden til semesteroppgaven"
                  width="1448"
                  height="783"
                  placeholder="blur"
                  className="rounded"
                />
                <p className="text-sm xs:text-base sm:text-lg ">
                  Du kan markere elementene du har fullført. Endringene på
                  brettet er synlig for alle spillere i nåtid og chat feeden
                  loggfører endringen.
                </p>
              </div>
            </>
          }
        />
        <Card
          title="Landing page"
          description={
            <>
              Et enkelt prosjekt for å øve meg på React. En simpel landing page
              med en CTA, et registreringsskjema til nyhetsbrev og info.
            </>
          }
          tags={["React", "Styled components"]}
          github="https://github.com/201549BL/landing-page"
          link="https://celadon-marshmallow-611ade.netlify.app/"
          popoverContent={
            <>
              <div className="flex flex-col gap-2 xs:gap-4">
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, (max-width: 1536px) 50vw, 33vw"
                  src={landingImage1}
                  alt="bilde av hjemesiden til semesteroppgaven"
                  placeholder="blur"
                  className="rounded"
                />
                <p className="text-sm xs:text-base sm:text-lg ">
                  En CTA øverst på siden.
                </p>
              </div>
              <div className="flex flex-col gap-2 xs:gap-4">
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, (max-width: 1536px) 50vw, 33vw"
                  src={landingImage2}
                  alt="bilde av hjemesiden til semesteroppgaven"
                  placeholder="blur"
                  className="rounded"
                />
                <p className="text-sm xs:text-base sm:text-lg ">
                  En komponent som viser statistikk.
                </p>
              </div>
              <div className="flex flex-col gap-2 xs:gap-4">
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, (max-width: 1536px) 50vw, 33vw"
                  src={landingImage3}
                  alt="bilde av hjemesiden til semesteroppgaven"
                  placeholder="blur"
                  className="rounded"
                />
                <p className="text-sm xs:text-base sm:text-lg ">
                  Et registreringsskjema for nyhetsbrev. Det gir feedback i form
                  av varsler øverst til venstre på skjermen dersom
                  registreringen var godkjent eller feilet.
                </p>
              </div>
              <div className="flex flex-col gap-2 xs:gap-4">
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, (max-width: 1536px) 50vw, 33vw"
                  src={landingImage4}
                  alt="bilde av hjemesiden til semesteroppgaven"
                  placeholder="blur"
                  className="rounded"
                />
                <p className="text-sm xs:text-base sm:text-lg ">
                  En komponent som viser ulike priser og produkter.
                </p>
              </div>
            </>
          }
        ></Card>
        <HorizontalLine className=" max-w-screen-lg mx-auto" />
      </div>
    </div>
  );
}
