import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  buttons: {
    display: 'flex',
    height: '20%',
  },
});

class Footer extends React.Component {
  static raidsBtnHandler() {
    console.log('RAIDS BUTTON');
  }

  static tasksBtnHandler() {
    console.log('Tasks BUTTON');
  }

  static pkmnBtnHandler() {
    console.log('Pokemon BUTTON');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.buttons} type="solid" title="Raids" className="footerRaidsBtn" onPress={this.raidsBtnHandler} />
        <Button style={styles.buttons} type="solid" title="Tasks" className="footerTasksBtn" onPress={this.tasksBtnHandler} />
        <Button style={styles.buttons} type="solid" title="PKMN" className="footerPkmnBtn" onPress={this.pkmnBtnHandler} />
      </View>
    );
  }
}


export default Footer;
