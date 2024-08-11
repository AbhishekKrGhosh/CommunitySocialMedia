import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(180),
    paddingHorizontal:horizontalScale(20),
    backgroundColor:'#F1DEC6',
    justifyContent:'center',
    flex: 1,
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#FFF6E9',
    fontSize: 16,
  },
  communityItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor:'#FEFAF6'
  },
  communityText: {
    fontSize: 16,
    color: '#007BFF',
    textAlign:'center',
    marginLeft:horizontalScale(15),
    fontWeight: '500',
  },
  selectedCommunityText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
    fontStyle: 'italic',
  },
  createContainer: {
    marginTop: 20,
  },
  createTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  createInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#FFF6E9',
    fontSize: 16,
    marginBottom: 10,
  },
  createButton: {
    backgroundColor: '#914F1E',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loadingIndicator: {
    marginTop: 20,
  },
});

export default style;
