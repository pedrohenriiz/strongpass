import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

interface GeneratedPasswordButtonProps {
  handleGeneratePassword: () => void;
}

export function GeneratePasswordButton({
  handleGeneratePassword,
}: GeneratedPasswordButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={handleGeneratePassword}
    >
      <LinearGradient
        style={styles.button}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={['#6357CC', '#4337AD']}
      >
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
