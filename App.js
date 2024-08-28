import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Atardecer from './COMPONENTES/Atardecer';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>Galeria de atardeceres</Text>

      <ScrollView>
      <View style={styles.imageContainer}>
        <Atardecer>
          nombre='Atardecer morado'
          imagen={require('./IMAGENES/1.jpg')}
        </Atardecer>
        <Atardecer>
          nombre='Atardecer'
          imagen={require('./IMAGENES/2.jpg')}
        </Atardecer>
        <Atardecer>
          nombre='Atardecer naranja'
          imagen={require('./IMAGENES/3.jpg')}
        </Atardecer>
        <Atardecer>
          nombre='Atardecer ilustrado'
          imagen={require('./IMAGENES/4.jpg')}
        </Atardecer>
        <Atardecer>
          nombre='Atardecer y mar'
          imagen={require('./IMAGENES/5.jpg')}
        </Atardecer>
        <Atardecer>
          nombre='Atardecer babyblue'
          imagen={require('./IMAGENES/6.jpg')}
        </Atardecer>
        <Atardecer>
          nombre='Atardecer horizonte'
          imagen={require('./IMAGENES/7.jpg')}
        </Atardecer>
        <Atardecer>
          nombre='Atardecer fantastico'
          imagen={require('./IMAGENES/8.jpg')}
        </Atardecer>
        <Atardecer>
          nombre='Atardecer lightblue'
          imagen={require('./IMAGENES/9.jpg')}
        </Atardecer>
        <Atardecer>
          nombre='Atardecer y mar'
          imagen={require('./IMAGENES/10.jpg')}
        </Atardecer>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginVertical: 20,
  },
  tituloPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  scrollView: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imagen: {
    borderRadius: 5,
    width: 150,
    height: 150,
  },
  titulo: {
    marginTop: 5,
    fontSize: 16,
    color: 'black',
  },
});
