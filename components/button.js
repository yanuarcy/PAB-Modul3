import React from "react";
import { Button, NativeBaseProvider, Text } from "native-base";

const MyButton = (props) => {
  return (
      <Button
        backgroundColor="#dddddd"
        padding={15}
        alignItems="center"
        borderRadius={30}
        onPress={props.onPress}
      >
        <Text fontSize={16} textTransform="uppercase" fontWeight="bold">
          {props.text}
        </Text>
      </Button>
  );
};

export default MyButton;
