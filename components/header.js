import React from "react";
import { NativeBaseProvider, Box, Image, Button } from "native-base";

const Header = (props) => {
  return (
    <Box
      bg="#AA0002"
      flexDirection="row"
      justifyContent="space-between"
      padding={15}
    >
      <Button onPress={() => props.drawer.current.openDrawer()} variant="unstyled">
        <Image source={require("../assets/menu.png")} alt="Menu" size={18} />
      </Button>
      {/* <Image source={require("../assets/menu.png")} alt="Menu" size={18} /> */}

      <Box flexDirection="row" alignItems="center" justifyContent="center">
        <Image
          source={require("../assets/facebook.png")}
          alt="Facebook"
          size={25}
          mx={2}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/youtube.png")}
          alt="YouTube"
          size={25}
          resizeMode="contain"
          mx={2}
        />
        <Image
          source={require("../assets/twitter.png")}
          alt="Twitter"
          size={25}
          resizeMode="contain"
          mx={2}
        />
        <Image
          source={require("../assets/search.png")}
          alt="Search"
          size={25}
          mx={2}
        />
      </Box>
    </Box>
  );
};

export default Header;
