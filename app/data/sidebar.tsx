function calculateAge() {
    const BIRTHDAY = new Date('2001-05-09');
    const ageDifMs = Date.now() - BIRTHDAY.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const sidebarData = {
    name: 'Jérémie Barrière',
    job: 'Développeur Full Stack',
    age: `${calculateAge()} ans`,
    location: 'Yerres, 91330',
    enterprise: 'SNCF Réseau',
    school: 'EFREI Paris',
    languages: ['🇬🇧 Anglais B2 (TOEIC 900)', '🇩🇪 Allemand B1'],
    links: [
        {
            name: 'GitHub',
            href: 'https://github.com/StarlingSG1',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="group"><path className="group-hover:fill-[#F8937C]" fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path></svg>
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jeremie-barriere/',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 20 20" className="group"><path className="group-hover:fill-[#F8937C]" fill="currentColor" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z" /></svg>
        }
    ]

}