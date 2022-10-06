import { View, Text } from 'react-native';

import { Label } from '../Label';

import { Setting } from './Setting';

import styles from './styles';

interface PasswordSettingsProps {
  number: {
    numbers: boolean;
    setNumbers: (value: boolean) => void;
  };
  letter: {
    letters: boolean;
    setLetters: (value: boolean) => void;
  };
  symbol: {
    symbols: boolean;
    setSymbols: (value: boolean) => void;
  };
  letterUppercase: {
    uppercase: boolean;
    setUppercase: (value: boolean) => void;
  };
}

export function PasswordSettings({
  number,
  letter,
  symbol,
  letterUppercase,
}: PasswordSettingsProps) {
  return (
    <View style={styles.container}>
      <Label text='Password settings' />
      <Setting
        text='Numbers'
        value={number.numbers}
        setValue={number.setNumbers}
      />
      <Setting
        text='Letters'
        value={letter.letters}
        setValue={letter.setLetters}
      />
      <Setting
        text='Symbols'
        value={symbol.symbols}
        setValue={symbol.setSymbols}
      />
      <Setting
        text='Uppercase'
        value={letterUppercase.uppercase}
        setValue={letterUppercase.setUppercase}
      />
    </View>
  );
}
