import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileCard = () => {
  return (
    <View style={styles.header}>

        {/* Left Icon */}
    <TouchableOpacity onPress={() => alert("Menu clicked!")}>
    <Ionicons name="menu" size={24} color="white" style={styles.icon} />
    </TouchableOpacity>

        {/* Title */}
    <Text style={styles.title}>Profile</Text>

        {/* Right Icon */}
    <TouchableOpacity onPress={() => alert("Share clicked!")}>
    <Ionicons name="share-social" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
     backgroundColor: '#1877F2',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    paddingHorizontal: 5,
  },
});

export default ProfileCard;