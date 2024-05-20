import { StyleSheet, Dimensions } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';

const Header = () => {
  return (
    <Appbar.Header style={styles.header}>
      <Searchbar placeholder="Pesquisar" style={styles.searchBar} />
      <Appbar.Action icon="account-circle" onPress={() => {}} />
      <Appbar.Content title="Paulo" titleStyle={styles.title} />
    </Appbar.Header>
  );
};

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4169e1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth,
  },
  searchBar: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    marginRight: 10,
  },
});

export default Header;
