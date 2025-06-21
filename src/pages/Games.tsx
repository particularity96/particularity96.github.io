import React from 'react';
import YouTubeEmbed from "../components/YouTubeEmbed"
import Showcase from "../components/Showcase"
import bgImageSalzsammler from "../assets/images/Salzsammler.jpg"
import bgImageCB from "../assets/images/curse-broom-screenshot.png"
import bgImageItch from "../assets/images/screenshot-itch.png"
import bgImageMM from "../assets/images/screenshot-music-master.png"
import bgImageSphaerophon from "../assets/images/sphaerophon-original.jpg"


const Games: React.FC = () => {
    return (
        <div>

            <Showcase
                title="Salzsammler"
                subtitle="Interaktive Bodenprojektionen"
                description="Salzsammler entwickelt interaktive Bodenprojektionen für Bildungseinrichtungen und Museen. Unsere namensgebende Installation entsteht gemeinsam mit dem UNESCO Besucherzentrum Welterbe Regensburg. Salzsammler gewann im Jahr 2024 den Games Preis, erhielt eine 'special Mention' beim Dok.Digital und wurde für das NewImagesFestival ausgewählt. Weitere Projekte umfassen das Klima-Spiel 'Energy Racer' sowie das Musiktheorie-Lernspiel 'Music Particles'."
                backgroundImage={bgImageSalzsammler}
                buttonText="Mehr Infos"
                buttonLink="https://www.salzsammler.de"
            />
            <YouTubeEmbed
                youtubeId="0PwrLX29h6Q"
                title="Salzsammler Trailer"
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
                title="Cursed Broom Trailer"
            />
            <div className="divider"></div>
            <Showcase
                title="Sphaerophon"
                subtitle="Ein XR-Instrument"
                description="Sphaerophon ist ein virtuelles Instrument für die Hololens.Es wurde 2023 an der Universität Bayreuth von Nadine Jachmann, Jonas Würdinger und mir entwickelt. Das Sphaerophon ist vergleichbar mit einem digitalen Theremin, das durch die Bewegung von Sphären im Raum und bestimmte Handbewegungen gespielt werden kann."
                backgroundImage={bgImageSphaerophon}
            />
            <YouTubeEmbed
                youtubeId="0ZekT3jNAWU"
                title="Sphaerophon Trailer"
            />
            
            <div className="divider"></div>
            <Showcase
                title="Music Master"
                subtitle="Intelligente, adaptive Musik beim Lesen"
                description="Music Master ist eine Anwendung, die mithilfe von Eye-Tracking-Daten und der automatischen emotionalen Analyse von Text musikalische Parameter vorkomponierter Musik anpassen kann, um die Lese-Erfahrung zu bereichern. Das Projekt ist aktuell in Entwicklung."
                backgroundImage={bgImageMM}
            />
            <div className="divider"></div>
            <Showcase
                title="Spielprojekte"
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
