import React, { useState } from 'react';
import { styles } from './BatButtonStyles';
import * as Clipboard from 'expo-clipboard';
import { BatTextInput } from '../BatTextInput';
import { Pressable, Text } from 'react-native';
import generatePass from '../../services/passwordServices';

export function BatButton() {
    const [ pass, setPass ] = useState('')

    const handleGenerateButton = () => {
        setPass(generatePass())
    }

    const handleCopyButton = () => {
        Clipboard.setStringAsync(pass)
    }

  return (
    <>
        <BatTextInput
            pass={pass}
        />

        <Pressable 
            style={styles.button}
            onPress={handleGenerateButton}
        >
            <Text style={styles.text}>
                ⚡ GENERATE
            </Text>
        </Pressable>

        <Pressable 
            style={styles.button}
            onPress={handleCopyButton}
        >
            <Text style={styles.text}>
                ⚡ COPY
            </Text>
        </Pressable>
    </>
  );
}