import DeveloperTools from "@/components/DeveloperTools";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { ArrowRight ,BarChart, Cpu, Globe, Network, Search, Zap} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: Globe,
    title: "Decentralize Deployment",
    description:
      "Deploy and access your website forever for free on the blockchain.",
  },
  {
    icon: Zap,
    title: "Instant Preview & CI/CD",
    description:
      "Automatic deployments from GitHub with instant preview links and version control.",
  },
  {
    icon: Cpu,
    title: "AI Website Generator",
    description:
      "Generate a website using AI and deploy it directly to the blockchain.",
  },
  {
    icon: Search,
    title: "Decentralized Search Engine",
    description:
      "Our search engine has indexed all websites on the blockchain network.",
  },
  {
    icon: BarChart,
    title: "Analytics & Monitoring",
    description:
      "Real-time analytics dashboard and uptime monitoring for your decentralized websites.",
  },
  {
    icon: Network,
    title: "Decentralized CDN",
    description:
      "Utilize our decentralized content delivery network for faster and more reliable access.",
  },
];

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen p-8 pb-20 gap-16 sm:p-12 font-[family-name:var(--font-geist-sans)] bg-background text-foreground">
        <header className="mb-12 text-center">
          <Image 
          className="mx-auto text-white mb-4"
          src="logo.svg"
          alt="edtior logo"
          width={70}
          height={38}
          priority
          />
           <h1 className="text-5xl max-w-3xl mx-auto font-bold mb-4">
            The Future of Web5 Hosting on{" "}
            <span className="text-primary">Smart Contracts</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Host your legacy websites like calculators and unit converters on
            the blockchain, absolutely free! No hosting fees, no expiration
            dates. Preserve your simple web projects forever with HTTP5s
            decentralized hosting.
          </p> 
          <Link href={"/dashboard"}>
            <Button size="lg" className="mr-4">
              Deploy for Free Now <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            Learn How It Works
          </Button>
        </header>
        <main className="max-w-6xl mx-auto">
        <section className="mb-16 text-center">
            <h2 className="text-3xl font-semibold mb-8">
              Revolutionary Web5 Hosting Platform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a0a] border border-1 p-6 rounded-xl transition-opacity duration-300 hover:opacity-80 hover:shadow-lg"
                >
                  <feature.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
         <DeveloperTools />
         <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 HTTP5. All rights reserved. create by <Link
             href="https://www.linkedin.com/in/abdallah-rafat-7aa0a7285"
             target="_blank"
             rel="noopener noreferrer">
             Abdallah
          </Link></p>
        </footer>
      </div>
    </ThemeProvider>
  );
}
