import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FEFAF6',
    flex: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign:'center',
    fontWeight: 'bold',
    marginTop:15
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor:'#FFF6E9',
    padding: 8,
    color:'#000',
    marginBottom: 10,
    borderRadius: 4,
  },
  imagePreview: {
    width: 280,
    height: 200,
    marginTop: 20,
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#914F1E',
    borderRadius: 8,
    padding: 12,
    width:300,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonsandimage:{
    alignItems:'center'
  }
});

export default style;
