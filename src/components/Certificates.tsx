import { certificates } from "~/content/certificates";

import Section from "./Section";

const Certificates = () => {
  return (
    <Section title="Certificates">
      {certificates.map((cert) => (
        <li
          key={cert.name}
          className="text-xs print:text-sm text-gray-600 w-40"
        >
          {cert.name} <i className="text-gray-500">({cert.year})</i>
        </li>
      ))}
    </Section>
  );
};

export default Certificates;
