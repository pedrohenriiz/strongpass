import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

import { Label } from '../Label';

import styles from './styles';

interface PasswordLengthProps {
  password: number;
  setPassword: (value: number) => void;
}

export function PasswordLength({ password, setPassword }: PasswordLengthProps) {
  return (
    <View style={styles.container}>
      <Label text='Password length' length={password} />

      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>4</Text>
        <Slider
          style={styles.slider}
          minimumValue={4}
          maximumValue={16}
          value={password}
          minimumTrackTintColor='#8894F9'
          maximumTrackTintColor='#ACB5FF'
          thumbTintColor='#ffffff'
          onValueChange={(value: number) =>
            setPassword(Math.floor(Math.round(value)))
          }
        />
        <Text style={styles.sliderLabel}>16</Text>
      </View>
    </View>
  );
}
