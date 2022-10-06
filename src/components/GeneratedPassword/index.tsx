import { View, Text } from 'react-native';

import styles from './styles';

interface GeneratedPasswordProps {
  password: string;
}

export function GeneratedPassword({ password }: GeneratedPasswordProps) {
  return (
    <View style={styles.passwordContainer}>
      <Text style={styles.password}>{password}</Text>
    </View>
  );
}
