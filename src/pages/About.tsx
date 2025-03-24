import React, { useEffect, useState } from "react";
import profilePic from "../assets/images/nic/Chor24-3-cropped.jpg";

const About: React.FC = () => {

    return (
        <div className="about-container">
            {/* Bio Section with Image */}
            <img src={profilePic} alt="Nic" className="profile-pic" />
            <section className="bio-section">
                
                <div className="bio-text">
                    <h1>Nic Schilling</h1>
                    <p>
                        Nic Schilling wurde am 05.10.1996 in Buchen (Odenwald) geboren. Nach zahlreichen Umzügen und einer größtenteils autodidaktischen musikalischen Bildung produzierte dey mit 16 Jahren deren erstes eigenes Pop-Album Rise.<br />
                        Im Alter von 17 Jahren komponierte Nic deren erstes Musiktheaterstück Laika, ein Jugendmusical. Dieses wurde in der Deutschen Schule Budapest im Jahr 2014 unter deren Leitung zur Aufführung gebracht. Nach dem Abitur verbrachte dey ein Jahr als Produktions- und Regieassistenz im Palast der Künste (MüPa) Budapest.<br />
                        Nic erlangte 2021 an der Universität Bayreuth einen Bachelor of Arts im Fach Musiktheaterwissenschaft und absolvierte zeitgleich im Rahmen eines Gaststudiums die C-Prüfung im Fach Chorleitung an der Hochschule für evangelische Kirchenmusik Bayreuth. Seit 2021 studiert dey an der Universität im Master Computerspielwissenschaft M.Sc.<br />
                        Neben diversen kompositorischen Arbeiten schrieb und inszenierte Nic auch das Live-Hörspiel Scherben, komponierte das Musical 'Im Auge des Sturms' und leitete verschiedene studentische Musiktheater-Produktionen. 2019 verbrachte dey vier Monate in Nicosia auf Zypern, wo dey als Musikalische Assistenz von Alex Panayi die Komposition und Uraufführung des Musicals Το παιδί και το δέντρο begleitete. Seit Beginn des Master-Studiums arbeitet dey vermehrt an dynamischer Musikproduktion für Spiele und leitet den Unichor Bayreuth.<br />
                        Anfang 2023 gründete Nic die beiden Spielestudios 'Cursed Creations' und 'Salzsammler Studios'. Die Projekte der Studios, 'Cursed Broom' und 'Salzsammler', werden beide gefördert vom FFF Bayern.<br />
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;