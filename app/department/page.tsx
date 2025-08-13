import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS } from "../../utils/constants/animations";
import TabContentSystem from "../components/TabContentSystem";

export default function Department() {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN}>
                <section className="relative bg-cover bg-center py-20 md:py-32" style={{ backgroundImage: 'url("/hero_section.png")' }}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                        <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN}>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Ministry of Labour and Employment<br />
                                Departments & Agencies
                            </h1>
                        </AnimatedEntrance>
                    </div>
                </section>
            </AnimatedEntrance>

            {/* Main Content Section with Tab System */}
            <TabContentSystem 
                sidebarTitle="Our Departments"
                tabs={[
                    {
                        id: "employment-job-creation",
                        label: "Employment & Job Creation",
                        content: {
                            title: "Employment & Job Creation Department",
                            imageSrc: "/photos/employment-job-creation - Ministry of Labour and Employment.webp",
                            imageAlt: "Employment & Job Creation Department",
                            description: "The Employment & Job Creation Department is at the forefront of our mission to reduce unemployment in Imo State. We design and implement employment policies, job placement services, and public work schemes while fostering partnerships with private employers. Our department manages the Imo Jobs Portal, coordinates the SkillUp Imo employment programs, and links citizens with MSME and startup opportunities. We work closely with local businesses, educational institutions, and development partners to create sustainable employment opportunities across all sectors of the economy.",
                            additionalInfo: [
                                "Manages job portals and career centers",
                                "Coordinates SkillUp Imo employment programs",
                                "Links citizens to MSME and startup opportunities"
                            ]
                        }
                    },
                    {
                        id: "labour-relations",
                        label: "Labour Relations",
                        content: {
                            title: "Labour Relations & Dispute Resolution Department",
                            imageSrc: "/photos/labour-relations - Ministry of Labour and Employment.png",
                            imageAlt: "Labour Relations & Dispute Resolution Department",
                            description: "The Labour Relations & Dispute Resolution Department is dedicated to maintaining industrial harmony and protecting workers' rights across Imo State. We oversee industrial relations, enforce workplace rights, and mediate conflicts between employers and employees. Our team works closely with trade unions, employer associations, and government agencies to ensure compliance with labour laws and promote fair labor practices. We provide advisory services, conduct workplace inspections, and facilitate dialogue to prevent and resolve industrial disputes.",
                            additionalInfo: [
                                "Mediates and resolves labour disputes through conciliation and arbitration",
                                "Ensures compliance with labour laws and international labour standards",
                                "Conducts trade union registration and recognition processes",
                                "Organizes tripartite consultations between government, employers, and workers"
                            ]
                        }
                    },
                    {
                        id: "skills-development",
                        label: "Skills Development",
                        content: {
                            title: "Skills Development & Training Department",
                            imageSrc: "/photos/skills-development - Ministry of Labour and Employment.jpg",
                            imageAlt: "Skills Development & Training Department",
                            description: "The Skills Development & Training Department is committed to equipping Imo State's workforce with relevant skills for the modern economy. We design and implement vocational training programs, technical education initiatives, and apprenticeship schemes that align with current labor market demands. Our department oversees the SkillUp Imo program, which provides digital and technical training to youth across the state. We collaborate with industry partners, technical colleges, and training providers to ensure our programs deliver practical, job-ready skills that lead to sustainable employment and entrepreneurship opportunities.",
                            additionalInfo: [
                                "Coordinates the SkillUp Imo digital and vocational training programs",
                                "Manages the network of vocational training centers across the state",
                                "Develops competency-based training curricula in partnership with industry",
                                "Oversees the accreditation and certification of training providers",
                                "Organizes skills competitions and exhibitions to showcase local talent"
                            ]
                        }
                    },
                    {
                        id: "labour-inspectorate",
                        label: "Labour Inspectorate",
                        content: {
                            title: "Labour Inspectorate & Compliance Department",
                            imageSrc: "/photos/labour-inspectorate - Ministry of Labour and Employment.jpg",
                            imageAlt: "Labour Inspectorate & Compliance Department",
                            description: "The Labour Inspectorate & Compliance Department is responsible for enforcing labour laws and ensuring safe working conditions across all sectors in Imo State. Our team of qualified inspectors conducts regular workplace inspections to verify compliance with occupational health and safety standards, minimum wage regulations, and other labor laws. We investigate complaints from workers, monitor working conditions, and take appropriate enforcement actions when violations are found. Our goal is to promote decent work and protect the rights and welfare of all workers while supporting businesses in maintaining fair labor practices.",
                            additionalInfo: [
                                "Conducts routine and complaint-based workplace inspections",
                                "Ensures compliance with minimum wage and other employment standards",
                                "Investigates cases of workplace accidents and industrial diseases",
                                "Provides advisory services to employers on labor law compliance",
                                "Maintains a database of workplace safety records and violations"
                            ]
                        }
                    },
                    {
                        id: "women-youth-empowerment",
                        label: "Women & Youth",
                        content: {
                            title: "Women & Youth Empowerment Department",
                            imageSrc: "/photos/women-youth-empowerment - Ministry of Labour and Employment.webp",
                            imageAlt: "Women & Youth Empowerment Department",
                            description: "The Women & Youth Empowerment Department is dedicated to creating equal opportunities and fostering the economic inclusion of women, youth, and other vulnerable groups in Imo State. We design and implement targeted programs that address the unique challenges faced by these groups in the labor market. Our initiatives include skills acquisition programs, entrepreneurship development, access to microcredit facilities, and mentorship opportunities. We collaborate with NGOs, financial institutions, and private sector partners to create pathways to economic independence and leadership development for women and youth across the state.",
                            additionalInfo: [
                                "Implements gender-sensitive employment and empowerment programs",
                                "Facilitates access to startup capital and business development services",
                                "Organizes capacity-building workshops on entrepreneurship and leadership",
                                "Coordinates the Imo Youth Employment and Social Support Operation (YESSO)",
                                "Partners with financial institutions to provide soft loans to women and youth entrepreneurs"
                            ]
                        }
                    }
                ]}
            />
        </div>
    );
}
