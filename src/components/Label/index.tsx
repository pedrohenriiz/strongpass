import { Text } from 'react-native';

import styles from './styles';

interface LabelProps {
  text: string;
  length?: number;
}

export function Label({ text, length }: LabelProps) {
  return (
    <Text style={styles.label}>
      {text}
      {length && `: ${length}`}
    </Text>
  );
}
