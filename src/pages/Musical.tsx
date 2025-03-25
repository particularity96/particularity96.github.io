import React from 'react';
import MusicalShowcase from "../components/MusicalShowcase";
import bgImageSturm from "../assets/images/sturm/Sturm_Screenshot.png"
import bgImageLaika from "../assets/images/Laika.jpg"
import bgImageScherben from "../assets/images/scherben.jpg"
import MediaCard from "../components/MediaCard"

import song1Image from "../assets/images/album-cover/Album_Cover_Still.png";
import song2Image from "../assets/images/album-cover/Album_Cover_Farewell.png";
import song3Image from "../assets/images/album-cover/Album_Cover_Farewell.png";

import song1Audio from "../assets/audio/Still-live.mp3";
import song2Audio from "../assets/audio/Sandburgen.mp3";
import song3Audio from "../assets/audio/Farewell to a dying star.mp3";

const mediaItems1 = [
    { title: "Still - Live", image: song1Image, audio: song1Audio, text: "Unichor Bayreuth" },
    { title: "Von Sehnsucht und Sandburgen", image: song2Image, audio: song2Audio, text: "Ein Stück über das älter werden, über Vertrautheit, und über das Abschied nehmen. (S: Annabell Strobel / A: Nina Pesch)" },
    { title: "Farewell to a Dying Star", image: song3Image, audio: song3Audio, text: "Inspiriert von dem Gedicht 'Do not go gentle into that good night' von Dylan Thomas. Zwei Sterne stehen seit Jahrmillionen nebeneinander am Nachthimmel. Während der eine verglüht, singt ihm der andere dieses Abschiedslied. (S/A: Annabell Strobel)" },
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
                </div>
                <MusicalShowcase
                    title="Laika"
                    subtitle="Jugend - Musical"
                    description="Laika ist anders als ihre Mitschülerinnen. Sie hört Musik, egal wohin sie geht. Wenn ihre Klasse und auch ihr Lehrer anfangen, sie dafür auszugrenzen, überschlagen sich die Ereignisse. Das Musical behandelt Themen wie Mobbing, Ausgrenzung und Diversität. Es wurde bereits mehrfach aufgeführt. Aufgrund seiner thematischen Relevanz, flexiblen Besetzung und einfacher Ausstattung ist das Stück besonders gut für Schulen geeignet."
                    backgroundImage={bgImageLaika}
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
                </div>
                <MusicalShowcase
                    title="Scherben"
                    subtitle="Live-Hörspiel (Schauspiel)"
                    description="Das etwa 60-minütige Live-Hörspiel Scherben setzt sich mit dem Thema Depression und Freundschaft auseinander. In diesem sehr intensiven Stück begleiten wir vier Freunde in einer Psychiatrie, die gemeinsam lernen, mit ihren psychischen Erkrankungen umzugehen und sich gegenseitig zu unterstützen. Emotionale Höhepunkte werden nicht mit Musik untermalt, sondern mit Geräuschkulissen und Gedichten vertont."
                    backgroundImage={bgImageScherben}
                />
            </div>
        </div>
    );
};

export default Musicals;
