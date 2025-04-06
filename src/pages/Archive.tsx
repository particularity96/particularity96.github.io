import React, { useState, useRef, useEffect } from "react";
import '../pages/Archive.css';

import ImageChor from "../assets/images/choir-23.jpg";
import ImageConZert from "../assets/images/ConZert.png";
import ImageCypher from "../assets/images/Cypher.png";
import ImageAbbe from "../assets/images/Abbe.png";
import ImageRise from "../assets/images/Rise.jpg";
import ImageSolo from "../assets/images/DSC_0079.jpg";
import ImageMushu from "../assets/images/Mushu.png";

import ImageSturm from "../assets/images/sturm/Sturm_Screenshot.png";
import ImageOMH from "../assets/images/OMH2.jpg";
import ImageLila from "../assets/images/Lila2.jpg";
import ImageCAT from "../assets/images/childandthetree-poster.jpg";
import ImageScherben from "../assets/images/scherben.jpg";
import ImageJeanny from "../assets/images/Jeanny.png";
import ImageDONA from "../assets/images/steampunkopera-poster.jpg";
import ImageLaika from "../assets/images/laika/Laika-title.jpg"

import ImageCB from "../assets/images/curse-broom-screenshot.png";
import ImageMM from "../assets/images/screenshot-music-master.png";
import ImageER from "../assets/images/bg_main_2.jpeg";
import ImageSalz from "../assets/images/Salzsammler.jpg";
import ImageBL24 from "../assets/images/BL24.png";
import ImageBL21 from "../assets/images/BL21.png";
import ImageNash from "../assets/images/Nash.jpg";
import ImageQMT from "../assets/images/QMusikTheater.jpg";
import ImageManic from "../assets/images/MANIC_Logo_Hintergrund_lang_bunt_schwarz.png";
import ImageMOOC from "../assets/images/MOOC.png";
import ImageCKS from "../assets/images/CKS.png";
import ImageMoment from "../assets/images/Der-Moment.png";
import ImageMupa from "../assets/images/mupa.jpg";
import ImageTaC from "../assets/images/tac_logo.png";
import ImageIKM from "../assets/images/IKM.png";
import ImageNachtschatten from "../assets/images/Nachtschatten.png";
import ImageDC from "../assets/images/digitaler_campus_logo_schwarz-13.png";



interface ArchiveItem {
    title: string;
    description: string;
    category: string;
    year: number;
    imageUrl: string;
    link?: string;
} 

