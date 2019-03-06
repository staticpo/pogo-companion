import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


const styles = StyleSheet.create({
  CreditsTitle: {
    fontSize: 22,
  },
  CreditsText: {
    fontSize: 16,
  },
});

// eslint-disable-next-line react/prefer-stateless-function
class Credits extends Component {
  render() {
    return (
      <View>
        <Text style={styles.CreditsTitle}>About &amp; Credits</Text>
        <View style={styles.CreditsText}>
          <FlatList
            data={[
              { key: 'Search by fandicon from the Noun Project' },
              { key: 'Pokeball by Nikita Kozin from the Noun Project' },
              { key: 'Binocular by David from the Noun Project' },
            ]}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
        </View>
      </View>
    );
  }

};


export default Credits;
