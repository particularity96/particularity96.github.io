import React, { useState } from "react";
import '../pages/Archive.css';

import sturmImage from "../assets/images/sturm/Sturm_Screenshot.png";
import OMHImage from "../assets/images/OMH2.jpg";
import LilaImage from "../assets/images/Lila2.jpg";


import CBImage from "../assets/images/curse-broom-screenshot.png";


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
        description: "Als Chorleiter* des Unichor Bayreuth leite ich im Rahmen eines Lehrauftrages der Universität wöchentlich Proben im Audimax.Der Chor umfasst etwa 120 Sängerinnen und Sänger, die gemeinsam 1-2 Konzerte pro Semester veranstalten.Dazu kommen vereinzelte Flashmobs und Einlagen.Neben dem Dirigat und der Probenleitung verfasse ich auch Arrangements und Kompositionen für den Chor.In Kooperationsprojekten dirigiere ich teilweise auch das Sinfonieorchester der Universität.Der Unichor Bayreuth hat 2023 den Klaus- Dieter - Wolf - Preis gewonnen.",
        category: "Konzert",
        year: 2024,
        imageUrl: sturmImage,
        link: "#/choir",
    },
    {
        title: "ConZert.",
        description: "Die ConZert-Reihe entstand während der Corona-Pandemie als Ersatz für Live-Veranstaltungen im Rahmen des von mir organisierten Campus Kultur Semesters. Mit Jonas Würdinger am Klavier und später Elena Arnold als Duett- Partnerin spielten wir zahlreiche Musical - und Pop - Songs im Livestream.",
        category: "Konzert",
        year: 2020,
        imageUrl: sturmImage,
    },
    {
        title: "Fabians Cypher",
        description: "Als Antwort auf den Track von Peter Collins 'König des Nordens' veröffentlichte ich den Acapella-Song 'Besser später als Peter'. Seitdem erschien eine Antwort mit dem Titel 'Nic, lass es sein!'. ",
        category: "Konzert",
        year: 2020,
        imageUrl: sturmImage,
    },
    {
        title: "Rise",
        description: "'Rise' war mein erstes Album. Ich sammelte meine besten Songs und begann, sie selbstständig aufzunehmen. Alles auf dem Album ist von mir selbst komponiert, getextet, gesungen, gespielt, aufgenommen, bearbeitet und produziert. Im Album spiele ich unter anderem Klavier, Schlagzeug, Gitarre und Ukulele.",
        category: "Konzert",
        year: 2011,
        imageUrl: sturmImage,
    },
    {
        title: "Abbe Lewis",
        description: "Etwa zwei Jahre lang begleitete ich Abbe Lewis als Percussionist*, Schlagzeuger* und Backup-Sänger*. Mit dem Ensemble traten wir in zahlreichen Bars in Budapest auf und nahmen das Musikvideo 'Honey Please' auf.",
        category: "Konzert",
        year: 2014,
        imageUrl: sturmImage,
    },
    {
        title: "Mushu",
        description: "Mushu begleitete ich etwa drei Jahre als Percussionist*, Backup-Sänger* und mit diversen zusätzlichen Instrumenten wie Blockflöte oder Keyboard. Wir traten unter anderem im Hard Rock Cafe Budapest auf und nahmen eine Akustik-Version von Mushu's Eurovision-Beitrag 'Uncle Tom' auf.",
        category: "Konzert",
        year: 2013,
        imageUrl: sturmImage,
    },
    {
        title: "Solistische Auftritte",
        description: "Als Songwriter, Sänger* und Multi-Instrumentalist* trat ich bei zahlreichen Events auf. Von Hochzeiten, über Firmen-Veranstaltungen bis hin zu Straßenmusik sammelte ich verschiedenste Erfahrungswerte. Einige nennenswerte Auftritte sind mein Auftritt beim Deutschen Wirtschaftsclub im Vigado Budapest, mein eigens für den All Nations Lions Club geschriebener und aufgeführter Song 'I'm a Lion', mehrere Auftritte beim Bosch Family Day in Hatvan mit einigen tausend Menschen im Publikum und mein Auftritt für die Deutsche Botschaft Budapest.",
        category: "Konzert",
        year: 2011,
        imageUrl: sturmImage,
    },


    // Musical
    {
        title: "Im Auge des Sturms",
        description: "Eine Gruppe Jugendlicher sucht in einer Kirche Schutz vor dem draußen tobenden Sturm. Sie leben dort teilweise schon seit langer Zeit, abgeschottet von der Außenwelt. Als Neuankömmling Lila dazustößt, wird die Gruppendynamik aufgewirbelt ... Dieses neue, etwa 110-minütige Musical erzählt eine bewegende Geschichte über Akzeptanz und Gemeinschaft und verarbeitet dabei Themen wie Queerness, Identität, Freundschaft und Heimat.",
        category: "Musical",
        year: 2026,
        imageUrl: sturmImage,
        link: "#/musical",
    },
    {
        title: "O my heart",
        description: "Dieses von der Regisseurin Annabell Strobel entwickelte Jukebox-Musical mit Songs der Band 'Mother Mother' setzt sich mit der Beziehung zweier Queerer Charaktere auseinander. Neben der Musikalischen Leitung war ich auch für das Arrangement und Percussion/Schlagzeug zuständig.",
        category: "Musical",
        year: 2022,
        imageUrl: OMHImage,
    },
    {
        title: "LiLa",
        description: "Das Projekt LiLa hat angefangen als eine Sammlung einiger meiner Songs zum Thema Heimat und Melancholie. Mit der Regie von Jonas Würdinger und Donata Hörr entstand daraus bald ein buntes und atmosphärisches Stück, das mehrere Medienwechsel durchlaufen hat. Meine Arbeitsbereiche waren Komposition, Arrangement, Aufnahmeleitung, Gesang und Mix/ Master. Das sehr experimentelle Stück hat sich unter anderem bereits mit Figuren und Motiven beschäftigt, die in meinem Musical 'Im Auge des Sturms' vorkommen.",
        category: "Musical",
        year: 2020,
        imageUrl: LilaImage,
    },
    {
        title: "The Child And The Tree",
        description: "Ein Mädchen freundet sich mit einem magischen Baum an und erlebt fantastische Abenteuer. Dieses Familien-Musical verarbeitete allerdings auch ernstere Themen wie Flucht, Vertreibung, Krieg und Verlust. Das Musical wurde im Laufe dieser Erst-Produktion komponiert von Alex Panayi. Der Text stammt von Stavros Stavrou. Als Musikalische Assistenz von Alex Panayi war ich von der Komposition und Entwicklung bis zur Bühne an allen Enden beteiligt.Meine Ideen in Musik und Story wurden mehrfach direkt umgesetzt, teilweise als zentrale Elemente.Außerdem konnte ich die Noten setzen, einzelne Proben leiten, korrepetieren, die Vokal- Bearbeitungen für das Album vornehmen und als Darsteller mitspielen und - singen.",
        category: "Musical",
        year: 2020,
        imageUrl: LilaImage,
    },
    {
        title: "Scherben",
        description: "Das Live-Hörspiel Scherben setzt sich mit den Themen Depression und Freundschaft auseinander. In diesem sehr intensiven Stück begleiten wir vier Freunde in einer Psychatrie, die gemeinsam lernen, mit ihren psychischen Erkrankungen umzugehen und sich gegenseitig zu stützen. Die Probenarbeit bestand zum größten Teil darin, das Ensemble zu einer intensiven Gemeinschaft zu bringen.Nur dadurch war es möglich, auch intensive Szenen über Verlust und Suizid darzustellen. An dem Stück war ich als Autor* und Regisseur* beteiligt.Das Stück ist geprägt von akustischer Immersion, die durch zahlreiche live- Effekte hervorgerufen wird.",
        category: "Musical",
        year: 2019,
        imageUrl: LilaImage,
    },
    {
        title: "Jeanny",
        description: "In diesem vom Regisseur selbst entwickelten Stück mit Songs von Falco konnte ich als musikalischer Leiter und Arrangeur ein Ensemble von 10 MusikerInnen anleiten und die Stücke in stark entfremdeter Form mit ihnen einstudieren. Eine besondere Herausforderung war das Einstudieren meiner Version von 'Rock Me Amadeus' im 7 / 8 - Takt und der Umgang mit einer sehr heterogenen Besetzung.",
        category: "Musical",
        year: 2019,
        imageUrl: LilaImage,
    },
    {
        title: "The Dolls Of New Albion",
        description: "Die Bayreuther Version der 'Steampunk Opera' entstand in Kooperation mit Jonas Würdinger. Neben seiner Regie entwickelte ich als musikalische Leitung ein völlig neues akustisches Arrangement des Musicals von Paul Shapera. Mit einem Ensemble von 8 MusikerInnen und einem von mir selbst entworfenen Percussion-Instrument aus Metallschrott führten wir eine der erfolgreichsten Fassungen des Stückes bisher auf.",
        category: "Musical",
        year: 2017,
        imageUrl: LilaImage,
    },
    {
        title: "Laika",
        description: "Mein erstes eigenes Musical 'Laika' wurde an der Deutschen Schule Budapest uraufgeführt. Bei der Produktion war ich außerdem die musikalische Leitung, Pianist, Regisseur und Darsteller. Das Stück behandelt Themen wie Mobbing, Ausgrenzung und Diversität. Seit der Budapester Produktion wurde das auch Stück an weiteren Orten aufgeführt. Aufgrund seiner thematischen Relevanz, flexiblen Besetzung und einfacher Ausstattung ist das Stück besonders gut geeignet für Schulen.",
        category: "Musical",
        year: 2015,
        imageUrl: LilaImage,
    },

    // Medien
    {
        title: "Energy Racer",
        description: "Die Restauration und Ausarbeitung eines Klima-Spiels für Schüler*innen in Godot.",
        category: "Medien",
        year: 2025,
        imageUrl: CBImage,
    },
    {
        title: "Cursed Broom",
        description: "Bei diesem 2D Plattformer muss die Spielerin im Celeste-Stil schwierige Herausforderungen meistern, um herauszufinden was es mit der Hexenstadt auf sich hat. Begleitet wird das Spiel durch einen von mir komponierten dynamischen Soundtrack, der auf Spielsituationen reagiert. Als Audio Director bin ich für Komposition, Produktion und Implementierung der Musik und SFX zuständig. Außerdem bin ich Producer des Spiels. Das Projekt wird gefördert vom FFF Bayern.",
        category: "Medien",
        year: 2024,
        imageUrl: CBImage,
    },
    {
        title: "Salzsammler",
        description: "Diese Spielidee entstand in Kooperation mit dem Welterbe Regensburg. Kinder und Jugendliche die das Welterbe besuchen, können hierbei ein auf den Boden projiziertes Spielfeld betreten, auf dem eine Abbildung der Stadt Regensburg und der donau im mittelalterlichen Kartenstil zu sehen ist. Dort können sie durch Kamera-Tracking mit Schiffen interagieren und sie an die korrekten Anlegestellen leiten. Meine Aufgaben sind Game/Interaction Design und Co-Producing. Das Projekt wird gefördert vom FFF Bayern und erhielt bereits zahlreiche Auszeichnungen und Ehrungen, wie etwa den GamesPreis 2024.",
        category: "Medien",
        year: 2024,
        imageUrl: CBImage,
    },
    {
        title: "Zurück in die Kuh-Zunft",
        description: "Die kleine Kuh Fleckchen ist in eine Zeitmaschine gefallen. Jetzt muss ihre Familie versuchen, mit Fleckchens Hilfe aus der Vergangenheit Brücken zu bauen und die Zeitmaschine wieder zusammen zu setzen. Dieses Brettspiel für Familien und Kinder entstand beim Franken Game Jam 2022. Das gesamte Spiel kann heruntergeladen und kann mithilfe von Druckern (2D und optional 3D) zuhause selbst ausgedruckt und gespielt werden. Meine Aufgaben waren Game Design und 3D-Design.",
        category: "Medien",
        year: 2022,
        imageUrl: CBImage,
    },
    {
        title: "Space Flower",
        description: "Ein 2D Pathfinding-Spiel über das Wachsen. Für dieses Spiel, welches bei einem Game Jam 2021 entstand, habe ich den soundtrack komponiert und SFX produziert.",
        category: "Medien",
        year: 2021,
        imageUrl: CBImage,
    },
    {
        title: "Nash Harding",
        description: "Bei dem Musikvideo für Paul Shaperas 'Nash Harding' war ich als Produzent* verantwortlich für das Projektmanagement und die Kommunikation.",
        category: "Medien",
        year: 2023,
        imageUrl: CBImage,
    },
    {
        title: "BücherLaden Walldürn Spot",
        description: "Für den Kino-Spot des BücherLaden Walldürn habe ich 2021 die Musik produziert und aufgenommen. Außerdem habe ich den Jingle neu arrangiert.",
        category: "Medien",
        year: 2021,
        imageUrl: CBImage,
        link: "https://www.youtube.com/watch?v=G2YQU-QsPgc&ab_channel=B%C3%BCcherLadenWalld%C3%BCrn"
    },
    {
        title: "BücherLaden Walldürn Spots",
        description: "Für mehrere neue Kino-Spots des BücherLaden Walldürn durfte ich 2024 eine Komposition und Sound-Kulisse entwerfen, aufnehmen und produzieren.",
        category: "Medien",
        year: 2024,
        imageUrl: CBImage,
    },
    {
        title: "Der Moment",
        description: "'Der Moment'' ist ein Kurzfilm von Jessica Layher und Linda Kieckbusch. Gemeinsam mit Jonas Würdinger komponierte ich die Filmmusik. Mit einer sehr außergewöhnlichen Besetzung von Klavier, Harfe, Cembalo, Orgel, Drehleiher und Blockflöte mikrofonierten wir einen ganzen Raum und als Musikalischer Leiter und Aufnahmeleiter führte ich das Ensemble durch die Live-Aufnahme.",
        category: "Medien",
        year: 2019,
        imageUrl: CBImage,
        link: "https://www.instagram.com/dermomentfilm/"
    },


    // Sonstige
    {
        title: "Manic Creative GbR",
        description: "Anfang 2021 war ich als Gesellschafter* an der Firmengründung von 'Manic Creative' beteiligt. Manic war eine Kreativagentur, die Künstler*innen mit kleinen Unternehmen Vermittelte und größere Projekte in Grafikdesign, Animation, Marketing, Jingle-Produktion und Workshop-Gestaltung organisierte.",
        category: "Sonstige",
        year: 2021,
        imageUrl: CBImage,
    },
    {
        title: "Biofabrication MOOC",
        description: "Als Schauspieler* arbeitete ich mit der Universität Bayreuth an dem eigens produzierten 'Biofabrication MOOC' (Massive Open Online Course) für die Plattform EdX. Es war meine Aufgabe, auf englisch komplexe biologische Vorgänge zu erklären und als Charakter 'Paul' die Studierenden durch die Videoserie zu begleiten. Der Kurs wurde nominiert für den edX Prize 2022.",
        category: "Sonstige",
        year: 2020,
        imageUrl: CBImage,
        link: "https://www.edx.org/learn/biomaterials/university-of-bayreuth-biomaterials-and-biofabrication-design-engineering-and-innovation"
    },
    {
        title: "Workshopleitung",
        description: "In zahlreichen universitären und außer-universitären Projekten konnte ich über mehrere Jahre hinweg das Leiten von Workshops im Musik-, Theater- und Musicalbereich erlenen. Dabei arbeitete ich sowohl mit Kindern und Jugendlichen als auch mit Erwachsenen verschiedener Erfahrungsgrade. Ich war unter anderem zwei Jahre lang als studentische Hilfskraft für das Interkulturelle Musizieren in Bayreuth tätig, wo ich ebenfalls Proben leitete und für die Sichtung von Material verantwortlich war.",
        category: "Sonstige",
        year: 2016,
        imageUrl: CBImage,
    },
    
];

const categories = ["Alle", "Konzert", "Musical", "Medien", "Sonstige"];

const categoryColors: { [key: string]: string } = {
    Konzert: "concert",  // matches 'Konzert'
    Musical: "musical",  // matches 'Musical'
    Medien: "media",     // matches 'Medien'
    Sonstige: "other",
};


const ArchiveGrid: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("Alle");

    const filteredItems = archiveData.filter(
        (item) => selectedCategory === "Alle" || item.category === selectedCategory
    );

    return (
        <div className="archive-container">
            <div className="archive-filters">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={
                            selectedCategory === category ? "active" : ""
                        }
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="archive-grid">
                {filteredItems
                    .sort((a, b) => b.year - a.year)
                    .map((item) => (
                        <div
                            key={item.title}
                            className={`archive-item ${categoryColors[item.category] || ""}`}
                        >
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="archive-image"
                            />
                            <div className="archive-info">
                                <h3>{item.title} ({item.year})</h3>
                                <p>{item.description}</p>
                                {item.link && <a href={item.link}>Mehr erfahren</a>}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ArchiveGrid;
