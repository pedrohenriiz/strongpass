import { View } from 'react-native';

import styles from './styles';

interface PageSettingsWrapperProps {
  children: React.ReactNode;
}

export function PageSettingsWrapper({ children }: PageSettingsWrapperProps) {
  return <View style={styles.container}>{children}</View>;
}
