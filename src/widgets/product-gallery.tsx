"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <img
              src={images[currentImage] || "/placeholder.svg"}
              alt={`Product image ${currentImage + 1}`}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-background/60 backdrop-blur-sm"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-background/60 backdrop-blur-sm"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <Dialog open={fullscreenOpen} onOpenChange={setFullscreenOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="absolute bottom-4 right-4 rounded-full bg-background/60 backdrop-blur-sm"
              aria-label="View fullscreen"
            >
              <Expand className="h-5 w-5" />
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-[95vw] sm:max-w-4xl w-[95vw] h-[90vh] p-0 bg-transparent border-none">
            <div className="relative w-full h-full flex items-center justify-center bg-background/30 backdrop-blur-md rounded-lg">
              <img
                src={images[currentImage] || "/placeholder.svg"}
                alt={`Product image ${currentImage + 1} fullscreen`}
                className="object-contain p-4"
              />

              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 left-4 rounded-full bg-background/60 backdrop-blur-sm"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 rounded-full bg-background/60 backdrop-blur-sm"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-4 gap-1 sm:gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => selectImage(index)}
            className={cn(
              "relative aspect-square rounded-sm sm:rounded-md overflow-hidden border-2",
              currentImage === index
                ? "border-primary"
                : "border-transparent hover:border-primary/50"
            )}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              className="object-cover"
              sizes="100px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
