import StatisticsSection from "../../components/StatisticsSection";
import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { PROJECTS_STATISTICS } from "../../utils/constants/statistics";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";
import Image from "next/image";

// Special Projects
const SPECIAL_PROJECTS = [
    {
        number: 1,
        title: "SkillUp Imo (Labour Arm)",
        description: "Supporting the state's digital economy agenda, this program equips unemployed youth and job seekers with advanced digital, soft, and vocational skills including UI/UX design, web development, and digital marketing.",
        location: "Statewide",
        category: "Skills Development",
        status: "Ongoing",
        partners: "State Government, Private Sector"
    },
    {
        number: 2,
        title: "MSME Employment Initiative",
        description: "A job facilitation program connecting micro and small businesses with trained job seekers to reduce unemployment while providing microgrants to MSMEs that hire Imo youth.",
        location: "Statewide",
        category: "Employment Generation",
        status: "Ongoing",
        partners: "Imo SME Agency, National Directorate of Employment (NDE)"
    },
    {
        number: 3,
        title: "Labour Market Information System (LMIS)",
        description: "Building a digital labour data hub to analyze and visualize employment trends, featuring registration portals for employers and employees along with real-time vacancy and trend analytics.",
        location: "Statewide",
        category: "Digital Transformation",
        status: "In Development",
        partners: "Technology Partners, Research Institutions"
    },
    {
        number: 4,
        title: "Cooperative Labour Scheme",
        description: "Organizing artisans, traders, and skilled youth under labour-backed cooperative projects to boost employment and productivity through registered cooperatives and access to microcredit.",
        location: "Statewide",
        category: "Cooperative Development",
        status: "Piloting",
        partners: "State Cooperatives Bank, Artisan Groups"
    },
    {
        number: 5,
        title: "Industrial Relations Reform Program",
        description: "Enhancing workplace safety, workers' rights education, and employer-union harmony across public and private sectors through labour town halls and legal aid services.",
        location: "Statewide",
        category: "Workplace Relations",
        status: "Active – Phase II",
        partners: "Labour Unions, Employer Associations"
    }
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.PROJECTS} />

            {/* Statistics Section */}
            <StatisticsSection statistics={PROJECTS_STATISTICS} className="bg-white" />
            
            {/* Projects Description */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Key Initiatives</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Ministry of Labour and Employment is committed to implementing impactful programs that drive employment, 
                            skills development, and workplace harmony across Imo State. Our initiatives focus on empowering the workforce, 
                            supporting businesses, and creating an enabling environment for decent work and economic growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SPECIAL_PROJECTS.map((project, index) => {
                            // const IconComponent = PROJECT_ICONS[project.number as keyof typeof PROJECT_ICONS];
                            return (
                                <AnimatedEntrance 
                                    key={project.number} 
                                    {...ANIMATION_PRESETS.CARD_FADE_UP} 
                                    delay={STAGGER_DELAYS.MEDIUM[index % STAGGER_DELAYS.MEDIUM.length]}
                                >
                                    <div className="bg-white border border-gray-200 h-full rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                                        <div className="h-48 bg-green-50 flex items-center justify-center overflow-hidden">
                                            <Image
                                                src={'/assets/no-image-lg.jpg'}
                                                alt={project.title}
                                                width={400}
                                                height={200}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                                {project.title}
                                            </h3>
                                            <div className="space-y-3 text-sm">
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-gray-600">Category</span>
                                                    <span className="text-gray-900 text-right">{project.category}</span>
                                                </div>
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-gray-600">Status</span>
                                                    <span className={`font-medium text-right ${
                                                        project.status === "Active" ? "text-blue-600" :
                                                        project.status === "In Progress" ? "text-yellow-600" :
                                                        project.status === "Completed" ? "text-green-600" :
                                                        project.status === "Ongoing" ? "text-orange-600" : ""
                                                    }`}>{project.status}</span>
                                                </div>
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-gray-600">Partners</span>
                                                    <span className="text-gray-900 text-right">{project.partners}</span>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                                                {project.description}
                                            </p>
                                            <div className="flex items-center mt-4 text-green-600 text-sm">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                {project.location}
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedEntrance>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Strategic Goals Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Strategic Objectives</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Ministry of Labour and Employment is committed to these key objectives to drive employment, skills development, and workplace harmony in Imo State.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Reduce unemployment through targeted skills development and job creation initiatives.",
                            "Enhance the employability of Imo State's workforce through vocational and technical training programs.",
                            "Foster harmonious industrial relations through effective dispute resolution mechanisms.",
                            "Promote decent work standards and occupational safety across all sectors.",
                            "Support the growth and sustainability of micro, small and medium enterprises (MSMEs).",
                            "Strengthen labour market information systems for evidence-based policymaking.",
                            "Enhance productivity and competitiveness of the state's workforce.",
                            "Promote gender equality and social inclusion in employment opportunities.",
                            "Develop strategic partnerships with private sector and development partners.",
                            "Enhance the capacity of labour market institutions and stakeholders."
                        ].map((goal, index) => (
                            <AnimatedEntrance 
                                key={index} 
                                {...ANIMATION_PRESETS.CARD_FADE_UP} 
                                delay={0.1 * index}
                            >
                                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                        <span className="text-green-600 font-semibold">{index + 1}</span>
                                    </div>
                                    <p className="text-gray-700">{goal}</p>
                                </div>
                            </AnimatedEntrance>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
