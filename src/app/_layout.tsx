import React from 'react';
import { useFonts } from 'expo-font';
import { Image, ActivityIndicator } from 'react-native';
import { Colors } from '../Constants/Colors';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import ApolloClientProvider from '../providers/ApolloClientProvider';


const LogoImage = require('../../assets/icon.png');

interface RootLayoutProps {}

const RootLayout: React.FC<RootLayoutProps> = () => {
  const [fontsLoaded] = useFonts({
    'F1-Black': require('../../assets/fonts/Formula1-Black.ttf'),
    'F1-Bold': require('../../assets/fonts/Formula1-Bold_web.ttf'),
    'F1-Italic': require('../../assets/fonts/Formula1-Italic.ttf'),
    'F1-Regular': require('../../assets/fonts/Formula1-Regular-1.ttf'),
    'F1-Wide': require('../../assets/fonts/Formula1-Wide.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  const LogoTitle = () => (
    <Image
      source={LogoImage}
      style={{ width: 70, height: 70, alignSelf: 'center', justifyContent:'center'}} 
    />
  );

  return (
    <ApolloClientProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary },
          headerTitleStyle: { color: 'white', fontFamily: 'F1-Bold' },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen
          name="pages"
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
        />
      </Stack>
      <StatusBar style="light" />

      
    </ApolloClientProvider>
  );
};

export default RootLayout;
