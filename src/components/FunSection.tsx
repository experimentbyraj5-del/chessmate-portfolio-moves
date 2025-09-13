import { ChessGame } from "./ChessGame";
import { Card, CardContent } from "@/components/ui/card";

export const FunSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Fun Challenge
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            If feel booored then let me take you to the board. Use your skills against me.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6">
            <CardContent>
              <ChessGame />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};