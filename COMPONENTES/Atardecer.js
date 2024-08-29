import { StyleSheet, Text, View, Image } from 'react-native';

function Atardecer(props) {
  return (
    <View>
      <Image style={styles.atardecer} source={props.imagen} />
      <Text style={styles.titulo}>{props.nombre}</Text>
    </View>
  );
}

export default Atardecer;

const styles = StyleSheet.create({
  atardecer: {
    marginTop: 10,
    borderRadius: 8,
    width: 300,
    height: 300,
  },
  titulo: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'blue',
  },
});
