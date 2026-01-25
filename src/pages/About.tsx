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
                        Nic Schilling ist Komponist:in, Interaction Designer:in und Musiktheaterschaffende:r mit einem interdisziplinären Ansatz zwischen Musik, Theater und digitalen Medien. Bereits mit 17 Jahren komponierte dey das Jugendmusical Laika, das 2014 in der Deutschen Schule Budapest unter deren eigener musikalischer Leitung uraufgeführt wurde. Nach einem Jahr der Regie- und Produktionshospitanz am Palast der Künste (MüPa) Budapest nahm dey ein Studium der Musiktheaterwissenschaft an der Universität Bayreuth auf und absolvierte parallel die C-Prüfung im Fach Chorleitung an der HfK Bayreuth. Dey leitete zahlreiche studentische Musiktheaterproduktionen, war als musikalische Assistenz an der Uraufführung des zypriotischen Musicals Το παιδί και το δέντρο (Musik A. Panayi) beteiligt und trug als Chorleitung zur Gründung des Unichor Bayreuth bei. Neben eigenen Theater- und Musiktheaterwerken komponierte dey zahlreiche Chor- und Orchesterstücke, die unter anderem im Theater des Westens Berlin, im Markgräflichen Opernhaus Bayreuth und auf der Luisenburg in Wunsiedel von unterschiedlichsten Ensembles aufgeführt wurden. Aktuell arbeitet dey als Komponist:in und Librettist:in an dem Musical Im Auge des Sturms (UA 2026). 2025 erlangte Nic Schilling einen Master in der Computerspielwissenschaft, mit einem Forschungsschwerpunkt auf der Verbindung von Musik und interaktiven Medien für Bildungszwecke. Nic gründete 2023 gemeinsam mit Ruben Schäfer das Unternehmen Salzsammler Studios, welches interaktive XR-Anwendungen für Museen und Bildungseinrichtungen entwickelt. Nic Schilling ist Gründungsmitglied und Vorsitzende:r des Förderverein Queeres Musiktheater e.V. <br />
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;