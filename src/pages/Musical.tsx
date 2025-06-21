import React from 'react';
import MusicalShowcase from "../components/Showcase";
import bgImageSturm from "../assets/images/sturm/Sturm_Screenshot.png"
import bgImageLaika from "../assets/images/laika/Laika-title.jpg"
import bgImageScherben from "../assets/images/scherben.jpg"
import MediaCard from "../components/MediaCard"

import song1Image from "../assets/images/sturm/Ikarus2.png";
import song2Image from "../assets/images/sturm/Sturm_Screenshot.png";
import song3Image from "../assets/images/sturm/Amen.jpg";
import song4Image from "../assets/images/sturm/Amen.png";
import song5Image from "../assets/images/sturm/hourglass.jpg";
import song6Image from "../assets/images/sturm/Sturm_2.png";
import song7Image from "../assets/images/laika/IMG_4856-2.jpg";
import song8Image from "../assets/images/laika/Laika-title.jpg";
import song9Image from "../assets/images/laika/IMG_4870.jpg";

import song1Audio from "../assets/audio/Der Sturm - Ikarus.mp3";
import song2Audio from "../assets/audio/Der Sturm - Fledermäuse.mp3";
import song3Audio from "../assets/audio/Der Sturm - Jede Nacht.mp3";
import song4Audio from "../assets/audio/Schachfigur Mockup.mp3";
import song5Audio from "../assets/audio/Sturm - Die Legende Demo V 1.0.mp3";
import song6Audio from "../assets/audio/Sturm - Du (Nele + Meli).mp3";
import song7Audio from "../assets/audio/07 - Ich bin für dich da - Laika.mp3";
import song8Audio from "../assets/audio/11 - Freak - Laika.mp3";
import song9Audio from "../assets/audio/06 - Aufstehen - Laika.mp3";

const mediaItems1 = [
    { title: "Ikarus", image: song1Image, audio: song1Audio, text: "Trito hinterfragt nach einem sehr schief gelaufenen Outing deren eigene Kraft." },
    { title: "Fledermäuse", image: song2Image, audio: song2Audio, text: "Der Chor singt ein Lied über ihre Großeltern und die Zeit vor dem Sturm. Die Aufnahme ist eine solistische version." },
    { title: "Jede Nacht", image: song3Image, audio: song3Audio, text: "Der Chor läutet mit Trito an der Spitze das Musical ein. Das Stück soll vermitteln, wie sich die Jugendlichen in der Kirche fühlen und wie der Sturm sie bedrückt, es soll gleichzeitig aber auch zeigen, dass sie eine Gemeinschaft gefunden haben." },
];

const mediaItems2 = [
    { title: "Schachfigur", image: song4Image, audio: song4Audio, text: "Pepper versucht Tritos Verzweiflung besser zu verstehen. Nachdem sie vor Trito das Wort 'nichtbinär' erwähnt, versteht Trito, dass dey nichtbinär ist." },
    { title: "Die Legende", image: song5Image, audio: song5Audio, text: "Der Chor erzählt die Legende der Sanduhr." },
    { title: "Du", image: song6Image, audio: song6Audio, text: "Lila tröstet Pepper, und die beiden kommen sich näher. Lila: Michaela Thurner, Pepper: Nele Neugebauer" },
];

const mediaItems3 = [
    { title: "Ich bin für dich da", image: song7Image, audio: song7Audio, text: "Während Mona Laika versichert, dass sie in ihrer Geschichte nicht alleine ist, kann Laika Mona plötzlich sehen und die beiden singen ein Duett, obwohl Laika nur eine Figur in Monas Geschichte ist." },
    { title: "Freak", image: song8Image, audio: song8Audio, text: "Der Lehrer hetzt die ganze Klasse gegen Laika auf, weil sie anders ist als die anderen." },
    { title: "Aufstehen", image: song9Image, audio: song9Audio, text: "Laikas neue Freundin Amelie stellt sich gegen die Klasse und steht für Laika ein." },
];

const Musicals: React.FC = () => {
    return (
        <div>
            
            <div>
                <MusicalShowcase
                    title="Im Auge des Sturms"
                    subtitle="Coming of Age - Musical"
                    description="Eine Gruppe Jugendlicher sucht in einer Kirche Schutz vor dem draußen tobenden Sturm. Sie leben dort teilweise schon seit langer Zeit, abgeschottet von der Außenwelt. Als Neuankömmling Lila dazustößt, wird die Gruppendynamik aufgewirbelt ... 
                                Dieses neue, etwa 110-minütige Musical erzählt eine bewegende Geschichte über Akzeptanz und Gemeinschaft und verarbeitet dabei Themen wie Queerness, Identität, Freundschaft und Heimat."
                    backgroundImage={bgImageSturm}
                    buttonText="Mehr Infos & Tickets"
                    buttonLink="https://www.sturm-musical.de"
                />
                <div style={{ marginBottom: "30px" }}></div> 
                <div className="media-gallery">
                    <div className="media-grid">
                        {mediaItems1.map((item, index) => (
                            <MediaCard
                                key={index}
                                title={item.title}
                                text={item.text}
                                imageUrl={item.image}
                                audioSrc={item.audio}
                            />
                        ))}
                    </div>
                    <div className="media-grid">
                        {mediaItems2.map((item, index) => (
                            <MediaCard
                                key={index}
                                title={item.title}
                                text={item.text}
                                imageUrl={item.image}
                                audioSrc={item.audio}
                            />
                        ))}
                    </div>
                </div>
                <MusicalShowcase
                    title="Laika"
                    subtitle="Jugend - Musical"
                    description="Laika ist anders als ihre Mitschülerinnen. Sie hört Musik, egal wohin sie geht. Wenn ihre Klasse und auch ihr Lehrer anfangen, sie dafür auszugrenzen, überschlagen sich die Ereignisse. Das Musical behandelt Themen wie Mobbing, Ausgrenzung und Diversität. Es wurde bereits mehrfach aufgeführt. Aufgrund seiner thematischen Relevanz, flexiblen Besetzung und einfacher Ausstattung ist das Stück besonders gut für Schulen geeignet."
                    backgroundImage={bgImageLaika}
                    buttonText="Ich will das aufführen!"
                    buttonLink="#/contact"
                />
                <div style={{ marginBottom: "30px" }}></div> 
                <div className="media-gallery">
                    <div className="media-grid">
                        {mediaItems3.map((item, index) => (
                            <MediaCard
                                key={index}
                                title={item.title}
                                text={item.text}
                                imageUrl={item.image}
                                audioSrc={item.audio}
                            />
                        ))}
                    </div>
                </div>
                <MusicalShowcase
                    title="Scherben"
                    subtitle="Live-Hörspiel (Schauspiel)"
                    description="Das etwa 60-minütige Live-Hörspiel Scherben setzt sich mit dem Thema Depression und Freundschaft auseinander. In diesem sehr intensiven Stück begleiten wir vier Freunde in einer Psychiatrie, die gemeinsam lernen, mit ihren psychischen Erkrankungen umzugehen und sich gegenseitig zu unterstützen. Emotionale Höhepunkte werden nicht mit Musik untermalt, sondern mit Geräuschkulissen und Gedichten vertont. Die Aufnahme ist 2019 in Bayreuth entstanden."
                    backgroundImage={bgImageScherben}
                    buttonText="Aufnahme Soundcloud"
                    buttonLink="https://soundcloud.com/niclas-schilling-27768401/scherben"
                />
                {/* Link: https://soundcloud.com/niclas-schilling-27768401/scherben */}
            </div>
        </div>
    );
};

export default Musicals;
