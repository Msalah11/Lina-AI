import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/constants/landing";

import clsx from "clsx";
import { Check } from "lucide-react";
import Link from "next/link";

function PriceTable() {
  return (
    <div className="relative z-20 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="my-6 text-4xl font-bold">
            Choose what fits you right
          </h2>
        </div>

        <div className="flex justify-center gap-4 flex-wrap mt-6">
          {pricingCards.map((card) => (
            <Card
              key={card.title}
              className={clsx("w-[300px] flex flex-col justify-between", {
                "border-2 border-primary": card.title === "Unlimited",
              })}
            >
              <CardHeader>
                <CardTitle className="text-primary">{card.title}</CardTitle>
                <CardDescription>
                  {
                    pricingCards.find((c) => c.title === card.title)
                      ?.description
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">
                  <span>/ month</span>
                </span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {card.features.map((feature) => (
                    <div key={feature} className="flex gap-2">
                      <Check />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/auth/register`}
                  className="bg-primary hover:bg-indigo-600 text-white hover:text-white transition border-primary hover:border-indigo-600 border-2 p-2 w-full text-center font-bold rounded-md"
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PriceTable;
