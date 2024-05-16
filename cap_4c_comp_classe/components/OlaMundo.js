import React from "react";
import { Text, View, StyleSheet } from "react-native";

class OlaMundo extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.texto}>Olá, </Text>
        <Text style={[styles.texto, styles.leitor]}>{this.props.nome}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  texto: {
    fontFamily: 'Verdana',
    fontSize: 18,
  },
  leitor: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'red',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },

});

export default OlaMundo;

// ______________________________________________________________
// Alinhado na parte superior

// import React from "react";
// import { Text, View, StyleSheet } from "react-native";

// class OlaMundo extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.texto}>Olá, </Text>
//         <Text style={[styles.texto, styles.leitor]}>{this.props.nome}</Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     paddingTop: 50,
//   },
//   texto: {
//     fontFamily: 'Verdana',
//     fontSize: 18,
//   },
//   leitor: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: 'red',
//     fontStyle: 'italic',
//     textDecorationLine: 'underline',
//   },
// });

// export default OlaMundo;

// ______________________________________________________________
// Alinhado na inferior direito

// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// class OlaMundo extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={[styles.texto, styles.alignRight]}>Olá, </Text>
//         <Text style={[styles.texto, styles.leitor, styles.alignRight]}>{this.props.nome}</Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignSelf: 'flex-end',
//   },
//   texto: {
//     fontFamily: 'Verdana',
//     fontSize: 18,
//   },
//   leitor: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: 'red',
//     fontStyle: 'italic',
//     textDecorationLine: 'underline',
//   },
//   alignRight: {
//     alignSelf: 'flex-end',
//     marginRight: 20,
//   },
// });

// export default OlaMundo;