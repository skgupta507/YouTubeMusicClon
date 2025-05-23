import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import cn from "clsx"

export const SliderDesk = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex touch-none select-none items-center group",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1 hover:h-2 w-full grow overflow-hidden rounded-full bg-gray-600 cursor-pointer">
        <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-80% from-red-600 to-pink-700" />
      </SliderPrimitive.Track>

      <SliderPrimitive.Thumb className="hidden group-hover:block h-4 w-4 bg-red-800 rounded-full cursor-pointer border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
  ) : null;
})

SliderDesk.displayName = SliderPrimitive.Root.displayName