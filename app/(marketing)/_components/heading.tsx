"use client";

import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Your ideas, document and plans. Unified. Welcome to your <span className="underline">notes</span></h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">Notes.d is a connected workspace, where <br /> better and faster work happens.</h3>
            <Button>
                Enter Note.d
                <ArrowBigRight className="h-4 w-4 ml-2" />
            </Button>
        </div>
    )
}