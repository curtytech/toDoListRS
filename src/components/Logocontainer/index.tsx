import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from '@assets/logo.png';
import { styles } from './style'

export function Logocontainer() {
    return (
        <View>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={Logo}
                    alt="Logo"
                />
            </View>
        </View>
    )
}