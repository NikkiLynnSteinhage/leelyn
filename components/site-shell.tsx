"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Building2, FileBarChart2, GraduationCap, Handshake, Mail, MapPin, Menu, Users2, X } from "lucide-react";

const impactStats = [
  { value: "52,418+", label: "Residents assessed" },
  { value: "14,770+", label: "Work readiness participants" },
  { value: "5,269+", label: "Educational placements" },
  { value: "5,563+", label: "Work placements" },
];

const services = [
  {
    icon: Users2,
    title: "Workforce Development",
    description:
      "Connecting jobseekers, employers, training institutions and public programmes through structured recruitment, digital registration and verified talent pipelines.",
  },
  {
    icon: GraduationCap,
    title: "Skills Development & Training",
    description:
      "Delivering practical, sector-relevant training programmes that improve employability, work readiness and long-term workforce participation.",
  },
  {
    icon: FileBarChart2,
    title: "Research & Innovation",
    description:
      "Using mobile technology and data-driven methods to generate workforce insights, market intelligence and rapid reporting for decision-making.",
  },
  {
    icon: Building2,
    title: "Property Management",
    description:
      "Offering development management, inspections, compliance monitoring and PropTech-enabled reporting for property stakeholders.",
  },
];

const programmes = [
  {
    title: "Jobs Connect Initiative",
    description:
      "A workforce development platform linking employers, the City of Cape Town, strategic partners and jobseekers through recruitment, filtering and work readiness support.",
  },
  {
    title: "International Workforce Mobility Programmes",
    description:
      "Supporting pathways for South Africans to access structured international work opportunities through coordinated recruitment and training partnerships.",
  },
  {
    title: "Work Readiness Programmes",
    description:
      "Preparing candidates for the realities of work through foundational workplace skills, digital readiness and employer-aligned training.",
  },
];

const partnerGroups = [
  "City of Cape Town",
  "Corporate partners",
  "Training institutions",
  "Non-profit organisations",
  "Community organisations",
  "Strategic service providers",
];

const insights = [
  {
    title: "Youth employment pathways in South Africa",
    category: "Workforce Development",
    description: "Exploring how partnerships, training and placement systems can improve labour market access for young people.",
  },
  {
    title: "Why work readiness matters before placement",
    category: "Skills Development",
    description: "Looking at the role of practical preparation in improving retention, confidence and productivity in the workplace.",
  },
  {
    title: "Digital tools for workforce and property intelligence",
    category: "Research & Innovation",
    description: "How technology-enabled data collection and reporting supports better decisions across sectors.",
  },
];

const values = ["Honesty", "Integrity", "Transparency", "Trust", "Customer centricity", "Visible results"];

