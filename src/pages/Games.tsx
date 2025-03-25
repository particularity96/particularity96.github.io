import React from 'react';
import YouTubeEmbed from "../components/YouTubeEmbed"
import Showcase from "../components/Showcase"
import bgImageSalzsammler from "../assets/images/Salzsammler.jpg"
import bgImageCB from "../assets/images/curse-broom-screenshot.png"
import bgImageItch from "../assets/images/screenshot-itch.png"
import bgImageMM from "../assets/images/screenshot-music-master.png"
import bgImageSphaerophon from "../assets/images/screenshot-sphaerophon.png"


const Games: React.FC = () => {
    return (
        <div>

            <Showcase
                title="Intellumia"
                subtitle="Interaktive Bodenprojektionen"
                description="Intellumia entwickelt interaktive Bodenprojektionen für Bildungseinrichtungen und Museen. Unsere Installation 'Salzsammler' entsteht gemeinsam mit dem UNESCO Besucherzentrum Welterbe Regensburg. Weitere Projekte umfassen das Klima-Spiel 'Energy Racer' sowie das Musiktheorie-Lernspiel 'Music Particles'."
                backgroundImage={bgImageSalzsammler}
                buttonText="Mehr Infos"
                buttonLink="https://www.salzsammler.de"
            />
            <YouTubeEmbed
                youtubeId="_pMCzDzWwfA"
                title="My Awesome Game"
            />
            <div className="divider"></div>
            <Showcase
                title="Cursed Broom"
                subtitle="2D-Platformer"
                description="Fliege mit Maya durch diesen charmanten 2D Platformer! Finde einen Weg durch die verschiedenen Ebenen von Mayas Heimatstadt, sammle Artefakte um neue Fähigkeiten zu erlangen und erlebe eine herzerwärmende Geschichte über Selbstfindung und Freundschaft."
                backgroundImage={bgImageCB}
                buttonText="Steam"
                buttonLink="https://store.steampowered.com/app/1823030/Cursed_Broom/"
            />
            <YouTubeEmbed
                youtubeId="EU-POBMh15I"
                title="My Awesome Game"
            />
            <div className="divider"></div>
            <Showcase
                title="Music Master"
                subtitle="Intelligente, adaptive Musik beim Lesen"
                description="Music Master ist eine Anwendung, die mithilfe von Eye-Tracking-Daten und der automatischen emotionalen Analyse von Text musikalische Parameter vorkomponierter Musik anpassen kann, um die Lese-Erfahrung zu bereichern."
                backgroundImage={bgImageMM}
            />
            <div className="divider"></div>

            <Showcase
                title="Sphaerophon"
                subtitle="Ein neues XR-Instrument"
                description="Gemeinsam mit Jonas Würdinger und Nadine Jachmann entstand ein virtuelles Instrument, etwa vergleichbar mit einem Theremin, das durch die Bewegung im Raum und bestimmte Handbewegungen gespielt werden kann. Das Instrument ist für die Hololens entwickelt."
                backgroundImage={bgImageSphaerophon}
            />
            <div className="divider"></div>

            <Showcase
                title="Kleine Spielprojekte"
                subtitle="Auf Itch.io"
                description="Im Rahmen von GameJams habe ich inzwischen bei einigen kleineren Spielprojekten mitgewirkt. Diese sind hier zu finden."
                backgroundImage={bgImageItch}
                buttonText="Itch.io"
                buttonLink="https://particularity.itch.io/"
            />
        </div>
    );
};

export default Games;
