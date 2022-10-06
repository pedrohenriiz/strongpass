import { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { getRandomCharacter } from './src/utils/getRandomCharacter';

import { Header } from './src/components/Header';
import { PageContainer } from './src/components/PageContainer';
import { GeneratedPassword } from './src/components/GeneratedPassword';
import { PasswordLength } from './src/components/PasswordLength';
import { PasswordSettings } from './src/components/PasswordSettings';
import { GeneratePasswordButton } from './src/components/GeneratePasswordButton';
import { PageSettingsWrapper } from './src/components/PageSettingsWrapper';

export default function App() {
  const [password, setPassword] = useState('');
  const [numbers, setNumbers] = useState(true);
  const [letters, setLetters] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [passwordLength, setPasswordLength] = useState(10);

  const generatePassword = useCallback(() => {
    let generatedPassword: string = '';

    const countSelectedTypes =
      Number(numbers) + Number(letters) + Number(symbols) + Number(uppercase);

    const types = [{ numbers }, { letters }, { symbols }, { uppercase }].filter(
      (item) => {
        return Object.values(item)[0] === true;
      }
    );

    if (countSelectedTypes === 0) {
      return null;
    }

    for (let i = 0; i < passwordLength; i += countSelectedTypes) {
      types.forEach((type) => {
        const typeKeys = Object.keys(type)[0];
        const generateRandomLetter = getRandomCharacter(typeKeys);
        generatedPassword += generateRandomLetter;
      });
    }

    const finalPassword = generatedPassword.slice(0, passwordLength);

    setPassword(finalPassword);
  }, [numbers, letters, symbols, uppercase, passwordLength]);

  return (
    <PageContainer>
      <Header />

      <GeneratedPassword password={password} />

      <PageSettingsWrapper>
        <PasswordLength
          password={passwordLength}
          setPassword={setPasswordLength}
        />
        <PasswordSettings
          number={{ numbers, setNumbers }}
          letter={{ letters, setLetters }}
          symbol={{ symbols, setSymbols }}
          letterUppercase={{ uppercase, setUppercase }}
        />
      </PageSettingsWrapper>

      <GeneratePasswordButton handleGeneratePassword={generatePassword} />

      <StatusBar style='auto' />
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
