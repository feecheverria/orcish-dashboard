"use client";

import { useThemeConfig } from "./active-theme";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DEFAULT_THEMES = [
  {
    name: "Default",
    value: "default",
  },
  {
    name: "Blue",
    value: "blue",
  },
  {
    name: "Green",
    value: "green",
  },
  {
    name: "Amber",
    value: "amber",
  },
];

const MATCHA_THEMES = [
  {
    name: "Matcha Slate",
    value: "matcha-slate",
  },
  {
    name: "Matcha Warm",
    value: "matcha-warm",
  },
];

const SCALED_THEMES = [
  {
    name: "Default",
    value: "default-scaled",
  },
  {
    name: "Blue",
    value: "blue-scaled",
  },
  {
    name: "Matcha Slate",
    value: "matcha-slate-scaled",
  },
  {
    name: "Matcha Warm",
    value: "matcha-warm-scaled",
  },
];

const MONO_THEMES = [
  {
    name: "Mono",
    value: "mono-scaled",
  },
];

export function ThemeSelector() {
  const { activeTheme, setActiveTheme } = useThemeConfig();

  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="theme-selector" className="sr-only">
        Theme
      </Label>
      <Select value={activeTheme} onValueChange={setActiveTheme}>
        <SelectTrigger
          id="theme-selector"
          size="sm"
          className="justify-start *:data-[slot=select-value]:w-12"
        >
          <span className="text-muted-foreground hidden sm:block">
            Select a theme:
          </span>
          <span className="text-muted-foreground block sm:hidden">Theme</span>
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent align="end">
          <SelectGroup>
            <SelectLabel>Default</SelectLabel>
            {DEFAULT_THEMES.map((theme) => (
              <SelectItem key={theme.name} value={theme.value}>
                {theme.name}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Matcha</SelectLabel>
            {MATCHA_THEMES.map((theme) => (
              <SelectItem key={theme.name} value={theme.value}>
                {theme.name}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Scaled</SelectLabel>
            {SCALED_THEMES.map((theme) => (
              <SelectItem key={theme.name} value={theme.value}>
                {theme.name}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Monospaced</SelectLabel>
            {MONO_THEMES.map((theme) => (
              <SelectItem key={theme.name} value={theme.value}>
                {theme.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