const archiveData: ArchiveItem[] = [

    // Konzert
    {
        title: "Unichor Bayreuth",
        description: "Als Chorleiter* des Unichor Bayreuth leitete ich von 2022 bis 2024 im Rahmen eines Lehrauftrages der Universität wöchentlich Proben im Audimax. Der Chor umfasst etwa 120 Sängerinnen und Sänger, die gemeinsam 1-2 Konzerte pro Semester veranstalten.Dazu kommen vereinzelte Flashmobs und Einlagen. Neben dem Dirigat und der Probenleitung verfasse ich auch Arrangements und Kompositionen für den Chor.In Kooperationsprojekten dirigiere ich teilweise auch das Sinfonieorchester der Universität. Der Unichor Bayreuth hat 2023 den Klaus-Dieter-Wolf-Preis gewonnen.",
        category: "Konzert",
        year: 2024,
        imageUrl: ImageChor,
        link: "https://unichor-bayreuth.de/",
    },
    {
        title: "ConZert.",
        description: "Die ConZert-Reihe entstand während der Corona-Pandemie als Ersatz für Live-Veranstaltungen im Rahmen des von mir organisierten Campus Kultur Semesters. Mit Jonas Würdinger am Klavier und später Elena Arnold als Duett- Partnerin spielten wir zahlreiche Musical - und Pop - Songs im Livestream.",
        category: "Konzert",
        year: 2020,
        imageUrl: ImageConZert,
        link: "https://youtu.be/IHtJsVR0md0"
    },
    {
        title: "Fabians Cypher",
        description: "Als Antwort auf den Track von Peter Collins 'König des Nordens' veröffentlichte ich den Acapella-Song 'Besser später als Peter'. Seitdem erschien eine Antwort mit dem Titel 'Nic, lass es sein!'. ",
        category: "Konzert",
        year: 2020,
        imageUrl: ImageCypher,
        link: "https://youtu.be/SgmtLCYcLy0"
    },
    {
        title: "Rise",
        description: "'Rise' war mein erstes Album. Alles auf dem Album ist von mir selbst komponiert, getextet, gesungen, gespielt, aufgenommen, bearbeitet und produziert. Ich spiele in den Aufnahmen unter anderem Klavier, Schlagzeug, Gitarre und Ukulele.",
        category: "Konzert",
        year: 2011,
        imageUrl: ImageRise,
        link: "https://www.amazon.com/Rise-Nic-Alex/dp/B00N4XHGBQ"
    },
    {
        title: "Abbe Lewis",
        description: "Etwa zwei Jahre lang begleitete ich Abbe Lewis als Percussionist*, Schlagzeuger* und Backup-Sänger*. Mit dem Ensemble traten wir in zahlreichen Bars in Budapest auf und nahmen das Musikvideo 'Honey Please' auf.",
        category: "Konzert",
        year: 2014,
        imageUrl: ImageAbbe,
        link: "https://www.youtube.com/watch?v=ovfjy1xVmGc"
    },
    {
        title: "Mushu",
        description: "Mushu begleitete ich etwa drei Jahre als Percussionist*, Backup-Sänger* und mit diversen zusätzlichen Instrumenten wie Blockflöte oder Keyboard. Wir traten unter anderem im Hard Rock Cafe Budapest auf und nahmen eine Akustik-Version von Mushu's Eurovision-Beitrag 'Uncle Tom' auf.",
        category: "Konzert",
        year: 2013,
        imageUrl: ImageMushu,
        link: "https://youtu.be/PekrjWqNoFQ?si=Q6Kt_7C1cV_suUah"
    },
    {
        title: "Solistische Auftritte",
        description: "Als Songwriter, Sänger* und Multi-Instrumentalist* trat ich bei zahlreichen Events auf. Von Hochzeiten, über Firmen-Veranstaltungen bis hin zu Straßenmusik sammelte ich verschiedenste Erfahrungswerte. Einige nennenswerte Auftritte sind mein Auftritt beim Deutschen Wirtschaftsclub im Vigado Budapest, mein eigens für den All Nations Lions Club geschriebener und aufgeführter Song 'I'm a Lion', mehrere Auftritte beim Bosch Family Day in Hatvan mit einigen tausend Menschen im Publikum und mein Auftritt für die Deutsche Botschaft Budapest.",
        category: "Konzert",
        year: 2011,
        imageUrl: ImageSolo,
    },


    // Musical
    {
        title: "Im Auge des Sturms",
        description: "Eine Gruppe Jugendlicher sucht in einer Kirche Schutz vor dem draußen tobenden Sturm. Sie leben dort teilweise schon seit langer Zeit, abgeschottet von der Außenwelt. Als Neuankömmling Lila dazustößt, wird die Gruppendynamik aufgewirbelt ... Dieses neue, etwa 110-minütige Musical erzählt eine bewegende Geschichte über Akzeptanz und Gemeinschaft und verarbeitet dabei Themen wie Queerness, Identität, Freundschaft und Heimat.",
        category: "Musical",
        year: 2026,
        imageUrl: ImageSturm,
        link: "#/musical",
    },
    {
        title: "O MY HEART",
        description: "Dieses von der Regisseurin Annabell Strobel entwickelte Jukebox-Musical mit Songs der Band 'Mother Mother' setzt sich mit der Beziehung zweier Queerer Charaktere auseinander. Neben der Musikalischen Leitung war ich auch für das Arrangement und Percussion/Schlagzeug zuständig.",
        category: "Musical",
        year: 2022,
        imageUrl: ImageOMH,
    },
    {
        title: "LiLa",
        description: "Das Projekt LiLa hat angefangen als eine Sammlung einiger meiner Songs zum Thema Heimat und Melancholie. Mit der Regie von Jonas Würdinger und Donata Hörr entstand daraus bald ein buntes und atmosphärisches Stück, das mehrere Medienwechsel durchlaufen hat. Meine Arbeitsbereiche waren Komposition, Arrangement, Aufnahmeleitung, Gesang und Mix/ Master. Das sehr experimentelle Stück hat sich unter anderem bereits mit Figuren und Motiven beschäftigt, die in meinem Musical 'Im Auge des Sturms' vorkommen.",
        category: "Musical",
        year: 2020,
        imageUrl: ImageLila,
    },
    {
        title: "The Child And The Tree",
        description: "Ein Mädchen freundet sich mit einem magischen Baum an und erlebt fantastische Abenteuer. Dieses Familien-Musical verarbeitete allerdings auch ernstere Themen wie Flucht, Vertreibung, Krieg und Verlust. Das Musical wurde im Laufe dieser Erst-Produktion komponiert von Alex Panayi. Der Text stammt von Stavros Stavrou. Als Musikalische Assistenz von Alex Panayi war ich von der Komposition und Entwicklung bis zur Bühne an allen Enden beteiligt.Meine Ideen in Musik und Story wurden mehrfach direkt umgesetzt, teilweise als zentrale Elemente.Außerdem konnte ich die Noten setzen, einzelne Proben leiten, korrepetieren, die Vokal- Bearbeitungen für das Album vornehmen und als Darsteller mitspielen und - singen.",
        category: "Musical",
        year: 2020,
        imageUrl: ImageCAT,
        link: "https://silverspotlight.net/"
    },
    {
        title: "Scherben",
        description: "Das Live-Hörspiel Scherben setzt sich mit den Themen Depression und Freundschaft auseinander. In diesem sehr intensiven Stück begleiten wir vier Freunde in einer Psychatrie, die gemeinsam lernen, mit ihren psychischen Erkrankungen umzugehen und sich gegenseitig zu stützen. Die Probenarbeit bestand zum größten Teil darin, das Ensemble zu einer intensiven Gemeinschaft zu bringen.Nur dadurch war es möglich, auch intensive Szenen über Verlust und Suizid darzustellen. An dem Stück war ich als Autor* und Regisseur* beteiligt.Das Stück ist geprägt von akustischer Immersion, die durch zahlreiche live- Effekte hervorgerufen wird.",
        category: "Musical",
        year: 2019,
        imageUrl: ImageScherben,
        link: "#/musical",
    },
    {
        title: "Jeanny",
        description: "In diesem vom Regisseur selbst entwickelten Stück mit Songs von Falco konnte ich als musikalischer Leiter und Arrangeur ein Ensemble von 10 MusikerInnen anleiten und die Stücke in stark entfremdeter Form mit ihnen einstudieren. Eine besondere Herausforderung war das Einstudieren meiner Version von 'Rock Me Amadeus' im 7 / 8 - Takt und der Umgang mit einer sehr heterogenen Besetzung.",
        category: "Musical",
        year: 2019,
        imageUrl: ImageJeanny,
    },
    {
        title: "The Dolls Of New Albion",
        description: "Die Bayreuther Version der 'Steampunk Opera' entstand in Kooperation mit Jonas Würdinger. Neben seiner Regie entwickelte ich als musikalische Leitung ein völlig neues akustisches Arrangement des Musicals von Paul Shapera. Mit einem Ensemble von 8 MusikerInnen und einem von mir selbst entworfenen Percussion-Instrument aus Metallschrott führten wir eine der erfolgreichsten Fassungen des Stückes bisher auf.",
        category: "Musical",
        year: 2017,
        imageUrl: ImageDONA,
        link: "https://youtu.be/R5mPqAAqEng?si=FKCIA6TxMsMxS72E"
    },
    {
        title: "Laika",
        description: "Mein erstes eigenes Musical 'Laika' wurde an der Deutschen Schule Budapest uraufgeführt. Bei der Produktion war ich außerdem die musikalische Leitung, Pianist, Regisseur und Darsteller. Das Stück behandelt Themen wie Mobbing, Ausgrenzung und Diversität. Seit der Budapester Produktion wurde das auch Stück an weiteren Orten aufgeführt. Aufgrund seiner thematischen Relevanz, flexiblen Besetzung und einfacher Ausstattung ist das Stück besonders gut geeignet für Schulen.",
        category: "Musical",
        year: 2014,
        imageUrl: ImageLaika,
        link: "#/musical",
    },

    // Medien
    {
        title: "Music Master",
        description: "Music Master ist eine Anwendung, die mithilfe von Eye-Tracking-Daten und der automatischen emotionalen Analyse von Text musikalische Parameter vorkomponierter Musik anpassen kann, um die Lese-Erfahrung zu bereichern. Das Projekt ist aktuell in Entwicklung.",
        category: "Medien",
        year: 2025,
        imageUrl: ImageMM,
    },
    {
        title: "Energy Racer",
        description: "Die Restauration und Ausarbeitung eines Klima-Spiels für Schüler*innen in der Engine Godot.",
        category: "Medien",
        year: 2025,
        imageUrl: ImageER,
    },
    {
        title: "Cursed Broom",
        description: "Bei diesem 2D Plattformer muss die Spielerin im Celeste-Stil schwierige Herausforderungen meistern, um herauszufinden was es mit der Hexenstadt auf sich hat. Begleitet wird das Spiel durch einen von mir komponierten dynamischen Soundtrack, der auf Spielsituationen reagiert. Als Audio Director bin ich für Komposition, Produktion und Implementierung der Musik und SFX zuständig. Außerdem bin ich Producer des Spiels. Das Projekt wird gefördert vom FFF Bayern.",
        category: "Medien",
        year: 2024,
        imageUrl: ImageCB,
        link: "#/games",
    },
    {
        title: "Salzsammler",
        description: "Diese Spielidee entstand in Kooperation mit dem Welterbe Regensburg. Kinder und Jugendliche die das Welterbe besuchen, können hierbei ein auf den Boden projiziertes Spielfeld betreten, auf dem eine Abbildung der Stadt Regensburg und der donau im mittelalterlichen Kartenstil zu sehen ist. Dort können sie durch Kamera-Tracking mit Schiffen interagieren und sie an die korrekten Anlegestellen leiten. Meine Aufgaben sind Game/Interaction Design und Co-Producing. Das Projekt wird gefördert vom FFF Bayern und erhielt bereits zahlreiche Auszeichnungen und Ehrungen, wie etwa den GamesPreis 2024.",
        category: "Medien",
        year: 2024,
        imageUrl: ImageSalz,
        link: "#/games",
    },
    {
        title: "Nash Harding",
        description: "Bei dem Musikvideo für Paul Shaperas 'Nash Harding' war ich als Produzent* verantwortlich für das Projektmanagement und die Kommunikation.",
        category: "Medien",
        year: 2023,
        imageUrl: ImageNash,
        link: "https://youtu.be/xykwLH86M4I?si=q0ED88miothwNR6T"
    },
    {
        title: "BücherLaden Walldürn Spot",
        description: "Für den Kino-Spot des BücherLaden Walldürn habe ich 2021 die Musik produziert und aufgenommen. Außerdem habe ich den Jingle neu arrangiert.",
        category: "Medien",
        year: 2021,
        imageUrl: ImageBL21,
        link: "https://www.youtube.com/watch?v=G2YQU-QsPgc&ab_channel=B%C3%BCcherLadenWalld%C3%BCrn"
    },
    {
        title: "BücherLaden Walldürn Spots",
        description: "Für mehrere neue Kino-Spots des BücherLaden Walldürn durfte ich 2024 eine Komposition und Sound-Kulisse entwerfen, aufnehmen und produzieren.",
        category: "Medien",
        year: 2024,
        imageUrl: ImageBL24,
    },
    {
        title: "Der Moment",
        description: "'Der Moment'' ist ein Kurzfilm von Jessica Layher und Linda Kieckbusch. Gemeinsam mit Jonas Würdinger komponierte ich die Filmmusik. Mit einer sehr außergewöhnlichen Besetzung von Klavier, Harfe, Cembalo, Orgel, Drehleiher und Blockflöte mikrofonierten wir einen ganzen Raum und als Musikalischer Leiter und Aufnahmeleiter führte ich das Ensemble durch die Live-Aufnahme.",
        category: "Medien",
        year: 2019,
        imageUrl: ImageMoment,
        link: "https://www.instagram.com/dermomentfilm/"
    },


    // Sonstige
    {
        title: "Kulturpolitische Arbeit",
        description: "Meine politische Arbeit begann mit der Co-Vorstandschaft und Neu-Konzeption des Arbeitskreises 'Theater am Campus' in Bayreuth. In den folgenden Jahren wirkte ich u.a. als Sprecherrat für Kultur, Chancengleichheit und Campusgestaltung des Studierendenwerks in der Kulturvertretung der Studierenden mit. Dabei organisierte ich u.a. die Campus Kultur Woche, eine Woche mit über 50 Veranstaltungen, die aufgrund der Pandemie auf ein Semester ausgedehnt und digitalisiert wurde. Später engagierte ich mich dann weiter im studentischen Theaterverein 'Schaulust e.V.' als Mitglied des Vergabegremiums. In Kooperation mit der Stadt Bayreuth, dem Kulturamt, dem Kulturreferenten, dem Studentenwerk und der Universität konnten wir zahlreiche Mittel einwerben, die technische Ausstattung des Theaterraums verbessern, Strukturen und eine universitäre Teilzeit- Stelle schaffen, die vom freien Regisseur Daniel Schauf besetzt wurde.",
        category: "Sonstige",
        year: 2016,
        imageUrl: ImageTaC,
        link: "https://theateramcampus.com/"
    },
    {
        title: "Manic Creative GbR",
        description: "Anfang 2021 war ich als Gesellschafter* an der Firmengründung von 'Manic Creative' beteiligt. Manic war eine Kreativagentur, die Künstler*innen mit kleinen Unternehmen Vermittelte und größere Projekte in Grafikdesign, Animation, Marketing, Jingle-Produktion und Workshop-Gestaltung organisierte.",
        category: "Sonstige",
        year: 2021,
        imageUrl: ImageManic,
    },
    {
        title: "Biofabrication MOOC",
        description: "Als Schauspieler* arbeitete ich mit der Universität Bayreuth an dem eigens produzierten 'Biofabrication MOOC' (Massive Open Online Course) für die Plattform EdX. Es war meine Aufgabe, auf englisch komplexe biologische Vorgänge zu erklären und als Charakter 'Paul' die Studierenden durch die Videoserie zu begleiten. Der Kurs wurde nominiert für den edX Prize 2022.",
        category: "Sonstige",
        year: 2020,
        imageUrl: ImageMOOC,
        link: "https://www.edx.org/learn/biomaterials/university-of-bayreuth-biomaterials-and-biofabrication-design-engineering-and-innovation"
    },
    {
        title: "Workshopleitung",
        description: "In zahlreichen universitären und außer-universitären Projekten konnte ich über mehrere Jahre hinweg das Leiten von Workshops im Musik-, Theater- und Musicalbereich erlenen. Dabei arbeitete ich sowohl mit Kindern und Jugendlichen als auch mit Erwachsenen verschiedener Erfahrungsgrade. Ich war unter anderem zwei Jahre lang als studentische Hilfskraft für das Interkulturelle Musizieren in Bayreuth tätig, wo ich ebenfalls Proben leitete und für die Sichtung von Material verantwortlich war.",
        category: "Sonstige",
        year: 2016,
        imageUrl: ImageIKM,
    },
    {
        title: "Campus Kultur Semester",
        description: "Im Rahmen meiner kulturpolitischen Arbeit an der Universität Bayreuth organisierte ich u.a. die Campus Kultur Woche, eine Woche mit über 50 Veranstaltungen, die aufgrund der Pandemie auf ein Semester ausgedehnt und digitalisiert wurde.",
        category: "Sonstige",
        year: 2020,
        imageUrl: ImageCKS,
        link: "https://www.instagram.com/campuskultur.bayreuth/"
    },
    {
        title: "UBT Digitaler Campus",
        description: "Als die Pandemie begann, waren Gesellschaft und kultureller Austausch ein rares Gut. Um dem entgegenzuwirken, schuf ich im Rahmen meiner Position im Studierendenparlament den 'Digitalen Campus UBT'. Einen Discord-Server, der binnen weniger Tage auf über 1200 Mitglieder wuchs, und sowohl während der Pandemie als auch darüber hinaus ein wichtiger Knotenpunkt der Kommunikation für Studierende und Initiativen war.",
        category: "Sonstige",
        year: 2020,
        imageUrl: ImageDC,
        link: "https://www.studienberatung.uni-bayreuth.de/de/studienstart/Tipps-zum-digitalen-Studieren/Kontakte-knuepfen-und-Ankommen/index.html"
    },
    {
        title: "Förderverein Queeres Musiktheater e.V.",
        description: "Zur Förderung neuer queerer und feministischer Musiktheater- und Musical-Formate gründete ich 2024 den Förderverein Queeres Musiktheater e.V., in dem ich den 1. Vorstand besetze.",
        category: "Sonstige",
        year: 2024,
        imageUrl: ImageQMT,
        link: "https://queeres-musiktheater.de/"
    },
    {
        title: "Schauspiel (Film)",
        description: "Als Schauspieler* wirkte ich bei zahlreichen Kurzfilmprojekten und Musikvideos mit. Dazu gehören u.a. 'Berge aus Fleisch', 'Das S in Weihnachten', 'Nachtschatten', 'Eure Masche zieht nicht' von Fabian Merks sowie 'Time's Mixtape' und 'Was dich bewegt' von Peter Collin.",
        category: "Sonstige",
        year: 2016,
        imageUrl: ImageNachtschatten,
        link: "https://youtu.be/JYeM9dBoBbY?si=MQjZqUSQChb1JSMK"
    },
    {
        title: "MüPa Budapest",
        description: "Im MüPa (Palast der Künste) Budapest erhielt ich als Produktionsassistenz von Dora Somogyi Zugang zum gesamten Haus und allen Veranstaltungen. Ich betreute internationale KünstlerInnen und wurde vereinzelt als Regieassistenz, Requisiten-Assistenz und Bühnenhandwerks-Assistenz eingesetzt. In diesem Zeitraum wurden zahlreiche Opern, Theaterstücke und Zirkusproduktionen aufgeführt und das WOMEX- Festival abgehalten, an dem ich intensiv mitwirken durfte.",
        category: "Sonstige",
        year: 2014,
        imageUrl: ImageMupa,
        link: "https://mupa.hu/en"
    },

    
];

