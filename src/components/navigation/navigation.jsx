import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("about");

  // List of section IDs to observe
  const sectionIds = ["about", "projects", "techstack", "contact"];

  useEffect(() => {
    const options = {
      root: null, // relative to the viewport
      rootMargin: "0px",
      threshold: 0.6, // 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, options);

    // Observe each section
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="fixed z-50 right-5 text-center font-nunito_sans font-bold text-[#c4a977]">
      <ul>
        {sectionIds.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`hover:text-gray-300 ${
                activeLink === id ? "text-[#8e6e35]" : ""
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