function AppButton({ children, href, variant = "primary" }: { children: React.ReactNode; href: string; variant?: "primary" | "secondary" | "light"; }) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition";
  const styles = variant === "primary"
    ? "bg-[#163459] text-white hover:bg-[#1d4474]"
    : variant === "secondary"
    ? "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
    : "bg-white text-[#163459] hover:bg-slate-100";

  return <Link href={href} className={`${base} ${styles}`}>{children}</Link>;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-[2rem] border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-left">
          <div className="text-xl font-semibold tracking-tight text-slate-900">Leelyn Management</div>
          <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Developing Leaders for Tomorrow</div>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
              {link.label}
            </Link>
          ))}
          <AppButton href="/contact">Partner With Us</AppButton>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden sm:px-6">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-2xl bg-slate-50 px-4 py-3 text-left text-sm text-slate-700" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="text-lg font-semibold text-slate-900">Leelyn Management</div>
          <div className="text-sm text-slate-500">Developing Leaders for Tomorrow</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                Family-owned South African business since 2003
              </div>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">Developing Leaders for Tomorrow</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Creating pathways to employment, skills development and sustainable opportunity.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <AppButton href="/services">Explore Our Services</AppButton>
                <AppButton href="/contact" variant="secondary">Partner With Us</AppButton>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-gradient-to-br from-[#163459] to-[#2c59a5] p-8 text-white shadow-xl sm:col-span-2">
                <p className="text-sm uppercase tracking-[0.18em] text-blue-100">Visual direction</p>
                <h3 className="mt-3 text-2xl font-semibold">Real programme impact across South Africa</h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-blue-50">
  Showcasing training sessions, job placements, employer partnerships and community-driven impact across South Africa.
</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-slate-500">Core promise</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">Integrated project management and implementation expertise</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-slate-500">Operating footprint</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">Creating real pathways to employment across South Africa</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Impact" title="Making a measurable difference" description="Creating real pathways to employment across South Africa, supported by measurable outcomes across assessment, work readiness and placement." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <Card key={stat.label}><div className="p-8"><div className="text-4xl font-semibold tracking-tight text-[#163459]">{stat.value}</div><div className="mt-3 text-sm leading-6 text-slate-600">{stat.label}</div></div></Card>
            ))}
          </div>
        </section>
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="What We Do" title="Comprehensive solutions that drive workforce transformation and sustainable development" description="Building a better South Africa through people, partnerships and purpose." />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;
                return <Card key={service.title} className="border-0"><div className="p-6"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100"><Icon className="h-6 w-6 text-[#163459]" /></div><h3 className="text-xl font-semibold text-slate-900">{service.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p></div></Card>;
              })}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Programmes" title="Key initiatives" description="Targeted programmes that create real opportunities for South Africa’s youth and workforce." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {programmes.map((programme, index) => (
              <Card key={programme.title}><div className="p-6"><div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">0{index + 1}</div><h3 className="text-xl font-semibold text-slate-900">{programme.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{programme.description}</p></div></Card>
            ))}
          </div>
        </section>
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="Our Partners" title="Trusted collaborations" description="Working alongside the City of Cape Town, corporate partners and key stakeholders to drive meaningful change." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {partnerGroups.map((partner) => (
                <div key={partner} className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-8 text-center text-sm font-medium text-slate-600 shadow-sm">{partner}</div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-500">Replace these placeholders with approved partner logos when ready.</p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Latest Insights" title="Research, trends and thought leadership" description="Articles and insights focused on workforce development, youth employment and practical systems change." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {insights.map((item) => (
              <Card key={item.title}><div className="p-6"><div className="mb-2 text-sm font-medium text-[#2c59a5]">{item.category}</div><h3 className="text-xl font-semibold text-slate-900">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p><div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900">Read more <ArrowRight className="h-4 w-4" /></div></div></Card>
            ))}
          </div>
        </section>
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#163459] px-8 py-12 text-white shadow-xl sm:px-12">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
              <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Final Call to Action</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Interested in partnering with Leelyn Management?</h2><p className="mt-4 max-w-2xl text-base leading-7 text-blue-50">Let’s build stronger workforce pathways, meaningful skills development initiatives and sustainable opportunity together.</p></div>
              <div className="flex lg:justify-end"><AppButton href="/contact" variant="light">Contact Us</AppButton></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="About Leelyn Management" title="A trusted South African partner in workforce, research and property solutions" description="Leelyn Management is a 100% black-owned Level 1 B-BBEE South African company established in 2003. The managing members bring more than 80 years of combined experience across architecture, civil engineering, property development, workforce development and research." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card><div className="p-6"><h3 className="text-xl font-semibold text-slate-900">Vision</h3><p className="mt-3 text-sm leading-7 text-slate-600">To establish a platform that provides South Africans access to education and employment opportunities across industries.</p></div></Card>
          <Card><div className="p-6"><h3 className="text-xl font-semibold text-slate-900">Mission</h3><p className="mt-3 text-sm leading-7 text-slate-600">To provide innovative and well researched solutions while forming strategic partnerships that unlock opportunities for South Africans.</p></div></Card>
          <Card><div className="p-6"><h3 className="text-xl font-semibold text-slate-900">Values</h3><p className="mt-3 text-sm leading-7 text-slate-600">{values.join(", ")}.</p></div></Card>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card><div className="p-6"><h3 className="text-xl font-semibold text-slate-900">Why clients trust us</h3><p className="mt-3 text-sm leading-7 text-slate-600">Our work is grounded in practical delivery, cross-sector experience and long-term partnership building. We combine corporate capability with a people-first approach that reflects our family-owned foundation.</p></div></Card>
          <Card><div className="p-6"><h3 className="text-xl font-semibold text-slate-900">Where we create value</h3><p className="mt-3 text-sm leading-7 text-slate-600">We support organisations that want to strengthen recruitment pipelines, improve workforce readiness, generate evidence-based insights and unlock smarter property management processes.</p></div></Card>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Services" title="Integrated solutions for business, government and community impact" description="Leelyn Management combines implementation experience with strategic partnership development to solve workforce, training, research and property challenges." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {services.map((item, index) => {
            const Icon = item.icon;
            return <Card key={item.title}><div className="p-6"><div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100"><Icon className="h-6 w-6 text-[#163459]" /></div><div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Service 0{index + 1}</div><h3 className="text-xl font-semibold text-slate-900">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p></div></Card>;
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Contact" title="Let’s start the conversation" description="Partnership and collaboration enquiries, programme discussions and general company enquiries are welcome." />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <div className="p-6 space-y-6 text-sm text-slate-600">
              <h3 className="text-xl font-semibold text-slate-900">Contact details</h3>
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-[#163459]" /><div><div className="font-medium text-slate-900">Address</div><div>Unit 14B Edgemead Business Park, Cape Town, South Africa</div></div></div>
              <div className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-[#163459]" /><div><div className="font-medium text-slate-900">Email</div><div>info@leelyn.co.za</div></div></div>
              <div className="flex items-start gap-3"><Handshake className="mt-0.5 h-5 w-5 text-[#163459]" /><div><div className="font-medium text-slate-900">Enquiries</div><div>Partnership and collaboration enquiries</div><div>General enquiries</div></div></div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900">General enquiry form</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">This is a front-end sample form layout ready to be connected to your preferred contact form or CRM.</p>
              <form className="mt-6 grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none placeholder:text-slate-400" placeholder="Full name" />
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none placeholder:text-slate-400" placeholder="Organisation" />
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none placeholder:text-slate-400 sm:col-span-2" placeholder="Email address" />
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none placeholder:text-slate-400 sm:col-span-2" placeholder="Subject" />
                <textarea className="min-h-[180px] rounded-2xl border border-slate-200 px-4 py-3 outline-none placeholder:text-slate-400 sm:col-span-2" placeholder="Tell us more about your enquiry" />
                <div className="sm:col-span-2"><button type="submit" className="inline-flex items-center justify-center rounded-full bg-[#163459] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1d4474]">Send enquiry</button></div>
              </form>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
