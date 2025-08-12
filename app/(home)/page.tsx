import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-5xl font-bold">Solana Learning Path</h1>

        <p className="mb-8 text-xl text-fd-muted-foreground max-w-2xl mx-auto">
          Master Solana blockchain development from basics to production-ready
          skills. Complete hands-on projects and prepare for your next
          internship.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild>
            <Link href="/docs">Start Learning</Link>
          </Button>

          <Button asChild variant={"outline"}>
            <Link href="/docs/developer-tools">Developer Tools</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 border border-gray-200 rounded-lg">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-semibold mb-2">3 Learning Phases</h3>
            <p className="text-sm text-fd-muted-foreground">
              From basics to internship-ready skills
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <div className="text-3xl mb-2">💻</div>
            <h3 className="font-semibold mb-2">Hands-on Projects</h3>
            <p className="text-sm text-fd-muted-foreground">
              Build real dApps and smart contracts
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="font-semibold mb-2">Production Ready</h3>
            <p className="text-sm text-fd-muted-foreground">
              Deploy to devnet and mainnet
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
