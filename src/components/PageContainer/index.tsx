import { ScrollView, View } from 'react-native';

import styles from './styles';

interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: 'center', flex: 1 }}
      style={styles.container}
    >
      {children}
    </ScrollView>
  );
}
