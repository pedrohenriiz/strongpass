import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 12,
  },
  slider: {
    width: '100%',
    padding: 8,
  },
  sliderContainer: {
    height: 47,
    width: '100%',
    backgroundColor: '#ECEEFF',
    borderRadius: 4,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderLabel: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#695ECA',
    fontWeight: 'bold',
  },
  password: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#574CB7',
  },
});

export default styles;
