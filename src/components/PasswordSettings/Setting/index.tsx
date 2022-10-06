import { View, Text, Switch } from 'react-native';

import styles from './styles';

interface SettingProps {
  text: string;
  value: boolean;
  setValue: (value: boolean) => void;
}

export function Setting({ text, value, setValue }: SettingProps) {
  function onValueChange() {
    setValue(!value);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.settingText}>{text}</Text>

      <Switch
        trackColor={{ false: '#B7BEFB', true: '#6357CC' }}
        thumbColor='#ffffff'
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
}
