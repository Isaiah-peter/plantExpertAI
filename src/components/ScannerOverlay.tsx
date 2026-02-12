import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ScannerOverlay: React.FC = () => {
  return (
    <View style={styles.targetFrame}>
      {/* Corner Brackets */}
      <View style={[styles.corner, styles.topLeft]} />
      <View style={[styles.corner, styles.topRight]} />
      <View style={[styles.corner, styles.bottomLeft]} />
      <View style={[styles.corner, styles.bottomRight]} />
      
      {/* The Central Leaf Circle */}
      <View>
        <Image 
          source={require('../../assets/images/scan.png')} 
          style={styles.leafIcon} 
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  targetFrame: {
    width: 260,
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leafIcon: { width: 250, height: 250 },
  corner: {
    position: 'absolute',
    width: 45,
    height: 45,
    borderColor: '#FDE68A',
    borderWidth: 3,
  },
  topLeft: { top: 0, left: 0, borderRightWidth: 0, borderBottomWidth: 0, borderTopLeftRadius: 30 },
  topRight: { top: 0, right: 0, borderLeftWidth: 0, borderBottomWidth: 0, borderTopRightRadius: 30 },
  bottomLeft: { bottom: 0, left: 0, borderRightWidth: 0, borderTopWidth: 0, borderBottomLeftRadius: 30 },
  bottomRight: { bottom: 0, right: 0, borderLeftWidth: 0, borderTopWidth: 0, borderBottomRightRadius: 30 },
});

export default ScannerOverlay;