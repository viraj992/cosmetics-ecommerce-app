import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  Heart,
  Leaf,
  Shield,
  Star,
  Eye,
  Gem,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function SectionHeading({
  label,
  title,
  className = "",
}) {
  return (
    <motion.div
      className={`text-center mb-12 md:mb-16 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <motion.span
        variants={fadeUp}
        custom={0}
        className="inline-block font-accent text-sm md:text-base tracking-[0.3em] uppercase text-champagne-500 mb-3"
      >
        {label}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        custom={1}
        className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-secondary leading-tight"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={fadeUp}
        custom={2}
        className="w-16 h-[1.5px] mx-auto bg-gradient-to-r from-transparent via-champagne-400 to-transparent mt-6"
      />
    </motion.div>
  );
}

/* ─────────────────────────────────── Hero ─────────────────────────────────── */
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <img
          src="/hero-products.jpg"
          alt="Luxury skincare products elegantly displayed"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50/80 via-cream-50/50 to-cream-50" />
      </motion.div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-rose-200/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-champagne-200/30 blur-3xl" />

      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ opacity }}
      >
        

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-secondary leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Where Beauty Meets{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 italic font-display">
            Authenticity
          </span>
        </motion.h1>

        <motion.p
          className="font-bold text-base md:text-lg text-black max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Glowique Beauty was born from a quiet conviction — that skincare and
          makeup should honor the skin they touch and the person wearing them.
        </motion.p>

        <motion.div
          className="mt-10 flex items-center justify-center gap-1 text-champagne-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ────────────────────────────── Our Story ──────────────────────────────── */
function StorySection() {
  return (
    <section className="relative py-20 md:py-32 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/beauty-portrait.jpg"
                alt="Radiant woman showcasing natural beauty"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 to-transparent" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-[#efe08f]" />
            <div className="absolute -top-3 -left-3 md:-top-5 md:-left-5 w-20 h-20 md:w-24 md:h-24 rounded-full bg-rose-100/50 blur-lg" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="font-accent text-sm tracking-[0.3em] uppercase text-champagne-500 mb-3 block"
            >
              Our Story
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-secondary leading-tight mb-8"
            >
              A Love Letter <br />
              <span className="italic text-rose-400">to Your Skin</span>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="space-y-5 text-charcoal-600 font-body leading-relaxed text-base md:text-[17px]"
            >
              <p>
                It started with a simple ritual — a quiet evening, a warm cloth,
                and the realization that the products we trusted most were
                failing us. Too many ingredients we couldn't pronounce. Too
                many promises that dissolved before morning.
              </p>
              <p>
                So in 2020, Glowique Beauty came to life — not in a boardroom,
                but in a small kitchen where formulas were tested on real skin,
                by real people who refused to settle. We believed beauty
                shouldn't demand compromise. It should feel like coming home to
                yourself.
              </p>
              <p>
                Today, every serum, palette, and treatment in our collection
                carries that same founding conviction: that confidence isn't
                painted on — it's awakened.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Mission & Vision ─────────────────────────── */
function MissionVisionSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-luxury overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionHeading label="Purpose" title="Why We Exist" />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Mission */}
          <motion.div
            className="bg-white/60 backdrop-blur-md border border-white/40 shadow-lg rounded-2xl p-8 md:p-10 group hover:shadow-xl transition-shadow duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Heart className="w-5 h-5 text-rose-500" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-medium text-secondary mb-4">
              Our Mission
            </h3>
            <p className="text-charcoal-600 font-body leading-relaxed">
              To craft beauty experiences that nurture the skin and empower the
              spirit. We exist to strip away the noise of the beauty industry
              and offer something honest — products that deliver visible
              results through carefully sourced, dermatologically considered
              formulations. We don't sell perfection. We celebrate the skin you
              already have and give it what it deserves.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-white/60 backdrop-blur-md border border-white/40 shadow-lg rounded-2xl p-8 md:p-10 group hover:shadow-xl transition-shadow duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="w-12 h-12 rounded-full bg-champagne-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Eye className="w-5 h-5 text-champagne-600" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-medium text-secondary mb-4">
              Our Vision
            </h3>
            <p className="text-charcoal-600 font-body leading-relaxed">
              A world where beauty routines feel like acts of self-respect, not
              self-correction. We envision a future where every person —
              regardless of age, complexion, or background — has access to
              thoughtful, high-performance beauty that works in harmony with
              nature. Glowique Beauty strives to lead that quiet revolution,
              one formulation at a time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Why Choose Us ──────────────────────────── */
const whyChooseData = [
  {
    icon: Leaf,
    title: "Clean Formulations",
    text: "Every ingredient earns its place. We formulate without parabens, sulfates, or synthetic fragrances — because what you leave out matters as much as what you put in.",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Shield,
    title: "Dermatologist-Backed",
    text: "Our products are developed alongside skincare professionals who understand the science of skin at every stage of life, ensuring safety meets efficacy.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Gem,
    title: "Luxury Made Accessible",
    text: "Premium beauty shouldn't require a premium price tag. We cut the middleman, not the quality — delivering salon-grade results directly to your doorstep.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Star,
    title: "Community First",
    text: "Every product launch, shade extension, and formula update is shaped by the voices of our community. You don't just buy from Glowique — you co-create with us.",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

function WhyChooseSection() {
  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="The Difference" title="Why Choose Glowique" />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
        >
          {whyChooseData.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i}
              className="group text-center p-6 md:p-8 rounded-2xl bg-white border border-cream-200 hover:border-champagne-300/60 hover:shadow-lg transition-all duration-500"
            >
              <div
                className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500`}
              >
                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>
              <h4 className="font-display text-lg md:text-xl font-medium text-secondary mb-3">
                {item.title}
              </h4>
              <p className="text-charcoal-500 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Our Values ──────────────────────────── */
const valuesData = [
  {
    title: "Authenticity",
    description:
      "We never hide behind marketing jargon. What you see is what your skin gets — honest ingredients, transparent sourcing, and real results from real people.",
  },
  {
    title: "Empowerment",
    description:
      "Beauty should amplify who you already are, not reshape you into someone else. Every product is designed to let your natural radiance lead the way.",
  },
  {
    title: "Sustainability",
    description:
      "From recyclable packaging to responsibly sourced botanicals, we build beauty with the planet in mind — because caring for your skin means caring for the world it lives in.",
  },
  {
    title: "Inclusivity",
    description:
      "Glowique is for everyone. We develop shade ranges, formulas, and experiences that honor every skin tone, type, and story — without exception.",
  },
];

function ValuesSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-100 overflow-hidden">
      
      {/* Decorative soft blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative">
        
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-block text-sm md:text-base tracking-[0.3em] uppercase text-pink-500 mb-3"
          >
            What Guides Us
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-tight"
          >
            Our Values
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="w-16 h-[1.5px] mx-auto bg-gradient-to-r from-transparent via-pink-400 to-transparent mt-6"
          />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {valuesData.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative p-7 md:p-9 rounded-2xl border border-pink-100 bg-white shadow-md hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Number background */}
              <span className="absolute top-6 right-7 text-5xl md:text-6xl font-bold text-pink-100 leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h4 className="text-xl md:text-2xl font-semibold text-black mb-3">
                {item.title}
              </h4>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────── Commitment to Quality ─────────────────────── */
function QualitySection() {
  return (
    <section className="py-20 md:py-32 bg-cream-100/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="font-accent text-sm tracking-[0.3em] uppercase text-champagne-500 mb-3 block"
            >
              Our Promise of Quality
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-secondary leading-tight mb-8"
            >
              Commitment to{" "}
              <span className="italic text-champagne-500">Excellence</span>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="space-y-5 text-charcoal-600 font-body leading-relaxed text-base md:text-[17px]"
            >
              <p>
                At Glowique Beauty, quality is not a feature — it is the
                foundation. Every product undergoes rigorous testing across
                diverse skin types and conditions before it earns a place in our
                collection. We partner with independent laboratories and
                botanical research centers to source only ingredients that meet
                our exacting standards.
              </p>
              <p>
                Our formulations are cruelty-free, dermatologically tested, and
                crafted in small batches to preserve the potency of each active
                ingredient. We believe in fewer products done exceptionally well
                — not endless launches that dilute meaning.
              </p>
            </motion.div>

            {/* Quality badges */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap gap-3 mt-8"
            >
              {[
                "Cruelty-Free",
                "Dermatologically Tested",
                "Clean Beauty",
                "Small-Batch",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-4 py-2 rounded-full text-xs font-body font-medium tracking-wide text-champagne-600 bg-champagne-100/60 border border-champagne-200/60"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/botanical-cream.jpg"
                alt="Cosmetic cream jar styled with pink flowers on marble"
                className="w-full h-[450px] md:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/10 to-transparent" />
            </div>
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-[#efe08f]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Customer Promise ──────────────────────────── */
function CustomerPromiseSection() {
  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionHeading label="Our Pledge to You" title="Customer Promise" />

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-white/60 backdrop-blur-md border-white/40 shadow-lg rounded-2xl p-8 md:p-12 border border-cream-200">
            <p className="font-accent italic text-xl md:text-2xl lg:text-3xl text-charcoal-700 leading-relaxed mb-8">
              "Every Glowique purchase is backed by our promise: if a product
              doesn't feel like it was made for you, we'll make it right — no
              questions, no fine print."
            </p>
            <div className="space-y-4 text-charcoal-600 font-body text-base md:text-[17px] leading-relaxed max-w-3xl mx-auto text-left md:text-center">
              <p>
                We stand behind every formulation with confidence because we
                know the care that goes into creating it. From hassle-free
                returns to responsive, human customer support, your experience
                with Glowique doesn't end at checkout — it begins there.
              </p>
              <p>
                Your trust fuels everything we do. That's why we are transparent
                about our ingredient lists, sourcing practices, and the science
                behind each product. We believe you deserve to know exactly what
                you're putting on your skin — and why.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────── Call to Action ────────────────────────── */
function CTASection() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/product-collection.jpg"
          alt="Glowique Beauty product collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/70 backdrop-blur-[2px]" />
      </div>

      {/* Decorative */}
      <div className="absolute top-10 left-1/4 w-48 h-48 rounded-full bg-rose-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-block font-accent text-sm tracking-[0.3em] uppercase text-champagne-300 mb-4"
          >
            Begin Your Glow
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-tight mb-6"
          >
            Your Skin Deserves This
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-black/70 font-body text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Explore our curated collection of skincare, makeup, and beauty
            essentials — designed to celebrate the most authentic version of
            you.
          </motion.p>
          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-secondary font-body font-medium text-sm tracking-wide hover:bg-cream-100 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
            >
              Explore Our Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/30 text-black font-body font-medium text-sm tracking-wide hover:bg-white/10 transition-all duration-300"
            >
              Our Bestsellers
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}



/* ═══════════════════════════ Main Page ═══════════════════════════ */
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-primary">
      <HeroSection />
      <StorySection />
      <MissionVisionSection />
      <WhyChooseSection />
      <ValuesSection />
      <QualitySection />
      <CustomerPromiseSection />
      <CTASection />
      
    </div>
  );
}