const categories = ["Alle", "Konzert", "Musical", "Medien", "Sonstige"];

const categoryColors: { [key: string]: string } = {
    Konzert: "concert",
    Musical: "musical",
    Medien: "media",
    Sonstige: "other",
};

const ArchiveGrid: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("Alle");
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const filteredItems = archiveData.filter(
        (item) => selectedCategory === "Alle" || item.category === selectedCategory
    );

    const toggleItemExpansion = (index: number) => {
        if (expandedIndex === index) {
            // If the clicked item is already expanded, collapse it
            setExpandedIndex(null);
        } else {
            // Otherwise, expand the clicked item and collapse others
            setExpandedIndex(index);
        }
    };

    const handleCategoryChange = (category: string) => {
        // When the category changes, reset the expanded index
        setSelectedCategory(category);
        setExpandedIndex(null); // Collapse all items when changing categories
    };

    return (
        <div className="archive-container">
            <div className="archive-filters">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={selectedCategory === category ? "active" : ""}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="archive-grid">
                {filteredItems
                    .sort((a, b) => b.year - a.year)
                    .map((item, index) => (
                        <div
                            key={item.title}
                            className={`archive-item ${categoryColors[item.category] || ""} ${expandedIndex === index ? "expanded" : ""
                                }`}
                            ref={(el) => {
                                itemRefs.current[index] = el;
                            }}
                        >
                            {/* Make the whole item except the button clickable */}
                            <a href={item.link} className="archive-link" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="archive-image"
                                />
                                <div className="archive-info">
                                    <h3>{item.title} ({item.year})</h3>
                                    <p>
                                        {expandedIndex === index
                                            ? item.description
                                            : item.description.slice(0, 100) + "..."}
                                    </p>
                                </div>
                            </a>

                            {/* The button is now separate, and does not trigger the link */}
                            <button
                                className="expand-button"
                                onClick={() => toggleItemExpansion(index)}
                            >
                                {expandedIndex === index ? "Weniger anzeigen" : "Mehr anzeigen"}
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ArchiveGrid;




