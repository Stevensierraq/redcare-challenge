import { Box } from "@chakra-ui/react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        maxWidth: "1012px",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      {children}
    </Box>
  );
}
