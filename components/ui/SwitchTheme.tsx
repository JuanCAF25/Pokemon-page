import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

export const SwitchTheme = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Switch
          shadow
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
      </div>
    </>
  );
};
