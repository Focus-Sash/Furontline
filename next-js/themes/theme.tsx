import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: "0px 0px 0px 2px",
        },
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          _focus: {
            boxShadow: "0px 0px 0px 3px",
          },
        },
      },
    },
    Radio: {
      baseStyle: {
        control: {
          _focus: {
            boxShadow: "0px 0px 0px 3px",
          },
        },
      },
    },
  },
});

export default theme;
