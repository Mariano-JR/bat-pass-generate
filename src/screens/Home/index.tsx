import styles from './Style'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { BatLogo } from '../../components/BatLogo';
import { BatButton } from '../../components/BatButton';

export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>
            <View style={styles.inputContainer}>
                <BatButton/>
            </View>

            
            <StatusBar style="light" />
        </View>
    )
}