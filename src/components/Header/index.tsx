import { View, Text } from 'react-native';

import styles from './styles';

export function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>strongpass</Text>
    </View>
  );
}
