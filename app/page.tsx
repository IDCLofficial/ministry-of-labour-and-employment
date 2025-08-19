import Image from "next/image";
import StatisticsSection from "../components/StatisticsSection";
import HeroSection from "../components/HeroSection";
import AnimatedEntrance from "../components/AnimatedEntrance";
import { HOME_STATISTICS } from "../utils/constants/statistics";
import { HERO_CONFIGS } from "../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../utils/constants/animations";
import { FaLightbulb, FaHandsHolding, FaUsers } from "react-icons/fa6";
import Link from "next/link";
import CustomImage from "./components/CustomImage";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F8F9]">
      {/* Hero Section */}
      <HeroSection {...HERO_CONFIGS.HOME}>
        <Link href="/about">
            <button className="bg-white/90 hover:bg-white text-black cursor-pointer px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium active:scale-95 transition-colors">
            Learn About Us
            </button>
          </Link>
      </HeroSection>

      {/* Statistics Section */}
      <StatisticsSection statistics={HOME_STATISTICS} />

      {/* Ministry Overview Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP} className="order-2 lg:order-1">
              <Image
                src="/photos/Banner Home - Ministry of Labour and Employment.webp"
                alt="Ministry of Labour and Employment Headquarters"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-shadow duration-300"
              />
            </AnimatedEntrance>
            <div className="grid gap-4 sm:gap-6 md:gap-8 order-1 lg:order-2">
              <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} delay={200}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  About the Ministry of Labour and Employment
                </h2>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={400}>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  The Imo State Ministry of Labour and Employment is dedicated to developing and implementing inclusive policies that promote decent employment, empower youths, protect workers&apos; rights, and support socio-economic growth across Imo State. We serve as the bridge between the government, employers, and the workforce, ensuring a productive and harmonious labour environment.
                </p>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.BUTTON_SCALE_UP} delay={600}>
                <Link href="/about">
                  <button className="bg-[#4CAF50]/90 hover:bg-[#4CAF50] cursor-pointer w-fit text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:transform hover:scale-105 transition-all duration-300">
                    Learn more about us
                  </button>
                </Link>
              </AnimatedEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* Commissioner Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="px-4 sm:px-6 lg:px-20 xl:px-32 w-full">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  A Message from the Honorable Commissioner
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Prof. Boniface G. Nworgu</h3>
                <p className="text-gray-600 text-sm mb-4">Honourable Commissioner for Labour and Employment</p>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_LEFT} delay={200}>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  In a rapidly changing economy, our duty as a government is not only to create jobs but to prepare our people for the future of work. At the Ministry of Labour and Employment, we believe in building strong institutions, promoting fair labour practices, and equipping our workforce with the skills and confidence needed to thrive.
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  As Commissioner, I am honored to serve in a time when building a strong labour force is key to our state&apos;s future. We are passionate about unlocking opportunities for every Imolite — from rural artisans to tech-savvy graduates. Through strategic partnerships, reforms, and impactful programs, we are laying the foundation for a more inclusive and productive Imo State.
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  I invite all citizens, institutions, and investors to partner with us as we position Imo for labour-driven prosperity. Together, we can build a vibrant, skilled, and employed population that drives the prosperity and productivity of our great state.
                </p>
              </AnimatedEntrance>
              {/* <AnimatedEntrance {...ANIMATION_PRESETS.BUTTON_SCALE_UP} delay={600}>
                <button className="bg-[#4CAF50]/90 hover:bg-[#4CAF50] cursor-pointer text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:transform hover:scale-105 transition-all duration-300">
                  Read Full Bio
                </button>
              </AnimatedEntrance> */}
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP}>
                  <Image
                    src="/photos/Commissioner Boniface G. Nworgu - Honourable Commissioner for Labour and Employment.png"
                    alt="Prof. Boniface G. Nworgu - Honourable Commissioner for Labour and Employment"
                    width={500}
                    height={600}
                  className="rounded-lg shadow-lg w-full h-auto"
                  />
              </AnimatedEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
              Our Key Programs
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">
              Empowering Imo State through innovative labor and employment initiatives
            </p>
          </AnimatedEntrance>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* SkillUp Imo Digital */}
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaLightbulb size="1.75em" className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">SkillUp Imo Digital</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                  Advanced digital, soft, and vocational skills training for unemployed youth and job seekers
                </p>
                <Link href="/programs" className="text-green-600 font-medium text-xs sm:text-sm hover:text-green-700 transition-colors inline-block">
                  Learn More →
                </Link>
              </div>
            </AnimatedEntrance>
            {/* MSME Employment Initiative */}
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaHandsHolding size="1.75em" className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">MSME Employment</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                  Connecting micro and small businesses with trained job seekers to reduce unemployment
                </p>
                <Link href="/programs#msme-employment" className="text-green-600 font-medium text-xs sm:text-sm hover:text-green-700 transition-colors inline-block">
                  Learn More →
                </Link>
              </div>
            </AnimatedEntrance>
            {/* Cooperative Labour Scheme */}
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaUsers size="1.75em" className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">Cooperative Labour</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                  Organizing artisans and skilled youth under labour-backed cooperatives to boost employment
                </p>
                <Link href="/programs#cooperative-labour" className="text-green-600 font-medium text-xs sm:text-sm hover:text-green-700 transition-colors inline-block">
                  Learn More →
                </Link>
              </div>
            </AnimatedEntrance>
            {/* Industrial Relations Reform */}
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[3]}>
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaHandsHolding size="1.75em" className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">Industrial Relations</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                  Enhancing workplace safety, workers&apos; rights, and employer-union harmony across sectors
                </p>
                <Link href="/programs#industrial-relations" className="text-green-600 font-medium text-xs sm:text-sm hover:text-green-700 transition-colors inline-block">
                  Learn More →
                </Link>
              </div>
            </AnimatedEntrance>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      {/* <LatestNews /> */}

      {/* Our Partners Section */}
      <section className="py-8 sm:py-12 md:py-16 relative bg-gray-50">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/assets/pattern.svg"
            alt="Background Pattern"
            width={1440}
            height={280}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-4 sm:px-6 lg:px-20 relative z-10">
          <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Our Valued Partners
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              Collaborating with leading organizations to drive employment and workforce development in Imo State
            </p>
          </AnimatedEntrance>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
            {[{ name: 'ITF', logo: '/photos/itf-logo-1.jpeg' },
              { name: 'NECA', logo: '/photos/neca-logo.jpeg' },
              { name: 'NLC', logo: '/photos/nlc-logo.png' },
              { name: 'TUC', logo: '/photos/tuc-logo.jpeg' },
              { name: 'NDE', logo: '/photos/nde-logo.png' },
            ].map((partner, index) => (
              <AnimatedEntrance
                key={partner.name}
                {...ANIMATION_PRESETS.CARD_FADE_UP}
                delay={STAGGER_DELAYS.MEDIUM[index % STAGGER_DELAYS.MEDIUM.length]}
                className="flex items-center justify-center"
              >
                <div className="text-center hover:transform hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="bg-white p-2 rounded-lg shadow-sm w-24 sm:w-32 md:w-40">
                    <CustomImage
                      src={partner.logo}
                      alt={`Partner ${partner.name}`}
                      width={100}
                      title={`Partner ${partner.name}`}
                      height={60}
                      className="w-full h-auto object-contain aspect-[2/1]"
                    />
                  </div>
                </div>
              </AnimatedEntrance>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
