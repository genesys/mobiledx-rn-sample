import React, { useState, useEffect } from 'react';
import { NativeModules, Button } from 'react-native';

import DXChatModule from 'react-native-android-module-gndx';


const ChatButton = () => {
  const onPress = () => {

    DXChatModule.startChatComponent("f8aad9d7-f8e7-48e9-ab02-eef92bc4fd2f", "inindca.com",
    "com.genesys.messenger.poc", true, "tehila.rozin@genesys.com", "666-666-66", "Fame", "RO");
  }

  return (
    <Button
      title="Click to invoke your chat!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default ChatButton;
