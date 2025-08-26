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
        </div>
      </div>
    </main>
  );
}
