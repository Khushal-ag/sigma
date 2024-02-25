import { useMemo } from "react";

import { useThreads } from "@/lib/liveblocks.config";

// Returns the highest z-index of all threads
export const useMaxZIndex = () => {
  // get all threads
  const { threads } = useThreads();

  // calculate the max z-index
  return useMemo(() => {
    let max = 0;
    for (const thread of threads) {
      // @ts-expect-error zIndex is not in the types
      if (thread.metadata.zIndex > max) {
        // @ts-expect-error zIndex is not in the types
        max = thread.metadata.zIndex;
      }
    }
    return max;
  }, [threads]);
};
