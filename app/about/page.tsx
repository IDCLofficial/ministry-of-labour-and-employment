import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.ABOUT} />

            {/* Ministry Overview Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP} className="order-2 lg:order-1">
                            <Image
                                src="/photos/Banner About - Ministry of Labour and Employment.jpg"
                                alt="Ministry of Labour and Employment - Empowering the Imo Workforce"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-shadow duration-300"
                            />
                        </AnimatedEntrance>
                        <div className="order-1 lg:order-2">
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={200}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                    The Ministry of Labour and Employment is committed to fostering decent work, skills development, and employment opportunities in Imo State. 
                                    We serve as the bridge between job seekers and employers while ensuring fair labor practices and industrial harmony across all sectors.
                                </p>
                            </AnimatedEntrance>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={400}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                    At the heart of Imo State&apos;s economic development is our commitment to nurturing, equipping, and empowering 
                                    every citizen with the tools for decent work, entrepreneurial success, and self-reliance. We develop and 
                                    implement inclusive policies that promote employment, protect workers&apos; rights, and support socio-economic 
                                    growth across all regions of Imo State.
                                </p>
                            </AnimatedEntrance>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={600}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    We are dedicated to creating a vibrant, skilled, and employed population that drives the prosperity and 
                                    productivity of Imo State. Through innovative programs like SkillUp Imo and strategic partnerships with 
                                    employers and training institutions, we&apos;re building a future where every citizen has access to meaningful 
                                    employment opportunities and fair working conditions.
                                </p>
                            </AnimatedEntrance>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision, Mission & Core Values Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900">Our Guiding Principles</h2>
                        <div className="mt-4 h-1 w-24 bg-green-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    A vibrant, skilled, and employed population that drives the prosperity and productivity
                                    of Imo State, where every citizen has access to decent work and fair employment opportunities.
                                </p>
                            </div>
                        </AnimatedEntrance>

                        {/* Mission Card */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    To develop and implement inclusive policies that promote decent employment, empower youths,
                                    and support socio-economic growth across Imo State.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Facilitate employment opportunities",
                                        "Promote industrial harmony",
                                        "Enhance skills development",
                                        "Ensure workplace safety"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            </div>
                                            <span className="text-gray-600 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedEntrance>
                    </div>

                    {/* Core Values */}
                    <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={STAGGER_DELAYS.MEDIUM[2]}>
                        <div className="mt-16">
                            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Core Values</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { title: "Workers' Dignity", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                                    { title: "Excellence", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                                    { title: "Social Justice", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3.9 4.4M12 6h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                                    { title: "Partnership", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }
                                ].map((value, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedEntrance>
                </div>
            </section>

            {/* Commissioner Profile Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Prof. Boniface G. Nworgu
                            </h2>
                            <p className="text-lg sm:text-xl text-green-600 font-semibold mb-4 sm:mb-6">
                                Honorable Commissioner for Labour and Employment
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                                Prof. Boniface G. Nworgu is an accomplished scholar, seasoned labour expert, and public administrator with over 30 years of
                                experience in education, labour policy, and human capital development. Before his appointment as Honourable Commissioner
                                for Labour and Employment, he served as a professor of educational measurement and evaluation and held leadership roles
                                in academic institutions, policy advisory boards, and national commissions.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                In a rapidly changing economy, our duty as a government is not only to create jobs but to prepare our people for the future of work.
                                At the Ministry of Labour and Employment, we believe in building strong institutions, promoting fair labour practices,
                                and equipping our workforce with the skills and confidence needed to thrive. Through strategic partnerships, reforms,
                                and impactful programs, we are laying the foundation for a more inclusive and productive Imo State.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2 aspect-[3.8/4]">
                            <Image
                                src="/photos/Prof. Boniface Ginikanwa Nworgu, ksc, fnae, fapqen, fiian,fsr, maeaa,miaea. Honourable Commissioner Ministry of Labour, Employment & Productivity.jpg"
                                alt="Prof. Boniface G. Nworgu - Honorable Commissioner"
                                width={500}
                                height={600}
                                className="rounded-lg shadow-lg w-full h-auto object-top object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Responsibilities Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Our Key Focus Areas
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Employment Generation */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Employment Generation
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Creating sustainable job opportunities through skills development, entrepreneurship support, and labor market interventions to reduce unemployment.
                            </p>
                        </div>

                        {/* Skills Development */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 11.5L4.5 9 12 4.5 19.5 9 12 14.5z" />
                                    <path d="M0 0h24v24H0z" fill="none" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Skills Development
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Providing vocational training and capacity building programs to enhance employability and entrepreneurship among Imo State&apos;s workforce.
                            </p>
                        </div>

                        {/* Workplace Safety & Compliance */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z" />
                                    <path d="M0 0h24v24H0z" fill="none" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Workplace Safety & Compliance
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Ensuring safe working conditions and compliance with labor laws to protect workers&apos; rights and promote occupational health and safety standards.
                            </p>
                        </div>

                        {/* Industrial Harmony & Dispute Resolution */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Industrial Harmony & Dispute Resolution
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Mediating labor disputes and fostering harmonious industrial relations between employers and employees for a stable workforce environment.
                            </p>
                        </div>

                        {/* Youth & Women Empowerment */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                                    <path d="M0 0h24v24H0z" fill="none" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Youth & Women Empowerment
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Creating opportunities and support systems for youth and women to participate meaningfully in the labor market and entrepreneurship.
                            </p>
                        </div>

                        {/* Labor Market Intelligence */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h6v-2h-4V7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Labor Market Intelligence
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Collecting and analyzing labor market data to inform policy decisions, identify skills gaps, and align training with industry needs.
                            </p>
                        </div>
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

            {/* Team Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Leadership Team</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Meet Prof. Boniface G. Nworgu and the dedicated team driving the Ministry of Labour and Employment&apos;s mission to empower the workforce of Imo State.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {/* Commissioner */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="aspect-[3.8/4] bg-gray-100 overflow-hidden">
                                <Image
                                    src="/photos/Prof. Boniface Ginikanwa Nworgu, ksc, fnae, fapqen, fiian,fsr, maeaa,miaea. Honourable Commissioner Ministry of Labour, Employment & Productivity.jpg"
                                    alt="Prof. Boniface G. Nworgu - Honorable Commissioner for Labour and Employment"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">Prof. Boniface G. Nworgu</h3>
                                <p className="text-green-700 font-medium mt-1">Honorable Commissioner for Labour and Employment</p>
                            </div>
                        </div>

                        {/* Permanent Secretary */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="aspect-[3.8/4] bg-gray-100 overflow-hidden">
                                <Image
                                    src="/photos/Dr Okeji Augustine Chidiebere.jpg"
                                    alt="Permanent Secretary - Ministry of Labour and Employment"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 capitalize">Dr OKEJI AUSTINE CHIDIEBERE</h3>
                                <p className="text-green-700 font-medium mt-1">Permanent Secretary</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Structure Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-900 grid-bg text-white">
                <div className="max-w-7xl mx-auto px-4 space-y-10 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                                Our Structure
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                                The Ministry of Labour and Employment is organized into specialized departments, each playing a critical role in 
                                our mission to promote decent work, employment generation, and industrial harmony. Our structure is designed 
                                to ensure effective policy implementation, service delivery, and stakeholder engagement across all sectors 
                                of the Imo State labour market.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/photos/struc - Ministry of Labour and Employment.jpg"
                                alt="Ministry of Special Projects - Organizational Structure"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Employment & Job Creation */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 18h.01M7 16h10a2 2 0 002-2V8a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Employment & Job Creation</h3>
                            <p className="text-sm text-gray-400">Manages job portals, career centers, and coordinates employment programs to connect job seekers with opportunities.</p>
                        </div>

                        {/* Labour Relations */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Labour Relations</h3>
                            <p className="text-sm text-gray-400">Handles dispute resolution, collective bargaining, and ensures compliance with labor laws and regulations.</p>
                        </div>

                        {/* Skills Development */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Skills Development</h3>
                            <p className="text-sm text-gray-400">Oversees vocational training, apprenticeship programs, and skills acquisition initiatives.</p>
                        </div>

                        {/* Workplace Safety */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Workplace Safety</h3>
                            <p className="text-sm text-gray-400">Ensures occupational health and safety standards are met across all workplaces in Imo State.</p>
                        </div>

                        {/* Migrant Workers */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Migrant Workers</h3>
                            <p className="text-sm text-gray-400">Addresses issues related to migrant labor and ensures their rights are protected under the law.</p>
                        </div>

                        {/* Research & Statistics */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Research & Statistics</h3>
                            <p className="text-sm text-gray-400">Collects and analyzes labor market data to inform policy decisions and program development.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
