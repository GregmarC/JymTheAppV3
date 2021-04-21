/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/Home';
import JymBuddy from './src/components/JymBuddy';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import JymBuddyListItem from './src/components/JymBuddyListItem';
import SearchResultsScreen from './src/screens/SearchResultsScreen';
import WorkoutLocationSearch from './src/screens/WorkoutLocationSearch';
import SearchParams from './src/screens/SearchParams';
import Router from './src/navigation/Routers';
import { withAuthenticator } from 'aws-amplify-react-native'


const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Router />
      </SafeAreaProvider>
    </>
  );
};

export const deepSquidInk = '#152939';
export const linkUnderlayColor = '#FFF';
export const textInputColor = '#000000';
export const textInputBorderColor = '#C4C4C4';
export const placeholderColor = '#C7C7CD';
export const buttonColor = '#ff9900';
export const disabledButtonColor = '#ff990080';

const MyTheme = {
  googleSignInButton: { backgroundColor: "red", borderColor: "red" },
  container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingTop: 20,
		width: '100%',
		backgroundColor: '#FFF',
	},
	section: {
		flex: 1,
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	sectionScroll: {
		flex: 1,
		width: '100%',
		paddingHorizontal: 20,
	},
	sectionHeader: {
		width: '100%',
		marginBottom: 32,
		paddingTop: 20,
	},
	sectionHeaderText: {
		color: deepSquidInk,
		fontSize: 20,
		fontWeight: '500',
	},
	sectionFooter: {
		width: '100%',
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 15,
		marginBottom: 20,
	},
	sectionFooterLink: {
		fontSize: 14,
		color: 'grey',
		alignItems: 'baseline',
		textAlign: 'center',
	},
	sectionFooterLinkDisabled: {
		fontSize: 14,
		color: disabledButtonColor,
		alignItems: 'baseline',
		textAlign: 'center',
	},
	navBar: {
		marginTop: 35,
		padding: 15,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	navButton: {
		marginLeft: 12,
		borderRadius: 4,
	},
	cell: {
		flex: 1,
		width: '50%',
	},
	errorRow: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	errorRowIcon: {
		height: 25,
		width: 25,
	},
	errorRowText: {
		marginLeft: 10,
	},
	photo: {
		width: '100%',
	},
	album: {
		width: '100%',
	},
	button: {
		backgroundColor: 'purple',
		alignItems: 'center',
		padding: 16,
	},
	buttonDisabled: {
		backgroundColor: 'black',
		alignItems: 'center',
		padding: 16,
	},
	buttonText: {
		color: '#fff',
		fontSize: 14,
		fontWeight: '600',
	},
	formField: {
		marginBottom: 22,
	},
	input: {
		padding: 16,
		borderWidth: 1,
		borderRadius: 3,
		borderColor: textInputBorderColor,
		color: textInputColor,
	},
	inputLabel: {
		marginBottom: 8,
	},
	phoneContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	phoneInput: {
		flex: 2,
		padding: 16,
		borderWidth: 1,
		borderRadius: 3,
		borderColor: textInputBorderColor,
		color: textInputColor,
	},
	picker: {
		flex: 1,
		height: 44,
	},
	pickerItem: {
		height: 44,
	},
	signedOutMessage: {
		textAlign: 'center',
		padding: 20,
	},
};

export default withAuthenticator(App, false, [], null, MyTheme);