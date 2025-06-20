import React from "react";
import { CommandCounter } from "./CommandCounter";
import { getColorAlias } from "@/lookup/colors";

type CommandCounterStackProps = {
  factions: string[];
  factionToColor: Record<string, string>;
  style?: React.CSSProperties;
};

const TILE_OFFSET_X = 10;
const TILE_OFFSET_Y = 90;
export const CommandCounterStack = ({
  factions,
  factionToColor,
  style,
}: CommandCounterStackProps) => {
  if (factions.length === 0) {
    return null;
  }

  return (
    <div style={{ position: "relative", ...style }}>
      {factions.map((faction, index) => {
        const colorAlias = getColorAlias(factionToColor[faction]);
        const offsetX = index * 16;
        const offsetY = index * 16;
        const zIndex = index + 1;

        return (
          <CommandCounter
            key={`command-${faction}-${index}`}
            colorAlias={colorAlias}
            faction={faction}
            style={{
              position: "absolute",
              left: `${offsetX + TILE_OFFSET_X}px`,
              top: `${offsetY + TILE_OFFSET_Y}px`,
              zIndex: zIndex,
            }}
          />
        );
      })}
    </div>
  );
};
