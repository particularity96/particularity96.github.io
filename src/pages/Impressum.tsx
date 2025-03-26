import React from "react";

const Impressum: React.FC = () => {
    return (
        <div className="impressum-page">
            <h1>Impressum</h1>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
                <strong>Nic Schilling</strong><br />
                Neufeldstr. 6<br />
                81243 München<br />
                <strong>Kontakt:</strong><br />
                Telefon: 0176 24071386<br />
                E-Mail: <a href="mailto:nic.schilling96@gmail.com">nic.schilling96@gmail.com</a><br />
                <br />
                <strong>Verantwortlich für den Inhalt:</strong><br />
                Nic Schilling<br />
                <br />
                <strong>Haftungshinweis:</strong><br />
                Wir übernehmen keinerlei Verantwortung oder Haftung für die Angaben auf dieser Webseite. Unser Ziel ist es, aktuelle und genaue Informationen bereitzustellen. Allerdings kann nicht garantiert werden, dass die auf dieser Webseite verfügbaren Angaben tatsächlich aktuell, umfassend, komplett oder genau sind. Bei den bereitgestellten Informationen handelt es sich um solche allgemeiner Art, die nicht auf die besonderen Bedürfnisse bestimmter Personen oder Unternehmen abgestimmt sind. Insbesondere soll durch sie keine Beratung erfolgen. Sofern von dieser Webseite auf andere Webseiten verwiesen wird, können wir deren Inhalt nicht beeinflussen und für diesen auch keine Verantwortung übernehmen.
            </p>
        </div>
    );
};

export default Impressum;

