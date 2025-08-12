import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center text-center px-4 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">
          Solana Learning Path
        </h1>

        <p className="mb-6 sm:mb-8 text-lg sm:text-xl text-fd-muted-foreground max-w-2xl mx-auto px-2">
          Master Solana blockchain development from basics to production-ready
          skills. Complete hands-on projects and prepare for your next
          internship.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/docs">Start Learning</Link>
          </Button>

          <Button
            asChild
            variant={"outline"}
            size="lg"
            className="w-full sm:w-auto"
          >
            <Link href="/docs/developer-tools">Developer Tools</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-center px-2">
          <div className="p-4 sm:p-6 border border-gray-200 rounded-lg">
            <div className="text-2xl sm:text-3xl mb-2">🎯</div>
            <h3 className="font-semibold mb-2 text-sm sm:text-base">
              3 Learning Phases
            </h3>
            <p className="text-xs sm:text-sm text-fd-muted-foreground">
              From basics to internship-ready skills
            </p>
          </div>

          <div className="p-4 sm:p-6 border border-gray-200 rounded-lg">
            <div className="text-2xl sm:text-3xl mb-2">💻</div>
            <h3 className="font-semibold mb-2 text-sm sm:text-base">
              Hands-on Projects
            </h3>
            <p className="text-xs sm:text-sm text-fd-muted-foreground">
              Build real dApps and smart contracts
            </p>
          </div>

          <div className="p-4 sm:p-6 border border-gray-200 rounded-lg sm:col-span-2 lg:col-span-1">
            <div className="text-2xl sm:text-3xl mb-2">🚀</div>
            <h3 className="font-semibold mb-2 text-sm sm:text-base">
              Production Ready
            </h3>
            <p className="text-xs sm:text-sm text-fd-muted-foreground">
              Deploy to devnet and mainnet
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
